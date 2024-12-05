import { MapPin } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiArrowElbowRightDownLight } from "react-icons/pi";
import { useTranslations } from "next-intl";
import { AiFillCaretRight } from "react-icons/ai";
import Weather from "./Weather";

const MarekKrumal = () => {
  const t = useTranslations("MarekKrumal");

  return (
    <div className="relative z-10 mx-auto mt-0 p-4 sm:p-6 md:p-12 border shadow-sm dark:bg-black/10 bg-stone-50 max-w-3xl bg hover:shadow-sky-500/5 hover:shadow-2xl transition-shadow duration-300">
      <div className="space-y-2">
        <h1 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-2xl md:text-3xl lg:text-4xl font-mono">
          Marek Křůmal
        </h1>
        <h2 className="relative flex items-center space-x-2">
          <MapPin size={16} strokeWidth={1} />
          <span className="font-mono text-gray-700 dark:text-gray-400">
            {t("olomouc")}
          </span>
          <Weather />
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          adipisicing elit. Itaque, distinctio minima! Maxime, perferendis.
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4 font-mono">
          <ul className="space-y-2 list-inside">
            <li className="flex items-center gap-2 text-blue-400 dark:text-blue-400 text-md md:text-lg lg:text-xl">
              <AiFillCaretRight />
              React.js
            </li>
            <li className="flex items-center gap-2 text-black/60 dark:text-white/70 text-md md:text-lg lg:text-xl">
              <AiFillCaretRight />
              Next.js
            </li>
            <li className="flex items-center gap-2 text-blue-500 dark:text-blue-500 text-md md:text-lg lg:text-xl">
              <AiFillCaretRight />
              TypeScript
            </li>
          </ul>
          <ul className="space-y-2 list-inside">
            <li className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 text-md md:text-lg lg:text-xl">
              <AiFillCaretRight />
              JavaScript
            </li>
            <li className="flex items-center gap-2 text-sky-500 dark:text-sky-400 text-md md:text-lg lg:text-xl">
              <AiFillCaretRight />
              Tailwind
            </li>
            <li className="flex items-center gap-2 text-green-500 dark:text-green-500 text-md md:text-lg lg:text-xl">
              <AiFillCaretRight />
              Node.js
            </li>
          </ul>
        </div>

        <h1 className="text-xl font-semibold uppercase font-mono pt-3 text-orange-600 dark:text-orange-500 ml-1 flex items-center space-x-4">
          {t("projekt")}
          <PiArrowElbowRightDownLight size={24} className="pl-1" />
        </h1>
      </div>

      {/* GitHub and Email Links */}
      <div className="absolute top-4 right-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <a
          href="https://github.com/MarekKrumal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-1 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100  transition-shadow duration-300 dark:bg-transparent bg-transparent"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="mailto:krumalmarek@gmail.com"
          className="flex items-center justify-center p-[0] md:p-4 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-shadow duration-300 dark:bg-transparent bg-transparent"
        >
          <MdOutlineEmail size={20} />
        </a>
      </div>
    </div>
  );
};

export default MarekKrumal;
