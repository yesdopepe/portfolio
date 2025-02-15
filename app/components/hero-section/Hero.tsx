"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  delay,
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import dynamic from "next/dynamic";
export default function Hero() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };
  const Hero3DScene = dynamic(() => import("./Hero3DScene"), { ssr: false });
  const DynamicComponentWithNoSSR = dynamic(
    () => import("lottie-react"),
    { ssr: false,
     }
  )
  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeIn,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  const [isMounted, setIsMounted] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    setIsMounted(true);
    fetch('/wave.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);

  return (
    <section
      ref={ref}
      className="pt-36 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      <div className="text sm:w-[60%]">
        <motion.div
          className="flex items-center mb-2 xl:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <p className="text-white/60 text-xl smm:text-2xl mb-1 smm:mb-0 lg:text-3xl">
            Hey, there!
          </p>
          {animationData && <DynamicComponentWithNoSSR style={{height:30, marginLeft: '0.5rem'}} loop={3} animationData={animationData} />}
        </motion.div>
        <motion.h1
          className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <p className="text-white/60 inline">I&apos;m </p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Yamen
          </span>
          <p>AKA</p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            YESDO
          </span>
          <p>an AI and Data Engineer</p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/40  text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 "
        >
          Building the future with AI and Data Science!
        </motion.p>
      </div>

      {/* IMAGE */}
      {isMounted && (
        <div data-blobity-tooltip="Interact with me!" className="w-full sm:w-[40%] h-[400px] sm:h-[500px] relative z-10">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 100 }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Hero3DScene />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      )}
    </section>
  );
}
