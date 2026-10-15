import { absoluteUrl, SITE_URL } from "@/app/lib/site";
import { posts } from "@/app/Data/writing";

export default function sitemap() {
  const currentDate = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/case-study/hector"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/case-study/customer-portals"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/case-study/canrover"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    {
      url: absoluteUrl("/details/services"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/details/experience"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/details/projects"),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/details/education"),
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/details/certifications"),
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/details/skills"),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
