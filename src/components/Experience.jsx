import {
  FaAws,
  FaDocker,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

import SectionWrapper from "./SectionWrapper";

function Experience() {
  return (
    <SectionWrapper>
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-orange-500 font-medium mb-2">
              EXPERIENCE
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Professional Experience
            </h2>
          </div>

          <div className="relative border-l border-orange-500/40 ml-4 md:ml-8">

            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-orange-500 border-4 border-slate-900" />

              <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-7">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-6">

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      AWS Cloud Engineer Intern
                    </h3>

                    <p className="text-orange-400 mt-1">
                      Ardent Computech Pvt. Ltd.
                    </p>
                  </div>

                  <span className="text-sm text-gray-400 bg-slate-900 px-4 py-2 rounded-lg">
                    Apr 2026 – Jun 2026
                  </span>
                </div>

                <ul className="space-y-3 text-gray-400 leading-7">
                  <li>
                    • Assisted in deploying and maintaining AWS infrastructure
                    using EC2, S3 and VPC.
                  </li>

                  <li>
                    • Administered VPC security groups and route tables to
                    manage access control and network traffic.
                  </li>

                  <li>
                    • Containerized applications using Docker for deployment
                    and testing.
                  </li>

                  <li>
                    • Supported Kubernetes cluster deployment and container
                    orchestration.
                  </li>

                  <li>
                    • Automated administrative tasks using Python and AWS CLI.
                  </li>

                  <li>
                    • Managed source code using Git and GitHub.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-5 mt-7 text-3xl">
                  <FaAws className="text-orange-400" />
                  <FaDocker className="text-blue-400" />
                  <SiKubernetes className="text-blue-500" />
                  <FaPython className="text-yellow-400" />
                  <FaGitAlt className="text-orange-500" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Experience;
