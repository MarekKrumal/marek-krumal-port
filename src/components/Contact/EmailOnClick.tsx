"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

const EmailOnClick = () => {
  const t = useTranslations("ContactPage");
  const [notification, setNotification] = useState("");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("krumalmarek@gmail.com");
    setNotification("Email zkopírován / copied");
    setTimeout(() => setNotification(""), 2000);
  };

  return (
    <div className="relative">
      {t("description")}{" "}
      <span
        className="font-mono text-green-600 hover:text-green-500 dark:text-green-200 dark:hover:text-green-300 transition-all duration-300"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") copyEmailToClipboard();
        }}
        onClick={copyEmailToClipboard}
      >
        krumalmarek@gmail.com
      </span>
      <a
        href="https://www.linkedin.com/in/marek-krumal-747437339/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono dark:text-sky-200 dark:hover:text-sky-300 text-sky-500 hover:text-sky-600 transition-all duration-300"
      ></a>
      <span>{"."} </span>
      {notification && (
        <div className="absolute top-full mt-2 left-0  px-4 py-2 rounded shadow-lg transition-opacity duration-300">
          {notification}
        </div>
      )}
      {t("description3")}
    </div>
  );
};

export default EmailOnClick;
