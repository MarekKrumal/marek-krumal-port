"use client";
import dynamic from "next/dynamic";

const Weather = dynamic(() => import("@/components/Weather"), {
  loading: () => <p>Loading Weather...</p>,
  ssr: false,
});

const WeatherWrapper: React.FC = () => {
  return <Weather />;
};

export default WeatherWrapper;
