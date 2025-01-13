import { motion } from "framer-motion";
import Image from "next/image";
import { FaCircleArrowRight } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, slug }) => {
  return (
    <a href={`/projects/${slug}`} className="block no-underline">
      <motion.div
        className="bg-neutral-900 rounded-2xl overflow-hidden border-2 border-neutral-700"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="relative h-48 md:h-64 rounded-2xl  "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "fill" }}
            className="group-hover:scale-105 transition duration-300 p-1 rounded-2xl"
          />
        </motion.div>

        <motion.div
          className="p-4"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-sm text-neutral-400 uppercase tracking-wider">
            {category}
          </p>
          <div className="flex justify-between items-center mt-2">
            <motion.h3
              className="text-lg font-semibold"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <motion.div>
              {/* Simple arrow icon using HTML entities */}
              <span className="text-gray-400 hover:text-white text-2xl">
                <FaCircleArrowRight size={30} />
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
