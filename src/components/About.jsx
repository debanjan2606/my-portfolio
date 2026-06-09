import SectionWrapper from "./SectionWrapper";

function About() {
  return (
    <SectionWrapper>
      <section
        id="about"
        className="scroll-mt-24 py-24 px-6 bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Photo Area */}
            <div className="flex justify-center">

              <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-lg">

                <img
                  src="/profile.jpg"
                  alt="Debanjan Bhaumik"
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition
                    duration-300
                  "
                />

              </div>

            </div>

            {/* Content */}
            <div>

              <h3 className="text-3xl font-bold text-orange-500 mb-4">
                MCA Student & Aspiring Cloud Engineer
              </h3>

              <p className="text-gray-300 leading-8">
                I am an MCA student with a strong interest in
                Cloud Computing, Artificial Intelligence,
                Cyber Security, Networking, and Full Stack Development.
              </p>

              <p className="text-gray-300 leading-8 mt-4">
                I enjoy building modern web applications,
                exploring cloud technologies, and continuously
                learning new skills. My goal is to develop
                scalable solutions and establish a successful
                career in cloud computing and software engineering.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-slate-900 p-4 rounded-xl">
                  <h4 className="text-orange-500 text-xl font-bold">
                    Education
                  </h4>
                  <p>MCA Student</p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl">
                  <h4 className="text-orange-500 text-xl font-bold">
                    Focus
                  </h4>
                  <p>Cloud & AI</p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl">
                  <h4 className="text-orange-500 text-xl font-bold">
                    Location
                  </h4>
                  <p>Kolkata, India</p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl">
                  <h4 className="text-orange-500 text-xl font-bold">
                    Interests
                  </h4>
                  <p>MERN & Cloud</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default About;