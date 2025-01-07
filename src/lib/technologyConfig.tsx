import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiOpenai,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";
import { BiLogoWix } from "react-icons/bi";
import Image from "next/image";
import { GrStripe } from "react-icons/gr";

export const technologyConfig = {
  "Next.js": {
    label: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  TypeScript: {
    label: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  Tailwind: {
    label: "Tailwind",
    icon: <SiTailwindcss className="text-sky-500" />,
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
    icon: <SiOpenai className=" text-black dark:text-white" />,
  },
  Vite: {
    label: "Vite",
    icon: (
      <Image
        src="/logo.svg"
        alt="ViteLogo"
        loading="lazy"
        width={25}
        height={25}
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
    icon: <SiJavascript className="text-yellow-500" />,
  },
  Kaplay: {
    label: "Kaplay",
    icon: (
      <Image
        src="/kaplay-728x261.png"
        alt="Kaplay Logo"
        width={66}
        height={18}
      />
    ),
  },
  "Node.js": {
    label: "Node.js",
    icon: (
      <SiNodedotjs
        style={{
          color: "#339933",
        }}
      />
    ),
  },
};
export const technologyNames = [
  "Next.js",
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
];
