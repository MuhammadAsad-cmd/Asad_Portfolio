import { SITE_URL } from "@/app/lib/site";

const allowPublic = {
  allow: "/",
  disallow: ["/api/"],
};

const answerEngines = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "Bingbot",
  "GrokBot",
  "xAI-Bot",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", ...allowPublic },
      ...answerEngines.map((userAgent) => ({ userAgent, ...allowPublic })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
