export interface ProjectData {
  id: number;
  translationKey: string;
  title: string;
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  imageblur: string;
  technologies: string[];
  hasPage?: boolean;
  alternativeUrl?: string;
}

export const AllProjects2: ProjectData[] = [
  {
    id: 1,
    translationKey: "awarespage",
    title: "Aware Social Network",
    githubUrl: "https://github.com/MarekKrumal/awares33",
    liveUrl: "https://awares33.vercel.app/",
    image: "/assets/awares/awaresdemo2.webp",
    imageblur:
      "data:image/webp;base64,UklGRvwAAABXRUJQVlA4IPAAAABwBgCdASooACAAPtFapU2oJSOiJW5hABoJaQALAEc2NZ4aQtVTxv9qWpkb2plSzjIIur3ecMruSShOFYAA/vobjI3fCSFmcXfOkyNKyvWPX7CXT/go/jXrrgRnU3gZkXNmQlCYb6XYCVunmtY8VQvDKm2tvratWHbAlD/7OyJ0peVMru+/HA81wJf/EoGuabfroV7dvqyvJhE1BDE5JbcpBXx7sjc9YivfygVv/IdAYY8phfbI4aTXLPrmYpIT1c2bVUUPPLZZs5uozt8m3aaB67bf5LvgSJq/tV0Lxh1yAlbN4ZiSXkTQq158H/uAAAA=",
    technologies: ["Nextjs", "TypeScript", "Prisma", "Tailwind"],
    hasPage: true,
  },
  {
    id: 2,
    translationKey: "artstore",
    title: "ArtStore",
    githubUrl: "https://github.com/MarekKrumal/art-store-next-js",
    liveUrl: "https://art-store-next-js-fv76.vercel.app/",
    image: "/assets/artstore/artstoremainpage.webp",
    imageblur:
      "data:image/webp;base64,UklGRhQCAABXRUJQVlA4IAgCAAAwCgCdASooACsAPtFUpEuoJKOhrjv7MQAaCUAZvCH/K5ZLLhCD8iNWt3M8a20f2S8lvyrsH8wv092P6zvsBPfTa+uI+VvrVQB2fD00peJHl9aISsKWdgn2MAAA/vkJhqvhc36R/lyVgQ6xyKBelhl/SzjkGnCpcatHqmokp6V/2wUsRwMj71I0uwn6EnuRwMdLfH3eevr/y7+TWxk0yssbzWgtfpt2ye/8iJqoQNrrqnJxX7YYJUF8jv03NspLxPEmBMhs3huALvxTVcPyVmS1rlp0LyqnBTjv55EO7tagpOb5nVG2xV9Od5JycZ0rysPj4p4lYULhN7cChOHDcKhN9j5yeTpJ81VLKyKY3tgRBhTQ8dTuv9N1/l+LQyvjdJk7KLnuoa4R3KK9FaVB7/ZvWnc4MRG0zNwAMdsKPL43/Su6tHp6P0fnfXfWd9PX3wfohqEvkK4tAhCnH6YToXIJTw4flSeVnFDEpBGR079WVYpYfpn1MFqCch6o+wkwNv7s4upOYu0oiMYBB6VtSryDIz68Xc0c8ldVR4knxSXhd6Sonimdn9wPzvRlWdgWSk4gRepaPNqeDSDtGQKBJ8noEwWdi2jdLJzp6/6ltwTs2aay9resKhvPV469yRa+n38TqECRl42l5wM75by4UWtSLhSAA5VgbsKb/jJrRDkC4KMEBGveAAAA",
    technologies: ["Nextjs", "TypeScript", "WIX", "Tailwind"],
    hasPage: true,
  },
  {
    id: 3,
    translationKey: "neuralnetwork",
    title: "NeuralNetwork",
    githubUrl: "https://github.com/MarekKrumal/neural-network-nextjs",
    liveUrl: "https://neural-network-nextjs-lnpd.vercel.app/",
    image: "/assets/neuralnetwork/cart.webp",
    imageblur:
      "data:image/webp;base64,UklGRqwAAABXRUJQVlA4IKAAAAAQBQCdASooAB4APsFMnkunpCKhtVv8APAYCWMAwc3dGPQ6+3bSsipnlM4VaGifhZfYAP72jGRQYf5tYQij3Ss8BK+hIpp6qzj3cy39FSlUNVrWKyaLYgx1NemyUXjwElH6n+8d86l+FdqzbmE5BGnUbTvivYiYrEbsxcmiqCEQG+V03eMua8GKsg4hFrgJDesIsfmo7zASpegMuGOgAAAA",
    technologies: ["Vite", "TypeScript", "OpenAI", "Tailwind"],
    hasPage: true,
  },
  {
    id: 4,
    translationKey: "nebulatrails",
    title: "NebulaTrails",
    githubUrl: "https://github.com/MarekKrumal/nebulatrails-nextjs",
    liveUrl: "https://nebulatrails-nextjs.vercel.app",
    image: "/assets/nebulatrails/nebulahome.webp",
    imageblur:
      "data:image/webp;base64,UklGRsoAAABXRUJQVlA4IL4AAABwBQCdASooABUAPtFYp06oJKMiKrgKAQAaCUAYmwFk1cfR6BCtL1Sppi3P5OMo/ll/kNGQAP7lrMWMR9XtpnBCJ4MwVl22WGAoypnDzRwvLx7czKgoWCro2aXQ1Z+m1Cv84vHveSCxfyRjbdp4sWNfehgP/Jb15Iunx4r5DnVj3lv3AKtbQnduaRLDoUKAAgawaAaBAB3LbH6SbB09iCOiOZmyx4vWZHBl1rnA5BQCBsaIjQQYkW0tgt6IZ4AA",
    technologies: ["Nextjs", "TypeScript", "Stripe", "Tailwind"],
    hasPage: true,
  },
  {
    id: 5,
    translationKey: "sonicrun",
    title: "Sonic Run",
    githubUrl: "https://github.com/MarekKrumal/sonicJS",
    liveUrl: "https://sonic-js.vercel.app/",
    image: "/assets/sonic-ring-run/sonicmain.webp",
    imageblur:
      "data:image/webp;base64,UklGRjICAABXRUJQVlA4ICYCAACQCwCdASooADYAPtFWpU2oJCMiKrQN+QAaCWIAv+QNfAizc/UeH8vmIqmkeQ9M5RlNT/UX9btGtodlFPNkDChchWHeYsjXv1orfKSNT6bKLF3KNViR65XzV4vTdKsGOK96lHiMeAD+765/kwDbPxQVkl/Uxn3Vu/J4cK6/69VcvBbBbiEUPvhcY6d8hkbgvpmcM7zz6M3mHw5HI0n+KslGIerleIqR9l7u+JaZbDUPainIJpEIzi1fGYIGhL76MBU9dB0RzMatz0cf2dYGxGSZXnIwfJ4UXxy/1/4lB2lZGPDDtFqSGMf4Z8LxEdBnHui+S0cmbdwl3RbnAi0/XrmKD/ATG7FNRf80ljJyOrj6vI5H0BTUQSPMWwz9q568Q2LhY+E8Su77G2Lb5JjbSplsk2QslIYC9uEwviMaLOuJGp3tshrvUzG/c+d/GOY566quP53eNdjCB7wQzuEVsyGn/38lkFSIlRx93Kwxu+zdxGpdL1eEZrVKW38Ciylov4ELcCtSqB9ONdSe9plNvz+UtOjX7lrLtYVutc7+fieqkkw6cwCDZA+VrD0nXi0SZpxEcKwt71OWQR2ggWocigHJ+n7PY3DYFcaHtoA8YvImcE//dTRM72yiTCN0MKhQUq4x9/0u05HeuPngdWJIsuPWYBVETgF7xQ9GeatNhPeX5UaknILrBRw/i6IyGtmcv9vrw087mNA8eNmH1I3hzbififITu/gA",
    technologies: ["Vite", "JavaScript", "Kaplay", "Nodejs"],
    hasPage: true,
  },
  {
    id: 6,
    translationKey: "mtrx-mern",
    title: "mtrx-mern",
    githubUrl: "https://github.com/MarekKrumal/MTRX",
    liveUrl: "https://mtrx.onrender.com/",
    image: "/assets/mtrx-mern/Screenshot_1.webp",
    imageblur:
      "data:image/webp;base64,UklGRvoAAABXRUJQVlA4IO4AAACwBwCdASooADEAPs1cpkunpaOhsBVaqPAZiWcA02MwKHcaOILHwKmq8iY5lm/0KzJSyqo5BfjWIsa401Unp5AcLF6XSeIAAP73gKcszE5o+WHBMhB1nwbD3CO6NJikmcl39c3z1YmeSXtz6E+603200Tp5LCf4Gtbe6lSgHkSlduGOwy7MWXlMDJ33LnYTZzu6OW/S+/KIfJhqztJWlV9HqyFEIU6XOdaOv3UNVlG3Rzuyb5fEEMCEf6moJJenDg4ol3Y5th7Y0xHQH9porH8iwKilwz7wFPtoK4+n9Vzocjzitpu+gGVMKhvE2QAA",
    technologies: ["Vite", "JavaScript", "MongoDB", "Express"],
    hasPage: true,
  },
  {
    id: 7,
    translationKey: "store-mern",
    title: "store-mern",
    githubUrl: "https://github.com/MarekKrumal/MERN-store1",
    liveUrl: "https://mern-store1-piyt.onrender.com/",
    image: "/assets/store-mern/mern-main.webp",
    imageblur:
      "data:image/webp;base64,UklGRqgBAABXRUJQVlA4IJwBAADwCACdASooACUAPtFUpUyoJCOiLjgLMQAaCUAXLb9UvJGSNokKkq33bM0M0fcwdpLfYO2XkZi6rR/s/+AJjDsZ/tNUBzPBO49QUuJcgNVtiAD+8NMtAR1n043H67vdDPD3SB4mUadVTuUpAmREIPKhCPkLGTz8bVu2dTfg9GtvT+b7zk62UPFmH02jf9eInqXx8ymadA/LopKm5R6brA+1805pemGGJq+zLEtxhG6WI7e+U1lfTFJGpPRQAFrVwukBvKW4Vbm+CzkXyH3HzWjVZpIsfm2kLBBD7DVA0m29szxg6WQ8Qc345oR/+UWmBLUJcmEfalAx50PUHU6jVd/qD9fNHSE3ey6zPd4ye+oJCsdYJ+bnXBiTPqN2wb0wwTIaOHq3SB/DGsmfu6iP3pTPC4+iIrbc1NItOcQt7d8sPvHvar79AkEucptxkt6zbqpkLf5msXUh5fT7EJEVCzeQRrJAD18/6U5dNLoN8SAwya3BR2HDtyFP7iWd6eAjtbFqaAxPGaBg6Pctx1+OfuImHUBPAIKw2UK8qEAA",
    technologies: ["Vite", "JavaScript", "MongoDB", "Express"],
    hasPage: true,
  },

  {
    id: 8,
    translationKey: "weather-app",
    title: "weather app",
    githubUrl: "https://github.com/MarekKrumal/MyWeatherRepository",
    liveUrl: "https://weather-app-phi-indol-29.vercel.app/",
    image: "/assets/lowtierprojects/weather.webp",
    imageblur:
      "data:image/webp;base64,UklGRnwBAABXRUJQVlA4IHABAACQCACdASooAC0APtFWo02oJCMiLjQMyQAaCWQApeXA1b5ggLTRCymEwjtNv5WzZsGah/MJwFdmRBdEGZ4nZLMwakQdJP9+X/nYVi0koAD+Iy9794AL2eNk92zgk7iN/x4Z61mfRMNazYBd8hD2xfUcxG3EO4uKWlP+Zi1cz+Q+wBNSGzNQovz4wqA9JgC1iOs+WpjNu7DOLbIKAUx0HfxdYoGwZ8VAZqjrG5KWi7V5BXAHIcKh8WWhxBp2duvR61sHUWAiFfYQYlaLQdLko7GShSOFsTGVWTJwzJ1+B0Su5G2l5If0lgWLzbbT6DgVcCy0K8LikFGPQaZWMM5u52XWiKoATk/9XsVuB15OA3ozptWtSox65OCV09ds1T8J87AcsV/+QTUt94jzWl9P4uf/BSpzH2Y77Q/pcgAQc41MoI1jMdmlwzGVbg7t+c7eupS6B/4kXIIDnY/v8UcDRFaiceWU9TmYgF850qxK+lAAAA==",
    technologies: ["React", "Vite", "JavaScript", "Tailwind"],
    hasPage: false,
    alternativeUrl: "https://github.com/MarekKrumal/MyBigProject",
  },
  {
    id: 9,
    translationKey: "netflix-clone",
    title: "Netflix clone",
    githubUrl: "https://github.com/MarekKrumal/MyBigProject",
    liveUrl:
      "https://66b36fb360cf90df8e00b27b--extraordinary-youtiao-260ac4.netlify.app/",
    image: "/assets/lowtierprojects/netflix.webp",
    imageblur:
      "data:image/webp;base64,UklGRgACAABXRUJQVlA4IPQBAADQCgCdASooADEAPtFipVAoJaMipWsxABoJZQDMPaUwZqBqe7k81ua144aF+smYHEGvxN51tLLs224MPwfe8CIXFTV+2o5hEjttdT8GU1XdB10Hm7fiM+vZD9CXLJq06AD++vNx+c7b569Z2KWbTuWsV/9dQVKKqKEXEQyIpn/J3MLcsU8+2EUhsBzSj8HwjCGi0Z95SLxPXyb4k+30yI13pzGK2oTuZasl/VZx7Pn5So/NYv3dEzrcq1I47z+yAELY6hNf6OtBmJAdUCyDU03gGp1+5Dh1C5HBQa/ycNENE0nChECXxvOmqt3IxfqlG79+YNoSi7wBnnMGb75kze/r1DNwFSFUPUEfe8/3/Ni+4OQA+sOAU505YIgSu+PGJXvfspPXc121EhDpM/SNC0NT9uDg5ke7p/1CsosvzEcg0jCK8yK/76vNOiCIo+7UhFr8HcDdGyfDMlyUZhgFeE4HNaMHQgh8N64ksV/xds/EpjQSqqeoQC1fZpmgJEKhBYGf99tuvBSdfsX6RMUxJgHpSj2X6Y7S+n7EHi657QZbccolJtj+8OqozEUtvseY65BwhPPMXK3NoWofBzcABT2H1VFhfJB6DFEdd277iFP5KuMis6KKoGZ+4oaFGSmBXqCgspKs22jC92TBl8O7KRvB9IAAAA==",
    technologies: ["React", "FireBase", "JavaScript", "Tailwind"],
    hasPage: false,
    alternativeUrl: "https://github.com/MarekKrumal/MyBigProject",
  },
  {
    id: 10,
    translationKey: "to-do",
    title: "To Do App",
    githubUrl: "https://github.com/MarekKrumal/ToDo-TS",
    liveUrl: "https://to-do-ts-green.vercel.app/",
    image: "/assets/lowtierprojects/todo.webp",
    imageblur:
      "data:image/webp;base64,UklGRpoAAABXRUJQVlA4II4AAACQBQCdASooAC8APtFWpUuoJKOhrjv7MQAaCWkAAD0QduG954kXjOqZ2fBCipKpjqBi0fGIgAD+9gdocX00C+WXstbQsmMdoI2pRXtsxq0L0u5NM5miWnm5+LwsR0EX4nJ+yhPA+UIHc+Wnh+npo/L3FbUIun78d4dkuqkRfr5rlpnkbIaWB0QBkaQ0wAAA",
    technologies: ["Vite", "TypeScript", "Tailwind"],
    hasPage: false,
    alternativeUrl: "https://github.com/MarekKrumal/ToDo-TS",
  },
  {
    id: 11,
    translationKey: "Pack-Man",
    title: "Pack Man",
    githubUrl: "https://github.com/MarekKrumal/PacMan",
    liveUrl: "https://github.com/MarekKrumal/PacMan",
    image: "",
    imageblur: "",
    technologies: ["Java"],
    hasPage: false,
    alternativeUrl: "https://github.com/MarekKrumal/PacMan",
  },
  {
    id: 12,
    translationKey: "Employee-Manager",
    title: "Employee Manager",
    githubUrl: "https://github.com/MarekKrumal/employees-demo",
    liveUrl: "https://comfy-bombolone-2d9af7.netlify.app/",
    image: "",
    imageblur: "",
    technologies: ["TypeScript", "Webpack", "Redux", "SASS"],
    hasPage: false,
    alternativeUrl: "https://github.com/MarekKrumal/employees-demo",
  },
];
