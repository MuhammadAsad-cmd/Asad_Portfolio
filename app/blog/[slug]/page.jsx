import { notFound } from "next/navigation";
import Article from "@/app/components/Writing/Article";
import { posts } from "@/app/Data/writing";
import { indexRobots, SITE_URL } from "@/app/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | Muhammad Asad`,
    description: post.description,
    alternates: { canonical: url },
    robots: indexRobots,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      siteName: "Muhammad Asad Portfolio",
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <Article
      kicker={post.kicker}
      title={post.title}
      lede={post.lede}
      quote={post.quote}
      sections={post.sections}
      links={post.links}
    />
  );
}
