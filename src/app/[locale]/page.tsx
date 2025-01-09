import MarekKrumal from "@/components/MarekKrumal";
import ProjectList from "@/components/Projects/ProjectList";
import LatestPosts from "@/components/LatestPosts";
import Contact from "@/components/Contact/Contact";

export default function HomePage() {
  return (
    <div className="space-y-1 z-0">
      <div className="mx-auto max-w-3xl">
        <MarekKrumal />
      </div>
      <div className="mx-auto max-w-3xl">
        <ProjectList />
      </div>
      <div className="pt-4">
        <LatestPosts />
        <div className="pt-4">
          <Contact />
        </div>
      </div>
    </div>
  );
}
