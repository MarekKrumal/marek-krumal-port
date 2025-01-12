import dynamic from "next/dynamic";
import Image from "next/image";
import { GrStripe } from "react-icons/gr";
import { BiLogoWix } from "react-icons/bi";

const SiNextdotjs = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiNextdotjs)
);
const SiTypescript = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiTypescript)
);
const SiTailwindcss = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiTailwindcss)
);
const SiPrisma = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiPrisma)
);
const SiOpenai = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiOpenai)
);
const SiJavascript = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiJavascript)
);
const SiNodedotjs = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiNodedotjs)
);
const SiMongodb = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiMongodb)
);
const SiExpress = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiExpress)
);
const SiReact = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiReact)
);
const SiFirebase = dynamic(() =>
  import("react-icons/si").then((mod) => mod.SiFirebase)
);

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
    icon: <SiJavascript className="text-yellow-500" />,
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
