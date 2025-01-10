"use client";
import dynamic from "next/dynamic";

const TicTacToe = dynamic(() => import("@/components/Contact/TicTacToe"), {
  loading: () => <p>Loading TicTacToe...</p>,
  ssr: false,
});

const TicTacToeWrapper: React.FC = () => {
  return <TicTacToe />;
};

export default TicTacToeWrapper;
