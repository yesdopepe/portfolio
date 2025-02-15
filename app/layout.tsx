import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YAMEN AKA YESDO | AI & Data Engineer",
  description:
    "A Fullstack Engineer at Pixel Team, passionate about delivering high-quality software solutions. I am also an AI enthusiast building cutting-edge AI expiriences.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
    "web development",
    "web developer",
    "YESDO",
    "AI",
    "Data Engineer",
    "YAMEN",
  ],
  openGraph: {
    title: "YAMEN AKA YESDO | AI & Data Engineer",
    description:
      "A Fullstack Engineer at Pixel Team, passionate about delivering high-quality software solutions. I am also an AI enthusiast building cutting-edge AI expiriences.",
    url: "https://www.yesdo.tech",
    siteName: "www.yesdo.tech",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YAMEN AKA YESDO | AI & Data Engineer",
    description:
      "A Fullstack Engineer at Pixel Team, passionate about delivering high-quality software solutions. I am also an AI enthusiast building cutting-edge AI expiriences.",
    creator: "@yes_lag",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
        </>
      </body>
    </html>
  );
}
