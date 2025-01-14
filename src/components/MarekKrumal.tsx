import { useLocale, useTranslations } from "next-intl";
import { BiMap, BiCaretRight, BiSubdirectoryLeft } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const MarekKrumal = () => {
  const t = useTranslations("MarekKrumal");
  const locale = useLocale();

  return (
    <div className="relative z-10 mx-auto p-6 sm:p-8 md:p-10 border dark:bg-black/10 bg-stone-50">
      <div className="space-y-4">
        {/* Header */}
        <h1 className="font-bold uppercase text-2xl md:text-3xl lg:text-4xl font-mono">
          Marek Křůmal
        </h1>
        <h2 className="flex items-center space-x-2">
          <BiMap size={16} strokeWidth={1} />
          <span className="font-mono text-gray-700 dark:text-gray-400">
            {t("olomouc")}
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300">{t("description")}</p>
        <Link
          href={`/${locale}/projects`}
          className="inline font-mono lowercase dark:text-indigo-300 dark:hover:text-indigo-500 text-indigo-500 hover:text-indigo-700 hover:underline"
        >
          {t("descriptionlink")}
        </Link>
        <p className="inline text-gray-700 dark:text-gray-300">
          {t("description2")}
        </p>
        <Link
          href={`/${locale}/posts`}
          className="font-mono lowercase dark:text-indigo-300 dark:hover:text-indigo-500 text-indigo-500 hover:text-indigo-700 hover:underline"
        >
          {t("descriptionlink2")}
        </Link>
        <p className="inline text-gray-700 dark:text-gray-300">
          {t("description3")}
        </p>

        {/* Technologies */}
        <h1 className="text-lg font-semibold uppercase font-mono pt-4 ">
          {t("technologies")}
        </h1>
        <div className="grid grid-cols-2 gap-4 font-mono">
          <ul className="space-y-2 list-inside">
            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-md md:text-lg">
              <BiCaretRight />
              <span className="text-black/80 dark:text-white/80">Next.js</span>
            </li>
            <li className="flex items-center gap-2 text-blue-400 text-md md:text-lg">
              <BiCaretRight />
              React.js
            </li>
            <li className="flex items-center gap-2 text-blue-500 text-md md:text-lg">
              <BiCaretRight />
              TypeScript
            </li>
            <li className="flex items-center gap-2 text-yellow-500 text-md md:text-lg">
              <BiCaretRight />
              JavaScript
            </li>
          </ul>
          <ul className="space-y-2 list-inside">
            <li className="flex items-center gap-2 text-purple-600 text-md md:text-lg">
              <BiCaretRight />
              Vite
            </li>
            <li className="flex items-center gap-2 text-sky-500 text-md md:text-lg">
              <BiCaretRight />
              TailwindCSS
            </li>
            <li className="flex items-center gap-2 text-green-600 text-md md:text-lg">
              <BiCaretRight />
              Node.js
            </li>
            <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-md md:text-lg">
              <BiCaretRight />
              Vercel
            </li>
          </ul>
        </div>

        {/* Projects */}
        <h1 className="text-2xl font-semibold uppercase font-mono pt-3 text-orange-600 dark:text-orange-500 flex items-center space-x-4">
          {t("projekt")}
          <BiSubdirectoryLeft size={30} className="p-1 -rotate-90" />
        </h1>
      </div>

      {/* GitHub and Email Links */}
      <div className="absolute top-7 right-7 flex space-x-4">
        <a
          href="https://github.com/MarekKrumal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform"
        >
          <SiGithub size={22} />
        </a>
        <a
          href="mailto:krumalmarek@gmail.com"
          className="hover:scale-125  transition-transform"
        >
          <MdOutlineEmail size={24} />
        </a>
      </div>
    </div>
  );
};

export default MarekKrumal;
