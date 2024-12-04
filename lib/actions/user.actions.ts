"use server";

import { createAdminClient, createSessionClient } from "@/lib/appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";
import { Query, ID } from "node-appwrite";
import { parseStringify } from "@/lib/utils";
import { cookies } from "next/headers";
import { avatarPlaceholderUrl } from "@/constants";
import { redirect } from "next/navigation";

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionId,
    [Query.equal("email", email)]
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

export const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);
    console.log("Email Token Response:", session);
    return session.userId;
  } catch (error) {
    handleError(error, "Failed to send email OTP");
  }
};

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  try {
    console.log("Checking for existing user...");
    const existingUser = await getUserByEmail(email);

    console.log("Sending email OTP...");
    const accountId = await sendEmailOTP({ email });

    if (!accountId) {
      console.error("Failed to generate or retrieve accountId.");
      throw new Error("Failed to send an OTP");
    }

    if (!existingUser) {
      console.log("No existing user found. Creating new user document...");

      const { databases } = await createAdminClient();

      const document = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        ID.unique(),
        {
          fullName,
          email,
          avatar: avatarPlaceholderUrl,
          accountid: accountId,
        },
      );

      console.log("User document created successfully:", document);
      return parseStringify({ accountId });
    }

    console.log("User already exists. Returning accountId...");
    return parseStringify({ accountId });
  } catch (error) {
    console.error("Error in createAccount:", error);
    throw error;
  }
};

export const verifySecret = async ({
  accountId,
  password,
}: {
  accountId: string;
  password: string;
}) => {
  try {
    console.log("Attempting to create a session...");

    const { account } = await createAdminClient();

    const session = await account.createSession(accountId, password);

    console.log("Session created successfully:", session);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify({ sessionId: session.$id });
  } catch (error) {
    console.error("Error while verifying secret:", error);
    handleError(error, "Failed to verify OTP");
  }
};

export const getCurrentUser = async () => {
  try {
    console.log("Fetching current user session...");

    const { databases, account } = await createSessionClient();

    const result = await account.get();
    console.log("Session account details fetched:", result);

    const user = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      [Query.equal("accountid", result.$id)],
    );

    if (user.total <= 0) {
      console.warn("No user document found for accountId:", result.$id);
      return null;
    }

    console.log("User document fetched successfully:", user.documents[0]);
    return parseStringify(user.documents[0]);
  } catch (error: unknown) {
    console.error("Error fetching current user:", error);
    return null;
  }
};

export const signOutUser = async () => {
  const { account } = await createSessionClient();

  try {
    await account.deleteSession("current");
    (await cookies()).delete("appwrite-session");
  } catch (error) {
    handleError(error, "Failed to sign out user");
  } finally {
    redirect("/sign-in");
  }
};

export const signInUser = async ({ email }: { email: string }) => {
  try {
    const existingUser = await getUserByEmail(email);

    // User exists, send OTP
    if (existingUser) {
      await sendEmailOTP({ email });
      return parseStringify({ accountId: existingUser.accountid });
    }

    // If no user found, return a specific error
    return parseStringify({ 
      accountId: null, 
      error: "No account found with this email. Please sign up first." 
    });
  } catch (error) {
    handleError(error, "Failed to sign in user");
  }
};