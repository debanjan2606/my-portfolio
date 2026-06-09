import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}

Message:
${message}`
    );

    window.location.href =
      `mailto:debanjan.bhaumik1@gmail.com?subject=${subject}&body=${body}`;

    e.target.reset();
  };

  return (
    <SectionWrapper>
      <section
        id="contact"
        className="scroll-mt-24 py-24 px-6 bg-slate-900"
      >
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Contact Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left Side */}
            <div>

              <h3 className="text-2xl font-bold text-orange-500 mb-4">
                Let's Connect
              </h3>

              <p className="text-gray-300 mb-6">
                I'm always interested in internships,
                collaborations, and new opportunities.
              </p>

              <div className="space-y-4">

                <a
                  href="mailto:debanjan.bhaumik1@gmail.com"
                  className="flex items-center gap-3 hover:text-orange-500 transition"
                >
                  <FaEnvelope />
                  debanjan.bhaumik1@gmail.com
                </a>

                <a
                  href="https://github.com/Debanjan00"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-orange-500 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/debanjan-bhaumik"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-orange-500 transition"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

              </div>

            </div>

            {/* Right Side Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  focus:outline-none
                  focus:border-orange-500
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  focus:outline-none
                  focus:border-orange-500
                "
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  focus:outline-none
                  focus:border-orange-500
                "
              ></textarea>

              <button
                type="submit"
                className="
                  bg-orange-500
                  hover:bg-orange-600
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Contact;