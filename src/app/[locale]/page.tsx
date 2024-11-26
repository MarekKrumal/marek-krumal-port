//import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marek Krůmal - My website",
};

export default async function HomePage() {
  //const t = await getTranslations("HomePage");
  return <section className="sapce-y-16">FrontPAge</section>;
}
