"use client";

import MarekKrumal from "@/components/MarekKrumal";
import ProjectList from "@/components/ProjectList";

export default function HomePage() {
  return (
    <div className="space-y-1 z-0">
      <div className="mx-auto pb-7 max-w-4xl">
        <MarekKrumal />
      </div>

      <ProjectList />
    </div>
  );
}
