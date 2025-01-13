import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
      <main className="min-h-screen pt-24 pb-12 mt-8 mr-8 ml-8">
        <div className="container mx-auto px-4">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden border-4 border-black ring-4 ring-neutral-700 p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-neutral-400 mb-8">{project.description}</p>
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Project Details
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-900 p-4 rounded-xl">
                      <p className="text-sm text-neutral-400 mb-1">View</p>
                      <Link
                        href={project.link}
                        className="font-medium flex gap-2 text-neutral-400 hover:text-white"
                      >
                        <FaGithub size={20} />
                        GitHub
                      </Link>
                    </div>
                    <div className="bg-neutral-900 p-4 rounded-xl">
                      <p className="text-sm text-neutral-400 mb-1">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-neutral-900 rounded-full text-sm"
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
    </>
  );
}
