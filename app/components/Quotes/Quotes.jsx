import Link from "next/link";
import BlogCard from "@/app/components/Writing/BlogCard";
import { posts } from "@/app/Data/writing";

const classmate = {
  quote:
    "Asad is an incredibly talented and dedicated individual who consistently demonstrates a strong grasp of technical skills, especially in Web Development. His problem-solving abilities, combined with his proactive attitude, make him an excellent team member.",
  name: "Ali Shan",
  detail: "",
  href: "https://www.linkedin.com/in/ali-shan-1798a4229",
};

export default function Quotes() {
  return (
    <section
      id="blogs"
      className="animated-border my-6 overflow-hidden md:rounded-xl"
      aria-labelledby="blogs-heading"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="blogs-heading"
              className="text-2xl font-bold text-lightPrimarytext dark:text-white md:text-3xl"
            >
              Blogs
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-lightSecondarytext dark:text-darkPrimaryGray">
              Production write-ups from Hector. Figures are from the live system.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 text-sm font-semibold text-SkyBlue hover:underline"
          >
            All blogs
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <blockquote className="mt-8 max-w-3xl border-t border-lightBorder pt-6 dark:border-darkSecondaryGray">
          <p className="text-base leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
            {classmate.quote}
          </p>
          <footer className="mt-3 text-sm">
            <a
              href={classmate.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lightPrimarytext dark:text-white"
            >
              {classmate.name}
            </a>
            <p className="text-lightSecondarytext dark:text-darkPrimaryGray">{classmate.detail}</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
