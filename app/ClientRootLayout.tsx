"use client";
import { ViewProvider } from "@/contexts/ViewContext";
import Header from "./components/header-section/Header";
import { initialBlobityOptions } from "@/utils/blobity.config";
import useBlobity from "blobity/lib/react/useBlobity";

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blobity = useBlobity(initialBlobityOptions);

  

  return (
    <ViewProvider>
      <Header />
      {children}
    </ViewProvider>
  );
}