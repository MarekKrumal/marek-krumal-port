import { useTranslations } from "next-intl";
import { BiMailSend, BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import EmailOnClick from "./EmailOnClick";

const Page = () => {
  const t = useTranslations("ContactPage");

  return (
    <div className="relative z-10 mx-auto pt-5 md:pt-6 border dark:bg-black/10 bg-stone-100 max-w-3xl">
      <div className="space-y-4 px-7">
        <h1 className="text-md sm:text-xl md:text-2xl font-mono uppercase mb-5 font-bold">
          {t("title")}
        </h1>
        <span className="inline text-base text-gray-800 dark:text-gray-200">
          {t("description")}
        </span>
        <span className="inline">
          <EmailOnClick />
          <span>.</span>
          <br />
        </span>
        <span className="inline">{t("description2")}</span>
      </div>

      <div className="flex justify-around space-x-2 mt-8">
        <div className="font-mono flex flex-col items-center space-y-2">
          <a
            href="mailto:krumalmarek@gmail.com"
            className="flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300"
            aria-label="email"
          >
            <BiMailSend size={45} />
          </a>
          <span className="text-xs text-gray-600 dark:text-gray-300">
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
            className="flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300"
            aria-label="github"
          >
            <BiLogoGithub size={45} />
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
            className="flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300"
            aria-label="linkedin"
          >
            <BiLogoLinkedinSquare size={45} />
          </a>
          <span className="text-xs text-gray-600 dark:text-gray-300">
            LinkedIn
          </span>
          <p className="text-xs font-mono font-extralight pb-8">Marek Krumal</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
