import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
export default function Home() {
  return (
   <div className="flex-1">
    <Hero/>
    <Skills/>
    <Projects/>a
   </div>)
}
