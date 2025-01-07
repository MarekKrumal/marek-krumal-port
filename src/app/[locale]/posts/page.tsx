import PostList from "@/components/Posts/PostList";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("posts");

  return (
    <div>
      <div className="mx-auto mt-0 p-4 mb-5 sm:p-6 md:p-12 border shadow-md dark:bg-black/10 bg-stone-50 max-w-3xl bg hover:shadow-sky-500/5 hover:shadow-2xl transition-shadow duration-300">
        <h1 className="font-bold uppercase text-blue-700 dark:text-cyan-100 text-2xl md:text-3xl lg:text-4xl font-mono">
          {t("header")}
        </h1>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          {t("headerdesc")}
        </p>
      </div>
      <PostList />
    </div>
  );
}
