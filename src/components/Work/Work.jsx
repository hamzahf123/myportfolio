import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import Reveal from "../ui/Reveal";
import Spotlight from "../ui/Spotlight";
import SectionTitle from "../ui/SectionTitle";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Modal: close on Escape and keep the page from scrolling behind it
  useEffect(() => {
    if (!selectedProject) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject]);

  return (
    <section id="work" className="section-pad relative">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="wrap">
        {/* Section Title */}
        <SectionTitle title="PROJECTS">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </SectionTitle>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90} className="h-full">
              <Spotlight
                role="button"
                tabIndex={0}
                aria-label={`Open project: ${project.title}`}
                onClick={() => handleOpenModal(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenModal(project);
                  }
                }}
                className="glass group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.75rem] hover:-translate-y-1.5 hover:shadow-[0_50px_100px_-40px_rgba(0,0,0,1),0_0_70px_-25px_rgba(217,189,132,0.35)]"
              >
                <div className="p-3">
                  <div className="relative overflow-hidden rounded-[1.2rem] bg-ink-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-52 w-full object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.06]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-[1.2rem] bg-gradient-to-t from-ink-950/55 via-transparent to-transparent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.07)]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-7 pb-8 pt-4">
                  <h3 className="text-[1.45rem] font-normal leading-snug tracking-[-0.03em] text-platinum">
                    {project.title}
                  </h3>
                  <p className="mb-6 mt-3 line-clamp-3 text-[0.92rem] leading-[1.75] text-fog transition-colors duration-500 group-hover:text-mist">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-full border border-gold-400/20 bg-gold-400/[0.05] px-3 py-1 text-xs text-gold-300/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[70] flex animate-fade-in items-center justify-center bg-ink-950/80 p-4 backdrop-blur-xl"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass relative max-h-[92vh] w-[92%] max-w-3xl animate-modal-in overflow-y-auto rounded-[2rem] bg-ink-900/95 shadow-[0_60px_140px_-30px_rgba(0,0,0,1),0_0_100px_-40px_rgba(217,189,132,0.4)]"
          >
            <button
              type="button"
              onClick={handleCloseModal}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink-950/60 text-2xl leading-none text-mist backdrop-blur-md transition-all duration-500 ease-silk hover:rotate-90 hover:border-gold-400/50 hover:text-gold-300"
            >
              &times;
            </button>

            <div className="flex flex-col">
              <div className="flex w-full justify-center px-4 pt-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-[1.4rem] object-contain shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.08]"
                />
              </div>
              <div className="p-6 sm:p-10">
                <h3 className="mb-5 text-2xl font-light tracking-[-0.035em] text-platinum sm:text-4xl">
                  {selectedProject.title}
                </h3>
                <p className="mb-7 text-sm leading-[1.85] text-mist sm:text-base">
                  {selectedProject.description}
                </p>
                <div className="mb-9 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-gold-400/20 bg-gold-400/[0.05] px-3 py-1 text-xs text-gold-300/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex-1"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex-1 !px-6 !text-sm !tracking-wide"
                  >
                    <span className="relative z-10">View Live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
