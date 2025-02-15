import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        I build intelligent solutions with AI
      </AnimatedTitle>

      <div className="grid grid-cols-1 text-justify gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
        <AnimatedBody className="leading-[34px] md:leading-[39px]">
  My passion lies in leveraging cutting-edge AI and software development to create impactful business solutions. Whether it’s developing intelligent web and mobile applications, streamlining eCommerce platforms, or building AI-driven solutions for automated processes, I thrive on taking businesses from their current state to their ideal future while iteratively enhancing performance over time.
</AnimatedBody>
<AnimatedBody className="leading-[34px] md:leading-[39px]">
  Since writing my first lines of code in late 2020, I’ve continually expanded my expertise across multiple domains, including AI research, data science, and Fullstack development. My journey has led me to work on AI-driven platforms, large-scale projects, and AI automation solutions for cybersecurity and edge computing—each challenge further refining my problem-solving abilities.
</AnimatedBody>
<AnimatedBody className="inline leading-[34px] md:leading-[39px]">
  Every project I take on is an opportunity for growth. I strive to deliver solutions that not only meet technical excellence but also empower businesses to achieve their goals confidently. Want to dive deeper? Here’s 
  <br className="hidden md:block" />
  <Link
    className="underline"
    href={
      "https://docs.google.com/document/d/1n10WTkYcan3AO0ilvXUI_z9NWeV919nJ/edit?usp=sharing&ouid=112561791309166536825&rtpof=true&sd=true"
    }
  >
    my résumé
  </Link>
</AnimatedBody>

        </div>

       
      </div>
    </section>
  );
}
