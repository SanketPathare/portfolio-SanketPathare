import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image,
  slug,
}) => {
  return (
    <Link href={`/projects/${slug}`} className="block group">
      <motion.div
        className="bg-white border border-[#E4E4E7] rounded-3xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#09090B] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-[#E4E4E7] bg-[#FAFAFA] mb-4">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="px-2 pb-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#71717A] mb-1">
            {category}
          </p>
          <div className="flex justify-between items-center mt-1">
            <h3 className="text-base sm:text-lg font-bold text-[#09090B] group-hover:text-[#18181B] transition-colors">
              {title}
            </h3>
            <span className="w-9 h-9 rounded-full border border-[#E4E4E7] bg-white flex items-center justify-center text-[#71717A] group-hover:text-white group-hover:bg-[#18181B] group-hover:border-[#18181B] transition-all">
              <FaArrowRight size={13} />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
