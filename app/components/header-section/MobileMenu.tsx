"use client";
import { useView } from "@/contexts/ViewContext";
import React, { SetStateAction } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  onMenuOpen: React.Dispatch<SetStateAction<boolean>>;
  handleNavigation: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export default function MobileMenu({ onMenuOpen, handleNavigation }: MobileMenuProps) {
  const { sectionInView } = useView();
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith('/blog');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onMenuOpen(false);
    handleNavigation(e, href);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid z-30 items-center grid-cols-2 md:hidden px-6 py-5 fixed top-12 rounded-2xl bg-black/40 bg-gradient-to-r from-[#d9d9d908] max-w-[90%] w-full to-[#73737308] mt-12 sm:mt-16 std-backdrop-blur"
    >
      <ul className="flex flex-col gap-4 lg:gap-12 text-white/25">
        <Link
          href="/#home"
          onClick={(e) => handleClick(e, '/#home')}
          className={`${sectionInView === "home" && !isBlogPage && "text-white"} w-fit`}
          data-blobity
        >
          Home
        </Link>
        <Link
          href="/#work"
          onClick={(e) => handleClick(e, '/#work')}
          className={`${sectionInView === "work" && !isBlogPage && "text-white"} w-fit`}
          data-blobity
        >
          Work
        </Link>
        <Link
          href="/#about"
          onClick={(e) => handleClick(e, '/#about')}
          className={`${sectionInView === "about" && !isBlogPage && "text-white"} w-fit`}
          data-blobity
        >
          About
        </Link>
        <Link
          href="/#contact"
          onClick={(e) => handleClick(e, '/#contact')}
          className={`${sectionInView === "contact" && !isBlogPage && "text-white"}  w-fit`}
          data-blobity
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className={`${isBlogPage ? "text-white" : "text-white/25"} w-fit`}
          data-blobity
        >
          Blog
        </Link>
      </ul>

      <div className="flex flex-col gap-3 z-20 items-center justify-center">
        <Link
          className="p-4 flex-1 flex justify-center w-full rounded-xl h-fit text-4xl visited:bg-[#E3D3BE] bg-black/40 bg-gradient-to-r from-[#d9d9d908] to-[#73737308] std-backdrop-blur"
          target="_blank"
          href="https://www.linkedin.com/in/yamen-kashkash-25660a291/"
          data-blobity
          data-blobity-radius="10"
        >
          <Icon icon="hugeicons:linkedin-01" />
        </Link>

        <div className="flex gap-3 w-full">
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-black/40 bg-gradient-to-r from-[#d9d9d908] to-[#73737308] std-backdrop-blur"
            target="_blank"
            href="https://github.com/yesdopepe"
            data-blobity
            data-blobity-radius="10"
          >
            <Icon icon="hugeicons:github" />
          </Link>
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-black/40 bg-gradient-to-r from-[#d9d9d908] to-[#73737308] std-backdrop-blur"
            target="_blank"
            href="https://x.com/yes_lag"
            data-blobity
            data-blobity-radius="10"
          >
            <Icon icon="akar-icons:x-fill" />
          </Link>
        </div>
        
        <div className="flex gap-3 w-full">
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-black/40 bg-gradient-to-r from-[#d9d9d908] to-[#73737308] std-backdrop-blur"
            target="_blank"
            href="https://www.kaggle.com/yesdodata"
            data-blobity
            data-blobity-radius="10"
          >
            <Icon icon="simple-icons:kaggle" />
          </Link>
          <Link
            className="p-4 flex justify-center w-full rounded-xl h-fit text-2xl bg-black/40 bg-gradient-to-r from-[#d9d9d908] to-[#73737308] std-backdrop-blur"
            target="_blank"
            href="https://huggingface.co/YESDODATA"
            data-blobity
            data-blobity-radius="10"
          >
            <Icon icon="simple-icons:huggingface" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
