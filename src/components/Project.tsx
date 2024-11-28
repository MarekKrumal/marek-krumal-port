import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";

export default function Project({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
}) {
  return (
    <div className="overflow-hidden shadow-lg">
      <div className="relative overflow-hidden group">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-300 z-0"
          width={400}
          height={250}
        />
        <div className="absolute inset-0 border-t border-r border-l bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent transition-all duration-300"></div>
      </div>
      <div className="p-8 bg-black z-[100] mt-0 max-w-3xl border-t-0 border-l border-r border-b">
        <h2 className="text-xl font-bold text-white uppercase">{title}</h2>
        <p className="text-gray-400 dark:text-gray-400 mt-2">{description}</p>
        <div className="mt-4 flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col border-white/30 items-center justify-center p-2 shadow-sm border hover:shadow-md transition-shadow duration-300 hover:bg-white/10 dark:hover:bg-white/10"
            >
              <FiGithub size={20} className="text-white" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col border-white/30 items-center justify-center p-2 shadow-sm border hover:shadow-md transition-shadow duration-300 hover:bg-white/10 dark:hover:bg-white/10"
            >
              <BsLink45Deg size={20} className="text-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
