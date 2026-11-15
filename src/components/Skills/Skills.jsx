// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Reveal from "../ui/Reveal";
import Spotlight from "../ui/Spotlight";
import SectionTitle from "../ui/SectionTitle";

// Editorial 8/4 checkerboard; chip columns tuned to each category's size.
const LAYOUT = {
  Frontend: { span: "lg:col-span-8", cols: "grid-cols-2 sm:grid-cols-4" },
  Backend: { span: "lg:col-span-4", cols: "grid-cols-2" },
  Languages: { span: "lg:col-span-4", cols: "grid-cols-2" },
  Tools: { span: "lg:col-span-8", cols: "grid-cols-2 sm:grid-cols-3" },
};

const Skills = () => (
  <section id="skills" className="section-pad relative">
    <div className="wrap">
      {/* Section Title */}
      <SectionTitle title="SKILLS">
        A collection of my technical skills and expertise honed through various projects and experiences
      </SectionTitle>

      {/* Skill Categories */}
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        {SkillsInfo.map((category, i) => {
          const layout = LAYOUT[category.title] || { span: "lg:col-span-6", cols: "grid-cols-2" };
          return (
            <Reveal key={category.title} delay={(i % 2) * 110} className={layout.span}>
              <Spotlight className="glass h-full rounded-[1.75rem] p-7 sm:p-9">
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="text-2xl font-normal tracking-[-0.03em] text-platinum sm:text-[1.7rem]">
                    {category.title}
                  </h3>
                  <span className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" />
                </div>

                <div className={`grid gap-2.5 ${layout.cols}`}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-2.5 py-3 transition-all duration-500 ease-silk hover:-translate-y-0.5 hover:border-gold-400/40 hover:bg-white/[0.06] hover:shadow-[0_14px_40px_-16px_rgba(217,189,132,0.35)]"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#ecebe6] p-1.5 shadow-[inset_0_-2px_6px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-silk group-hover:scale-110">
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </span>
                      <span className="text-[0.82rem] leading-tight text-mist transition-colors duration-500 group-hover:text-platinum sm:text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
