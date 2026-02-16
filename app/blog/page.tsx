import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-16">Blog Técnico</h1>

        <div className="space-y-10">
          {posts.map((post) => (
            <div key={post.slug} className="border-b border-white/5 pb-6">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold mb-2 hover:text-white transition">
                  {post.title}
                </h2>
              </Link>

              <p className="text-white/40 text-sm">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
