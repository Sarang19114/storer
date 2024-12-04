// /[type]/page.tsx
import React from "react";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";
import Card from "@/components/Card";
import { getFileTypesParams } from "@/lib/utils";

interface SearchParamProps {
  searchParams: {
    query?: string;
    sort?: string;
  };
  params: {
    type?: string;
  };
}

type FileType = string;

const Page = async ({ searchParams, params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  console.log("Sorting Parameters:", {
    type,
    searchText,
    sort,
  });

  const types = getFileTypesParams(type) as FileType[];

  const files = await getFiles({
    types,
    searchText,
    sort,
  });

  console.log("Files Fetched:", {
    totalFiles: files?.documents?.length || 0,
    sortApplied: sort,
  });

  if (!files || !files.documents || files.documents.length === 0) {
    return (
      <div className="page-container">
        <p className="empty-list">No files uploaded</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>

        <div className="total-size-section flex items-center justify-between">
          <p className="body-1">
            Total:{" "}
            <span className="h5">
              {files.documents.reduce((acc: number, file: Models.Document) => acc + (file.size || 0), 0)} MB
            </span>
          </p>

          <div className="sort-container flex items-center gap-2">
            <p className="body-1 text-brand hidden sm:block">Sort by:</p>
            <Sort />
          </div>
        </div>
      </section>

      <section className="file-list grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {files.documents.map((file: Models.Document) => (
          <Card key={file.$id} file={file} />
        ))}
      </section>
    </div>
  );
};

export default Page;
