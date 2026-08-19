import {
  FaGithub,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiPython,
} from "react-icons/si";

import SectionWrapper from "./SectionWrapper";

function Projects() {
  const projects = [
    {
      title: "AWS Highly Available Web Application",
      type: "Cloud Infrastructure Project",
      description:
        "Designed a highly available AWS application environment using VPC, public and private subnets, EC2, Application Load Balancer and Auto Scaling.",
      technologies: [
        "AWS VPC",
        "EC2",
        "ALB",
        "Auto Scaling",
        "IAM",
        "CloudWatch",
      ],
      github: "https://github.com/debanjan2606",
      icon: <FaAws className="text-5xl text-orange-400" />,
    },

    {
      title: "Cloud-Based Infrastructure Monitoring System",
      type: "Cloud & DevOps Project",
      description:
        "Developed Python-based monitoring automation and deployed containerized workloads on AWS EC2 using Docker and Kubernetes.",
      technologies: [
        "AWS EC2",
        "Docker",
        "Kubernetes",
        "Linux",
        "Python",
        "IAM",
      ],
      github: "https://github.com/debanjan2606",
      icon: (
        <div className="flex gap-3">
          <SiPython className="text-4xl text-yellow-400" />
          <FaDocker className="text-4xl text-blue-400" />
          <SiKubernetes className="text-4xl text-blue-500" />
        </div>
      ),
    },

    {
      title: "Infrastructure as Code with Terraform",
      type: "DevOps / IaC",
      description:
        "Practiced provisioning and managing AWS infrastructure using Terraform, including EC2 resources, networking configuration and cloud infrastructure automation.",
      technologies: [
        "Terraform",
        "AWS",
        "EC2",
        "VPC",
        "IAM",
        "AWS CLI",
      ],
      github: "https://github.com/debanjan2606",
      icon: <SiTerraform className="text-5xl text-purple-400" />,
    },

    {
      title: "MERN E-Learning Platform",
      type: "Full Stack Project",
      description:
        "Full-stack E-Learning platform built with MongoDB, Express, React and Node.js with authentication, course management and payment integration.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Razorpay",
      ],
      github: "https://github.com/Debanjan00/E-Learning.git",
      icon: <span className="text-4xl">⚡</span>,
    },
  ];

  return (
    <SectionWrapper>
      <section
        id="projects"
        className="scroll-mt-24 py-24 px-6 bg-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-orange-500 font-medium mb-2">
              WHAT I'VE BUILT
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Practical projects focused on AWS infrastructure, cloud
              networking, automation, containers and application development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-slate-900 border border-slate-700 rounded-2xl p-7 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="h-20 flex items-center mb-6">
                  {project.icon}
                </div>

                <p className="text-orange-400 text-sm font-medium mb-2">
                  {project.type}
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-lg font-medium transition"
                >
                  <FaGithub />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Projects;
