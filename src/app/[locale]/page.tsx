// pages/HomePage.jsx
import MarekKrumal from "@/components/MarekKrumal";
import TechStack from "@/components/TechStack";

export default async function HomePage() {
  return (
    <div className="space-y-1">
      <div className="relative mx-auto mt-8 p-7 max-w-3xl">
        <MarekKrumal />
      </div>
      <div className="relative mx-auto mt-8 p-7 max-w-3xl">
        <TechStack />
      </div>
    </div>
  );
}
