import { MapPin } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiArrowElbowRightDownLight } from "react-icons/pi";

export default function MyProjects() {
  return (
    <div className="group relative z-10 mx-auto mt-0 p-12 border shadow-sm duration-300 dark:bg-transparent bg-transparent hover:bg-gray-100 dark:hover:bg-black/10 max-w-3xl hover:shadow-2xl transition-shadow ">
      <div className="absolute top-4 right-4 flex space-x-0 md:space-x-4">
        <a
          href="https://github.com/MarekKrumal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-transparent hover:bg-white dark:hover:bg-white/10"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="mailto:krumalmarek@gmail.com"
          className="flex flex-col items-center justify-center p-2 hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-transparent hover:bg-white dark:hover:bg-white/10"
        >
          <MdOutlineEmail size={20} />
        </a>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold uppercase group-hover:text-blue-900 dark:group-hover:text-cyan-100">
          Moje Projekty
        </h1>
        <h2 className="relative flex items-center space-x-2">
          <MapPin size={16} strokeWidth={1} />
          <span className="font-light text-gray-700 dark:text-gray-400">
            Olomouc, Česká Republika
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          adipisicing elit. Itaque, distinctio minima! Maxime, perferendis.
        </p>
        <h1 className="text-sm uppercase font-bold pt-3 dark:group-hover:text-sky-100 group-hover:text-sky-800">
          technologie
          <p className="absolute left-60 bottom-10 flex items-center space-x-2">
            <PiArrowElbowRightDownLight size={24} />
          </p>
        </h1>
      </div>
    </div>
  );
}
