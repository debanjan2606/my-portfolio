import SectionWrapper from "./SectionWrapper";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/projects/portfolio.png",
      description:
        "A modern portfolio website built using React, Vite and Tailwind CSS.",
      github: "#",
      demo: "#",
    },
    {
      title: "E-Learning Platform",
      image: "/projects/elearning.png",
      description:
        "A full-stack E-Learning platform built using the MERN stack with authentication and course management features.",
      github: "https://github.com/Debanjan00/E-Learning.git",
      demo: "https://e-learning-frontend-psi.vercel.app",
    },
    {
      title: "AI Chatbot",
      image: "/projects/chatbot.png",
      description:
        "An intelligent chatbot built using AI APIs and modern web technologies.",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <SectionWrapper>
      <section
        id="projects"
        className="scroll-mt-24 py-24 px-6 bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  bg-slate-900
                  rounded-2xl
                  overflow-hidden
                  hover:-translate-y-2
                  hover:shadow-lg
                  hover:shadow-orange-500/20
                  transition-all
                  duration-300
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-52
                    object-cover
                  "
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-orange-500 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        bg-orange-500
                        hover:bg-orange-600
                        px-4
                        py-2
                        rounded-lg
                        transition
                      "
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        border
                        border-orange-500
                        hover:bg-orange-500
                        px-4
                        py-2
                        rounded-lg
                        transition
                      "
                    >
                      Live Demo
                    </a>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Projects;