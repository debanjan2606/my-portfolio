import SectionWrapper from "./SectionWrapper";

function Skills() {
  const skillCategories = [
    {
      title: "☁️ AWS Cloud",
      skills: [
        "EC2",
        "S3",
        "VPC",
        "IAM",
        "RDS",
        "EBS",
        "ELB",
        "Auto Scaling",
        "CloudWatch",
      ],
    },
    {
      title: "🌐 Cloud Networking",
      skills: [
        "VPC",
        "Subnets",
        "CIDR",
        "Route Tables",
        "Security Groups",
        "TCP/IP",
        "DNS",
        "SSH",
      ],
    },
    {
      title: "🐳 DevOps & Containers",
      skills: [
        "Docker",
        "Docker Compose",
        "Kubernetes",
        "Deployments",
        "Services",
        "Container Orchestration",
      ],
    },
    {
      title: "🏗️ Infrastructure as Code",
      skills: [
        "Terraform",
        "AWS CloudFormation",
        "AWS CLI",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "🐧 Operating Systems",
      skills: [
        "Linux",
        "Ubuntu",
        "Amazon Linux",
        "Windows",
        "Bash",
      ],
    },
    {
      title: "🔐 Security & Monitoring",
      skills: [
        "IAM Best Practices",
        "Security Groups",
        "HTTPS / SSL",
        "CloudWatch",
        "Infrastructure Monitoring",
        "Performance Monitoring",
      ],
    },
    {
      title: "💻 Programming",
      skills: [
        "Python",
        "Bash",
        "JavaScript",
        "React",
        "Node.js",
      ],
    },
    {
      title: "🌐 Web & Server",
      skills: [
        "Nginx",
        "Apache",
        "REST APIs",
        "HTTP / HTTPS",
        "DNS",
      ],
    },
  ];

  return (
    <SectionWrapper>
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-orange-500 font-medium mb-2">
              WHAT I WORK WITH
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Technical Skills
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Technologies and tools I use for cloud infrastructure,
              automation, networking and application deployment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="group bg-slate-800/70 border border-slate-700 p-6 rounded-2xl hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-orange-400 mb-5">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-slate-900 border border-slate-700 px-3 py-2 rounded-lg text-gray-300 group-hover:border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;
