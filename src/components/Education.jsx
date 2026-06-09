import SectionWrapper from "./SectionWrapper";

function Education() {
    return (
        <SectionWrapper>
            <section
                id="education"
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
            <div className="max-w-5xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Education
                </h2>

                <div className="space-y-8">

                    <div className="bg-slate-900 p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold text-orange-500">
                            Master of Computer Applications (MCA)
                        </h3>

                        <p className="text-gray-400">
                            Netaji Subhash Engineering College, Kolkata
                        </p>

                        <p className="mt-2">
                            University : Maulana Abul Kalam Azad University of Technology (MAKAUT)
                        </p>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold text-orange-500">
                            Bachelor of Computer Applications (BCA)
                        </h3>

                        <p className="text-gray-400">
                            Techno India University, Kolkata
                        </p>

                        <p className="mt-2">
                            University : Techno India University(TIU)
                        </p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold text-orange-500">
                            Higher Secondary (10+2)
                        </h3>

                        <p className="text-gray-400">
                            Kola Union High School, Kolaghat
                        </p>

                        <p className="mt-2">
                            Board : West Bengal Council of Higher Secondary Education (WBCHSE)
                        </p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold text-orange-500">
                            Secondary (10th)
                        </h3>

                        <p className="text-gray-400">
                            Kola Union High School, Kolaghat
                        </p>

                        <p className="mt-2">
                            Board : West Bengal Council of Secondary Education (WBBSE)
                        </p>
                    </div>
                </div>

            </div>
        </section>
        </SectionWrapper>
    );
}

export default Education;