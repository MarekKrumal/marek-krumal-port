import { useTranslations } from "next-intl";
import Weather from "./Weather";
import { BiMap, BiCaretRight, BiSubdirectoryLeft } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

const MarekKrumal = () => {
  const t = useTranslations("MarekKrumal");

  return (
    <div className="relative z-10 mx-auto p-4 sm:p-6 md:p-8 border shadow-sm dark:bg-black/10 bg-stone-50 max-w-3xl bg hover:shadow-sky-500/20 hover:shadow-2xl transition-shadow duration-300">
      <div className="space-y-2">
        <h1 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-2xl md:text-3xl lg:text-4xl font-mono">
          Marek Křůmal
        </h1>
        <h2 className="relative flex items-center space-x-2">
          <BiMap size={16} strokeWidth={1} />
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
            <li className="flex items-center gap-2 text-blue-400 text-md md:text-lg lg:text-xl">
              <BiCaretRight />
              React.js
            </li>
            <li className="flex items-center gap-2 text-black/60 dark:text-white/70 text-md md:text-lg lg:text-xl">
              <BiCaretRight />
              Next.js
            </li>
            <li className="flex items-center gap-2 text-blue-500 text-md md:text-lg lg:text-xl">
              <BiCaretRight />
              TypeScript
            </li>
          </ul>
          <ul className="space-y-2 list-inside">
            <li className="flex items-center gap-2 text-yellow-500 dark:text-yellow-400 text-md md:text-lg lg:text-xl">
              <BiCaretRight />
              JavaScript
            </li>
            <li className="flex items-center gap-2 text-sky-500 dark:text-sky-400 text-md md:text-lg lg:text-xl">
              <BiCaretRight />
              Tailwind
            </li>
            <li className="flex items-center gap-2 text-green-600 dark:text-green-400 text-md md:text-lg lg:text-xl">
              <BiCaretRight />
              Node.js
            </li>
          </ul>
        </div>

        <h1 className="text-xl font-semibold uppercase font-mono pt-3 text-orange-600 dark:text-orange-500 ml-1 flex items-center space-x-4">
          {t("projekt")}
          <BiSubdirectoryLeft size={30} className="p-1 -rotate-90" />
        </h1>
      </div>

      {/* GitHub and Email Links */}
      <div className="absolute top-4 right-4 flex flex-row space-x-4">
        <a
          href="https://github.com/MarekKrumal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-1 pt-5 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-shadow duration-300 dark:bg-transparent bg-transparent"
        >
          <SiGithub size={20} />
        </a>
        <a
          href="mailto:krumalmarek@gmail.com"
          className="flex items-center justify-center pr-5 pt-5 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-shadow duration-300 dark:bg-transparent bg-transparent"
        >
          <MdOutlineEmail size={25} />
        </a>
      </div>
    </div>
  );
};

export default MarekKrumal;
