import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiOpenai,
} from "react-icons/si";
import { BiLogoWix } from "react-icons/bi";
import Image from "next/image";

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
        width={30}
        height={30}
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
];
