import Image from "next/image";
import { GrStripe } from "react-icons/gr";
import { BiLogoWix } from "react-icons/bi";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const technologyConfig = {
  Nextjs: {
    label: "Nextjs",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  TypeScript: {
    label: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  Tailwind: {
    label: "Tailwind",
    icon: (
      <SiTailwindcss
        style={{
          color: "#38BDF8",
        }}
      />
    ),
  },
  Prisma: {
    label: "Prisma",
    icon: <SiPrisma className="text-gray-400" />,
  },
  WIX: {
    label: "WIX",
    icon: <BiLogoWix className="dark:text-white text-black" />,
  },
  OpenAI: {
    label: "GPT-o1",
    icon: <SiOpenai className="text-black dark:text-white" />,
  },
  Vite: {
    label: "Vite",
    icon: (
      <Image
        src="/logo.svg"
        alt="ViteLogo"
        loading="lazy"
        width={24}
        height={24}
      />
    ),
  },
  Stripe: {
    label: "Stripe",
    icon: (
      <GrStripe
        style={{
          color: "#4f46e5",
        }}
      />
    ),
  },
  JavaScript: {
    label: "JavaScript",
    icon: (
      <SiJavascript
        style={{
          color: "#F7DF1E",
        }}
      />
    ),
  },
  Kaplay: {
    label: "Kaplay",
    icon: (
      <Image
        src="/kaplay-728x261.webp"
        alt="Kaplay Logo"
        width={66}
        height={18}
      />
    ),
  },
  Nodejs: {
    label: "Nodejs",
    icon: (
      <SiNodedotjs
        style={{
          color: "#339933",
        }}
      />
    ),
  },
  MongoDB: {
    label: "MongoDB",
    icon: (
      <SiMongodb
        style={{
          color: "#47a248",
        }}
      />
    ),
  },
  Express: {
    label: "Express",
    icon: <SiExpress />,
  },
  React: {
    label: "React",
    icon: <SiReact className="text-blue-600" />,
  },
  FireBase: {
    label: "FireBase",
    icon: <SiFirebase className="text-yellow-500" />,
  },
};

export const technologyNames = [
  "Nextjs",
  "TypeScript",
  "Tailwind",
  "Prisma",
  "WIX",
  "OpenAI",
  "Vite",
  "Stripe",
  "JavaScript",
  "Kaplay",
  "Node.js",
  "MongoDB",
  "Express",
  "React",
  "FireBase",
];
