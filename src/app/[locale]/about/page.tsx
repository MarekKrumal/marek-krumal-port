import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="relative z-10 mx-auto pt-5 md:pt-6 border dark:bg-black/10 bg-stone-100 max-w-3xl">
      <div className="space-y-4 px-7">
        <h1 className="text-md sm:text-xl md:text-2xl font-mono uppercase mb-5 font-bold">
          {t("title")}
        </h1>
        <p className="text-base text-gray-800 dark:text-gray-200 md:pr-40">
          {t("description")}
        </p>
      </div>

      <div className="flex justify-around space-x-2 mt-8">
        <div className="font-mono flex flex-col items-center space-y-2"></div>
      </div>
    </div>
  );
};

export default Page;
