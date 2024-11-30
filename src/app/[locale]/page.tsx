// pages/HomePage.jsx
import MarekKrumal from "@/components/MarekKrumal";
import ProjectAware from "@/components/ProjectAware";
import Weather from "@/components/Weather";

export default async function HomePage() {
  return (
    <div className="space-y-1 z-0">
      <div className="mx-auto mt-[-12px] p-7 max-w-3xl">
        <MarekKrumal />
      </div>
      <div className="mx-auto mt-0 p-7 max-w-3xl">
        <ProjectAware
          title="Awares"
          imageUrl="/assets/awaresdemo2.jpg"
          githubUrl="https://github.com/MarekKrumal/awares33"
          liveUrl="https://awares33.vercel.app/"
        />
        <div>
          <Weather />
        </div>
      </div>
    </div>
  );
}
