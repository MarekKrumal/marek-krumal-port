import Contact from "../../../components/Contact/Contact";
import TicTacToeWrapper from "@/components/Contact/TicTacToeWrapper";

const Page = () => {
  return (
    <div>
      <Contact />
      <div className="pt-14 pb-20">
        <TicTacToeWrapper />
      </div>
    </div>
  );
};

export default Page;
