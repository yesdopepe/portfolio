"use client";
import { initialBlobityOptions } from "@/utils/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blobity = useBlobity(initialBlobityOptions);

  return <>{children}</>;
}