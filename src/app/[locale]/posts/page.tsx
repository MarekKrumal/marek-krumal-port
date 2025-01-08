import PostList from "@/components/Posts/PostList";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("posts");

  return (
    <div className="relative z-10 mx-auto pt-5 md:pt-6 border shadow-sm dark:bg-black/10 bg-stone-50 max-w-3xl hover:shadow-sky-500/20 hover:shadow-2xl transition-shadow duration-300">
      <h1 className="text-md pl-7 sm:text-xl md:text-2xl font-mono text-blue-700 dark:text-cyan-100 uppercase mb-5 font-bold">
        {t("header")}
      </h1>
      <p className="text-sm pl-7 text-gray-700 dark:text-gray-400">
        {t("headerdesc")}
      </p>
      <div className="p-4">
        <PostList />
      </div>
    </div>
  );
}
