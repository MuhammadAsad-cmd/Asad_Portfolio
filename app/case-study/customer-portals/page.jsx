import Article from "@/app/components/Writing/Article";
import { caseStudies } from "@/app/Data/writing";
import { indexRobots, SITE_URL } from "@/app/lib/site";

const study = caseStudies["customer-portals"];

export const metadata = {
  title: `${study.title} | Muhammad Asad`,
  description: study.description,
  alternates: { canonical: `${SITE_URL}/case-study/customer-portals` },
  robots: indexRobots,
  openGraph: {
    title: study.title,
    description: study.description,
    url: `${SITE_URL}/case-study/customer-portals`,
    type: "article",
  },
};

export default function CustomerPortalsCaseStudy() {
  return (
    <Article
      kicker={study.kicker}
      title={study.title}
      lede={study.lede}
      quote={study.quote}
      sections={study.sections}
      links={study.links}
    />
  );
}
