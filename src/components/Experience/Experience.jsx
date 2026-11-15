import React from "react";
import { experiences } from "../../constants"; // Import your data
import Reveal from "../ui/Reveal";
import Spotlight from "../ui/Spotlight";
import SectionTitle from "../ui/SectionTitle";

const Experience = () => {
  return (
    <section id="experience" className="section-pad relative">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="wrap">
        {/* Section Title */}
        <SectionTitle title="EXPERIENCE">
          A collection of my work experience and the roles I have taken in
          various organizations
        </SectionTitle>

        {/* Experience Timeline */}
        <div className="relative pl-9 sm:pl-14">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-3 w-px bg-gradient-to-b from-gold-400/70 via-gold-500/20 to-transparent sm:left-[11px]"
          />

          {/* Experience Entries */}
          {experiences.map((experience) => (
            <Reveal key={experience.id} className="relative mb-12 last:mb-0">
              {/* Timeline marker */}
              <span
                aria-hidden="true"
                className="absolute -left-9 top-9 grid h-[15px] w-[15px] place-items-center rounded-full border border-gold-400/60 bg-ink-950 sm:-left-14 sm:h-[23px] sm:w-[23px]"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-gold-300 shadow-[0_0_14px_3px_rgba(217,189,132,0.7)] sm:h-[7px] sm:w-[7px]" />
              </span>

              {/* Content Section */}
              <Spotlight className="glass rounded-[1.75rem] p-7 sm:p-10">
                {/* Flex container for image and text */}
                <div className="flex items-center gap-5 sm:gap-6">
                  {/* Company Logo/Image */}
                  <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-[#ecebe6] p-1.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),inset_0_-2px_6px_rgba(0,0,0,0.1)] sm:h-20 sm:w-20">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Role, Company Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-normal leading-tight tracking-[-0.03em] text-platinum sm:text-[1.9rem]">
                        {experience.role}
                      </h3>
                      <h4 className="mt-1 text-base text-gold-400 sm:text-[1.05rem]">
                        {experience.company}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    {experience.date && <p className="mt-2 text-sm text-fog">{experience.date}</p>}
                  </div>
                </div>

                <p className="mt-8 max-w-[44rem] text-[0.98rem] leading-[1.85] text-mist">{experience.desc}</p>
                <div className="mt-8 border-t border-white/[0.07] pt-6">
                  <h5 className="text-sm font-medium text-platinum">Skills:</h5>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <li
                        key={index}
                        className="rounded-full border border-gold-400/25 bg-gold-400/[0.06] px-4 py-1.5 text-xs text-gold-300 transition-all duration-500 ease-silk hover:border-gold-400/60 hover:bg-gold-400/[0.12] sm:text-[0.82rem]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
