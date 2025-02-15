"use client";
import { useView } from "@/contexts/ViewContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const { sectionInView } = useView();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const isBlogPage = pathname.startsWith('/blog');

  const handleNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    if (isBlogPage && href.startsWith('/#')) {
      e.preventDefault();
      router.push('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [isBlogPage, router]);

  return (
    <>
      <div className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-30 select-none">
        <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-black/40 bg-gradient-to-r from-[#d9d9d908] to-[#73737308] mt-4 md:mt-8 std-backdrop-blur">
          <Link 
            href="/#home"
            onClick={(e) => handleNavigation(e, '/#home')}
            data-blobity
          >
            <Image
              src="/yesdo-logo.webp"
              width={32}
              height={36}
              alt="logo"
              className="select-none"
            />
          </Link>
          <Icon
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer flex md:hidden text-2xl"
            icon={`${menuOpen ? "gg:close" : "lucide:menu"}`}
          />

          <ul className="hidden md:flex gap-8 lg:gap-12 text-white/25">
            <Link
              href="/#home"
              onClick={(e) => handleNavigation(e, '/#home')}
              className={`${sectionInView === "home" && !isBlogPage && "text-white"}`}
              data-blobity
            >
              Home
            </Link>
            <Link
              href="/#work"
              onClick={(e) => handleNavigation(e, '/#work')}
              className={`${sectionInView === "work" && !isBlogPage && "text-white"}`}
              data-blobity
            >
              Work
            </Link>
            <Link
              href="/#about"
              onClick={(e) => handleNavigation(e, '/#about')}
              className={`${sectionInView === "about" && !isBlogPage && "text-white"}`}
              data-blobity
            >
              About
            </Link>
            <Link
              href="/#contact"
              onClick={(e) => handleNavigation(e, '/#contact')}
              className={`${sectionInView === "contact" && !isBlogPage && "text-white"}`}
              data-blobity
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className={`${isBlogPage ? "text-white" : "text-white/25"}`}
              data-blobity
            >
              Blog
            </Link>
          </ul>
          <div className="gap-5 text-xl hidden md:flex">
            <Link 
              target="_blank" 
              href="https://www.linkedin.com/in/yamen-kashkash-25660a291/" 
              data-blobity
              data-blobity-radius="10"
            >
              <Icon icon="hugeicons:linkedin-01" />
            </Link>
            <Link 
              target="_blank" 
              href="https://github.com/yesdopepe" 
              data-blobity
              data-blobity-radius="10"
            >
              <Icon icon="hugeicons:github" />
            </Link>
            <Link 
              target="_blank" 
              href="https://x.com/yes_lag" 
              data-blobity
              data-blobity-radius="10"
            >
              <Icon icon="akar-icons:x-fill" />
            </Link>
            <Link 
              target="_blank" 
              href="https://www.kaggle.com/yesdodata" 
              data-blobity
              data-blobity-radius="10"
            >
              <Icon icon="simple-icons:kaggle" />
            </Link>
            <Link 
              target="_blank" 
              href="https://huggingface.co/YESDODATA" 
              data-blobity
              data-blobity-radius="10"
            >
              <Icon icon="simple-icons:huggingface" />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu 
            onMenuOpen={setMenuOpen} 
            handleNavigation={handleNavigation}
          />
        )}
      </AnimatePresence>
    </>
  );
}
