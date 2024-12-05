import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { useTranslations } from "next-intl";
import EmailOnClick from "./EmailOnClick";

const Page = () => {
  const t = useTranslations("ContactPage");

  return (
    <div className="z-10 mx-auto mt-0 p-4 sm:p-6 md:p-12 border shadow-sm dark:bg-black/10 bg-stone-50 max-w-3xl bg hover:shadow-sky-500/5 hover:shadow-2xl transition-shadow duration-300">
      <div className="space-y-2">
        <h1 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-2xl md:text-3xl lg:text-4xl font-mono">
          {t("title")}
        </h1>

        <p>
          <EmailOnClick />
        </p>
      </div>

      <div className="flex justify-around space-x-2 mt-8">
        <div className="font-mono flex flex-col items-center space-y-2">
          <a
            href="mailto:krumalmarek@gmail.com"
            className="flex items-center justify-center p-2 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-transform duration-300"
          >
            <MdOutlineEmail size={45} />
          </a>
          <span className="font-mono text-xs text-gray-600 dark:text-gray-300">
            E-mail
          </span>
          <p className="text-xs font-mono font-extralight break-words max-w-[164px] text-center">
            krumalmarek@gmail.com
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <a
            href="https://github.com/MarekKrumal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-transform duration-300"
          >
            <FiGithub size={45} />
          </a>
          <span className="text-xs text-gray-600 dark:text-gray-300">
            GitHub
          </span>
          <p className="text-xs font-mono font-extralight">MarekKrumal</p>
        </div>

        <div className="font-mono flex flex-col items-center space-y-2">
          <a
            href="https://www.linkedin.com/in/marek-krumal-747437339/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 hover:scale-105 hover:text-sky-800 dark:hover:text-sky-100 transition-transform duration-300"
          >
            <RiLinkedinLine size={45} />
          </a>
          <span className="font-mono text-xs text-gray-600 dark:text-gray-300">
            LinkedIn
          </span>
          <p className="text-xs font-mono font-extralight">Marek Krumal</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
