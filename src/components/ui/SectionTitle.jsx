import React from "react";
import Reveal from "./Reveal";

/**
 * Editorial section header: large light-weight title on the left,
 * supporting sentence on the right, a fine gold rule between.
 */
const SectionTitle = ({ title, children }) => (
  <div className="mb-14 grid gap-7 md:mb-20 lg:grid-cols-12 lg:items-end lg:gap-10">
    <Reveal className="lg:col-span-7">
      <h2 className="text-platinum-gradient text-[clamp(2.9rem,7vw,5.75rem)] font-light lowercase leading-[0.95] tracking-[-0.045em] first-letter:uppercase">
        {title}
      </h2>
      <span className="mt-7 block h-px w-24 bg-gradient-to-r from-gold-400 to-transparent" />
    </Reveal>
    <Reveal delay={120} className="lg:col-span-5">
      <p className="max-w-md text-base leading-[1.75] text-mist md:text-[1.05rem]">{children}</p>
    </Reveal>
  </div>
);

export default SectionTitle;
