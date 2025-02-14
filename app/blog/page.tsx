"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "@/utils/blobity.config";

interface BlogPost {
  id: number;
  documentId: string;
    Title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export default function BlogPage() {
  const blobity = useBlobity(initialBlobityOptions);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/blog');
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen pt-32 px-6 max-w-[90%] xl:max-w-[1223px] mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link 
            href={`/blog/${post.documentId}`} 
            key={post.id}
            data-blobity
            className="p-6 rounded-lg bg-black/40 bg-gradient-to-r from-[#d9d9d908] to-[#73737308] hover:from-[#d9d9d910] hover:to-[#73737310] transition-all std-backdrop-blur"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.Title}</h2>
            <p className="text-white/60">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}