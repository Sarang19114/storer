// Add "use client" to make this component a Client Component
"use client";

import React from "react";
import Image from "next/image";
import { cn, getFileIcon } from "@/lib/utils";

interface Props {
  type: string;
  extension: string;
  url?: string;
  imageClassName?: string;
  className?: string;
}

export const Thumbnail = ({
  type,
  extension,
  url = "",
  imageClassName,
  className,
}: Props) => {
  const isImage = type === "image" && extension !== "svg"; // Check if the file is an image (but not SVG)
  console.log("URL Passed to Image:", url);

  // Ensure that the image URL is valid and use a default icon if not an image
  const resolvedUrl = isImage ? url : getFileIcon(extension, type);

  return (
    <figure className={cn("thumbnail", className)}>
      <Image
        src={resolvedUrl}
        alt="thumbnail"
        width={100}
        height={100}
        unoptimized // Disable Next.js image optimization for external URLs
        className={cn(
          "size-8 object-contain",
          imageClassName,
          isImage && "thumbnail-image"
        )}
        onError={(e) => {
          // Handle error by setting the fallback icon if the image URL fails
          (e.target as HTMLImageElement).src = getFileIcon(extension, type);
        }}
      />
    </figure>
  );
};

export default Thumbnail;
