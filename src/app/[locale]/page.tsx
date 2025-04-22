import MarekKrumal from "@/components/MarekKrumal";
import LatestPosts from "@/components/Posts/LatestPosts";
import Contact from "@/components/Contact/Contact";
import ProjectListServer from "@/components/Projects/ProjectListServer";

export default async function HomePage({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const params = await paramsPromise;

  return (
    <div className="space-y-1 z-0">
      <div className="mx-auto max-w-3xl">
        <MarekKrumal />
      </div>
      <div className="mx-auto max-w-3xl">
        <ProjectListServer />
      </div>
      <div className="pt-1 mx-auto max-w-3xl">
        <LatestPosts params={params} />
        <div className="pt-4 mt-4">
          <Contact />
        </div>
      </div>
    </div>
  );
}
