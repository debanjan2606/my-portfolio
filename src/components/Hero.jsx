import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
    return (
        <section
            className="
  min-h-screen
  flex
  items-center
  justify-center
  px-6
  bg-gradient-to-b
  from-slate-900
  via-slate-800
  to-slate-900
"
        >

            <div className="text-center max-w-4xl">

                <p className="text-orange-500 text-lg mb-3">
                    Hello, I'm
                </p>

                <h1
                    className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                >
                    Debanjan Bhaumik
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                    MCA Student | Cloud Engineer Aspirant
                </h2>

                <p className="text-gray-400 leading-8 mb-8">
                    Passionate about Cloud Computing, Artificial Intelligence,
                    Cyber Security, Networking, and Full Stack Development.
                    I enjoy building scalable applications and learning modern technologies.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">

                    <a
                        href="#projects"
                        className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold"
                    >
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        className="border border-orange-500 px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                    >
                        <FaDownload />
                        Resume
                    </a>

                </div>

                <div className="flex justify-center gap-6 text-3xl">

                    <a
                        href="https://github.com/Debanjan00"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-orange-500 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/debanjan-bhaumik"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-orange-500 transition"
                    >
                        <FaLinkedin />
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Hero;