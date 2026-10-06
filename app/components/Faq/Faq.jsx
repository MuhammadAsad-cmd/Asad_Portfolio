import { faqs } from "@/app/lib/site";

const Faq = () => {
  return (
    <section
      id="faq"
      className="animated-border my-6 overflow-hidden md:rounded-xl"
      aria-labelledby="faq-heading"
    >
      <div className="bg-white p-6 dark:bg-discordDark md:p-10">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-10 w-1.5 rounded-full bg-SkyBlue" />
          <div>
            <h2
              id="faq-heading"
              className="text-2xl font-bold tracking-tight text-lightPrimarytext dark:text-white md:text-3xl"
            >
              Questions about the work
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
              Scope, fit, and how to start a project.
            </p>
          </div>
        </div>

        <div className="divide-y divide-lightBorder dark:divide-darkSecondaryGray">
          {faqs.map((item, index) => (
            <details
              key={item.question}
              className="group py-4"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-lightPrimarytext marker:content-none dark:text-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="mt-1 text-SkyBlue transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-lightSecondarytext dark:text-darkPrimaryGray md:text-base">
                {item.answer.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
