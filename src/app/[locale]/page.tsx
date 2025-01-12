import MarekKrumal from "@/components/MarekKrumal";
import LatestPosts from "@/components/Posts/LatestPosts";
import Contact from "@/components/Contact/Contact";
import ProjectListServer from "@/components/Projects/ProjectListServer";

export default function HomePage() {
  return (
    <div className="space-y-1 z-0">
      <div className="mx-auto max-w-3xl">
        <MarekKrumal />
      </div>
      <div className="mx-auto max-w-3xl">
        <ProjectListServer />
      </div>
      <div className="pt-1 mx-auto max-w-3xl">
        <LatestPosts />
        <div className="pt-4 mt-4">
          <Contact />
        </div>
      </div>
    </div>
  );
}
