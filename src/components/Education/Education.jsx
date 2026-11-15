import React from "react";
import { education } from "../../constants"; // Import the education data
import Reveal from "../ui/Reveal";
import Spotlight from "../ui/Spotlight";
import SectionTitle from "../ui/SectionTitle";

const Education = () => {
  return (
    <section id="education" className="section-pad relative">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="wrap">
        {/* Section Title */}
        <SectionTitle title="EDUCATION">
          My education has been a journey of learning and development. Here are the details of my academic background
        </SectionTitle>

        {/* Education Timeline */}
        <div className="relative pl-9 sm:pl-14">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-3 w-px bg-gradient-to-b from-gold-400/70 via-gold-500/20 to-transparent sm:left-[11px]"
          />

          {/* Education Entries */}
          {education.map((edu) => (
            <Reveal key={edu.id} className="relative mb-12 last:mb-0">
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
                  {/* School Logo/Image */}
                  <div className="grid h-16 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-[#ecebe6] p-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),inset_0_-2px_6px_rgba(0,0,0,0.1)] sm:h-20 sm:w-28">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-normal leading-tight tracking-[-0.03em] text-platinum sm:text-[1.7rem]">
                        {edu.degree}
                      </h3>
                      <h4 className="mt-1.5 text-sm leading-snug text-gold-400 sm:text-base">
                        {edu.school}
                      </h4>
                    </div>
                    {/* Date at the bottom */}
                    <p className="mt-2 text-sm text-fog">{edu.date}</p>
                  </div>
                </div>

                {edu.grade && <p className="mt-6 font-medium text-mist">{edu.grade}</p>}
                <p className="mt-8 max-w-[44rem] text-[0.98rem] leading-[1.85] text-mist">{edu.desc}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
