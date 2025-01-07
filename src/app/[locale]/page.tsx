"use client";

import MarekKrumal from "@/components/MarekKrumal";
import ProjectList from "@/components/Projects/ProjectList";

export default function HomePage() {
  return (
    <div className="space-y-1 z-0">
      <div className="mx-auto max-w-3xl">
        <MarekKrumal />
      </div>
      <div className="mx-auto max-w-full sm:max-w-xl md:max-w-3xl">
        <ProjectList />
      </div>
    </div>
  );
}
