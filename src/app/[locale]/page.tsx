// pages/HomePage.jsx
import MarekKrumal from "@/components/MarekKrumal";
import ProjectArtStore from "@/components/ProjectArtStore";
import ProjectAware from "@/components/ProjectAware";

export default async function HomePage() {
  return (
    <div className="space-y-1 z-0">
      <div className="mx-auto mt-[-12px] p-7 max-w-3xl">
        <MarekKrumal />
      </div>
      <div className="mx-auto mt-0 p-7 max-w-3xl">
        <ProjectAware
          title="Aware"
          githubUrl="https://github.com/MarekKrumal/awares33"
          liveUrl="https://awares33.vercel.app/"
        />
      </div>
      <div className="mx-auto mt-0 p-7 max-w-3xl">
        <ProjectArtStore
          title="ArtStore"
          githubUrl="https://github.com/MarekKrumal/art-store-next-js"
          liveUrl="https://art-store-next-js-fv76.vercel.app/"
        />
      </div>
    </div>
  );
}
