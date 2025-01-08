import PostList from "@/components/Posts/PostList";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("posts");

  return (
    <div className="mx-auto sm:pt-6 md:pt-12 border shadow-md dark:bg-black/10 bg-stone-50 max-w-3xl bg hover:shadow-sky-500/5 hover:shadow-2xl transition-shadow duration-300">
      <h1 className="font-bold p-6 uppercase text-blue-700 dark:text-cyan-100 text-2xl md:text-3xl lg:text-4xl font-mono">
        {t("header")}
      </h1>
      <p className="text-sm p-6 text-gray-700 dark:text-gray-400">
        {t("headerdesc")}
      </p>
      <div className="p-0">
        <PostList />
      </div>
    </div>
  );
}
