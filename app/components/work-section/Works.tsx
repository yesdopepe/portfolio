"use client";
import React, { useEffect, useState } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";
import axios from 'axios';

interface Project {
  id: number;
  documentId: string;
  title: string;
  gitLink: string | null;
  liveLink: string | null;
  about: string | null;
  Stack: { id: number; Tech: string }[];
  img: any;
}

export default function Works() {
  const { setSectionInView } = useView();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data.data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {projects.map((project) => (
        <FolioCard
          key={project.id}
          img={project.img?.formats?.large?.url || "/offset-folio.svg"} // Default image if none provided
          title={project.title}
          gitLink={project.gitLink || undefined}
          liveLink={project.liveLink || undefined}
          about={project.about || "Project description coming soon..."}
          stack={project.Stack.map(s => s.Tech)}
        />
      ))}
      <Timeline />
    </section>
  );
}
