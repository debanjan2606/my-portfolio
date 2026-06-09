import SectionWrapper from "./SectionWrapper";

function Certifications() {
    const certs = [
        "AWS Cloud Fundamentals",
        "Python Programming",
        "Networking Basics",
        "Cyber Security Essentials",
    ];

    return (
        <SectionWrapper>
            <section
                id="certifications"
                className="scroll-mt-24 py-24 px-6"
            >
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Certifications
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        {certs.map((cert) => (
                            <div
                                key={cert}
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
                                <h3 className="text-xl font-semibold text-orange-500">
                                    {cert}
                                </h3>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </SectionWrapper>
    );
};
export default Certifications;