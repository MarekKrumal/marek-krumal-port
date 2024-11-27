import MarekKrumal from "@/components/MarekKrumal";
import TechStack from "@/components/TechStack";

export default async function HomePage() {
  return (
    <div>
      <div>
        <MarekKrumal />
      </div>
      <div className="relative mx-auto mt-8 p-7">
        <TechStack />
      </div>
    </div>
  );
}
