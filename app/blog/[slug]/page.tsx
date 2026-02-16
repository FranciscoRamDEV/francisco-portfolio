import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function Post({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold mb-4">
        {post.title}
      </h1>

      <p className="text-neutral-500 text-sm mb-8">
        {post.date}
      </p>

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
