"use client";

interface ExternalLinkProps {
  url: string;
  children: React.ReactNode;
}

export default function OnclickFunkce({ url, children }: ExternalLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <span
      onClick={handleClick}
      className="cursor-pointer p-1 hover:scale-105 transition-transform"
    >
      {children}
    </span>
  );
}
