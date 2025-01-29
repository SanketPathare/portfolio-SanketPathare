import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Radio, TvMinimalPlay } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProjectData } from "@/lib/ProjectsData";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const project = await getProjectData(slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-screen text-2xl text-gray-400">
          Project not found...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-24 pb-8 md:pb-12 px-4 md:px-8">
        <div className="container mx-auto">
          <Link
            href="/projects"
            className="flex items-center space-x-2 text-neutral-400 hover:text-white mb-6 md:mb-8"
          >
            <ArrowLeft className="w-4 h-4 hidden sm:block" />
            <span className="hidden sm:block">Back to Projects</span>
          </Link>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Image Container */}
            <div className="w-full">
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl md:rounded-2xl overflow-hidden border-2 md:border-4 border-black ring-2 md:ring-4 ring-neutral-700 p-1 md:p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                {project.title}
              </h1>
              <p className="text-neutral-400 mb-6 md:mb-8">
                {project.description}
              </p>

              <div className="space-y-4 md:space-y-6">
                {/* Project Details */}
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Project Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {/* Links */}
                    <div className="bg-neutral-900 p-3 md:p-4 rounded-lg md:rounded-xl">
                      <p className="text-sm text-neutral-400 mb-2">View</p>
                      <div className="flex gap-4">
                        <Link
                          href={project.GithubLink}
                          target="_blank"
                          className="font-medium flex gap-2 text-neutral-400 hover:text-white items-center"
                        >
                          <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="text-sm md:text-base">GitHub</span>
                        </Link>

                        <Link
                          href={project.LiveLink}
                          target="_blank"
                          className="font-medium flex gap-2 text-neutral-400 hover:text-white items-center"
                        >
                          <TvMinimalPlay className="w-4 h-4 md:w-5 md:h-5" />
                          <span className="text-sm md:text-base">
                            Live Demo
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="bg-neutral-900 p-3 md:p-4 rounded-lg md:rounded-xl">
                      <p className="text-sm text-neutral-400 mb-1">Duration</p>
                      <p className="font-medium text-sm md:text-base">
                        {project.duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-neutral-900 rounded-full text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
