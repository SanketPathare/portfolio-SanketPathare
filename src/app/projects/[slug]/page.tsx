import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, TvMinimalPlay } from "lucide-react";
import { FaGithub } from "react-icons/fa";
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
      <div className="flex flex-col justify-center items-center h-[60vh] text-center">
        <h2 className="text-2xl font-bold text-[#09090B] dark:text-[#FAFAFA] mb-2">Project not found</h2>
        <p className="text-[#71717A] dark:text-[#A1A1AA] mb-6">The requested project could not be located.</p>
        <Link href="/projects" className="btn-primary text-sm">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-10">
      <div className="w-full">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 text-sm font-medium text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#FAFAFA] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Container */}
          <div className="w-full">
            <div className="relative h-[200px] md:h-[300px] lg:h-[300px] rounded-3xl overflow-hidden border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "fill" }}
                priority
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] w-fit">
              CASE STUDY
            </div>

            <h1 className="headline-md font-bold text-[#09090B] dark:text-[#FAFAFA] mb-4">
              {project.title}
            </h1>

            <p className="body-md text-[#71717A] dark:text-[#A1A1AA] leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="space-y-6">
              {/* Project Details */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#09090B] dark:text-[#FAFAFA] mb-3">
                  Project Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Links */}
                  <div className="bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] p-4 rounded-2xl">
                    <p className="text-xs uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-2 font-semibold">
                      Links
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={project.GithubLink}
                        target="_blank"
                        className="btn-secondary text-xs h-9 px-4 gap-1.5"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </Link>

                      <Link
                        href={project.LiveLink}
                        target="_blank"
                        className="btn-primary text-xs h-9 px-4 gap-1.5"
                      >
                        <TvMinimalPlay className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </Link>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] p-4 rounded-2xl flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1 font-semibold">
                      Duration
                    </p>
                    <p className="font-semibold text-sm text-[#09090B] dark:text-[#FAFAFA]">
                      {project.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#09090B] dark:text-[#FAFAFA] mb-3">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="chip-mono text-xs py-1.5 px-3 bg-[#FAFAFA] dark:bg-[#18181B] hover:bg-white dark:hover:bg-[#202024] transition-colors"
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
  );
}
