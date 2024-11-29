import React from "react";
import { techStack } from "./TechStackdata";

export default function TechStack() {
  return (
    <div className="space-y-2 mt-0 max-w-3xl relative z-10 hover:shadow-2xl transition-shadow duration-300">
      <div className="grid grid-cols-4 gap-0">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 sm:p-9 shadow-sm border hover:shadow-md transition-shadow duration-300 dark:bg-transparent bg-transparent hover:bg-gray-100 dark:hover:bg-black/10"
          >
            <div className="text-2xl sm:text-5xl mb-4 transition-colors duration-300">
              {tech.icon}
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
