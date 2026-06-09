import SectionWrapper from "./SectionWrapper";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "PHP"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Linux", "Git", "GitHub"],
    },
  ];

  return (
    <SectionWrapper>
      <section
        id="skills"
        className="py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="
  bg-slate-800
  p-6
  rounded-2xl
  hover:-translate-y-2
  hover:shadow-lg
  hover:shadow-orange-500/20
  transition-all
  duration-300
"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-4">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-slate-700 px-3 py-2 rounded-lg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;