import { MapPin } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const MarekKrumal = () => {
  return (
    <div className="relative mx-auto mt-8 p-7 border border-slate-600 rounded-md">
      {/* Container pro ikonky v pravém horním rohu */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <a
          href="https://github.com/MarekKrumal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-black  transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <FiGithub size={32} />
        </a>
        <a
          href="mailto:krumalmarek@gmail.com"
          className="text-slate-400 hover:text-black transition-transform duration-500 ease-in-out hover:scale-110"
        >
          <MdOutlineEmail size={32} />
        </a>
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold uppercase">Marek Křůmal</h1>
        <h2 className="relative flex items-center space-x-2">
          <MapPin size={16} strokeWidth={1} absoluteStrokeWidth />
          <span>Olomouc - Česká Republika</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          adipisicing elit. Itaque, distinctio minima! Maxime, perferendis.
        </p>
      </div>
    </div>
  );
};

export default MarekKrumal;
