import Link from "next/link";

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-lightBorder bg-lightbg p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-SkyBlue hover:shadow-lg hover:shadow-SkyBlue/10 dark:border-white/10 dark:bg-darkSecondaryGray"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-SkyBlue/10 px-3 py-1 text-xs font-semibold text-SkyBlue">
          {post.kicker}
        </span>
        <time dateTime={post.date} className="text-xs text-lightSecondarytext dark:text-darkPrimaryGray">
          {formatDate(post.date)}
        </time>
      </div>
      <h2 className="mt-4 text-lg font-bold leading-snug text-lightPrimarytext group-hover:text-SkyBlue dark:text-white">
        {post.title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray">
        {post.description}
      </p>
      {post.quote && (
        <blockquote className="mt-4 border-l-2 border-SkyBlue/70 pl-3 text-sm leading-relaxed text-lightPrimarytext dark:text-white">
          {post.quote}
        </blockquote>
      )}
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-SkyBlue">
        Read blog
        <span className="transition-transform group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </span>
    </Link>
  );
}
