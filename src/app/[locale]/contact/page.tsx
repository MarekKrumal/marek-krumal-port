import Contact from "../../../components/Contact/Contact";
import TicTacToe from "@/components/Contact/TicTacToe";

const Page = () => {
  return (
    <div>
      <Contact />
      <div className="pt-14 pb-20">
        <TicTacToe />
      </div>
    </div>
  );
};

export default Page;
