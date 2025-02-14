"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "@/utils/blobity.config";
import remarkGfm from "remark-gfm";

interface BlogPost {
  id: number;
  documentId: string;
  Title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const blobity = useBlobity(initialBlobityOptions);
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/blog/${params.id}`);
        setPost(response.data.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchPost();
  }, [params.id]);

  if (!post) return <div className="min-h-screen pt-32 px-6">Loading...</div>;

  return (
    <div className="min-h-screen pt-32 px-6 max-w-[90%] xl:max-w-[1223px] mx-auto">
      <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-zinc-800">
        <article className="prose prose-invert prose-lg max-w-none prose-h1:text-5xl prose-h2:text-3xl prose-p:text-xl prose-li:text-lg">
          <h1 className="text-5xl font-bold mb-6">{post.Title}</h1>
          <div className="text-white/60 mb-8 text-lg">
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]} className='text-xl justify'>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}