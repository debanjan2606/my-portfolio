import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiLinux } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950/30"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to Cloud & DevOps Opportunities
        </div>

        <p className="text-orange-400 text-lg md:text-xl mb-3 font-medium">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-5 text-white tracking-tight">
          Debanjan{" "}
          <span className="text-orange-500">Bhaumik</span>
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6">
          Cloud Engineer{" "}
          <span className="text-orange-500">|</span> AWS{" "}
          <span className="text-orange-500">|</span> DevOps
        </h2>

        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8 mb-8">
          MCA student with hands-on experience in AWS infrastructure, cloud
          networking, Linux, Docker, Kubernetes and automation. Passionate
          about building reliable, secure and scalable cloud environments.
        </p>

        {/* Technology badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-200">
            <FaAws className="text-orange-400" />
            AWS
          </span>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-200">
            <SiLinux />
            Linux
          </span>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-200">
            <FaDocker className="text-blue-400" />
            Docker
          </span>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-200">
            <SiKubernetes className="text-blue-400" />
            Kubernetes
          </span>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-gray-200">
            <SiTerraform className="text-purple-400" />
            Terraform
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold transition-all hover:-translate-y-1 shadow-lg shadow-orange-500/20"
          >
            View Cloud Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-7 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/debanjan2606"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-orange-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/debanjan2606"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-orange-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="mt-12 text-gray-600 text-sm">
          Scroll to explore ↓
        </div>
      </div>
    </section>
  );
}

export default Hero;
