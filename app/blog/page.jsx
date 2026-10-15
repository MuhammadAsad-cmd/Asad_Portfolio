import BlogCard from "@/app/components/Writing/BlogCard";
import { posts } from "@/app/Data/writing";
import { indexRobots, SITE_URL } from "@/app/lib/site";

export const metadata = {
  title: "Blogs | Muhammad Asad — ERP & operations",
  description:
    "How Shopify inventory, multi-channel orders, and a seller ERP actually run in production.",
  alternates: { canonical: `${SITE_URL}/blog` },
  robots: indexRobots,
};

export default function BlogIndex() {
  return (
    <main className="animated-border my-6 overflow-hidden md:rounded-xl">
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        <h1 className="text-3xl font-bold text-lightPrimarytext dark:text-white">
          Blogs
        </h1>
        <p className="mt-3 max-w-2xl text-lightSecondarytext dark:text-darkPrimaryGray">
          Three write-ups from systems already in production.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
