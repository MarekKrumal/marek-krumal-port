"use client";

import MarekKrumal from "@/components/MarekKrumal";
import ProjectList from "@/components/ProjectList";

export default function HomePage() {
  return (
    <div className="space-y-1 z-0">
      <div className="mx-auto pt-0 p-7 max-w-3xl">
        <MarekKrumal />
      </div>

      <ProjectList />
    </div>
  );
}
