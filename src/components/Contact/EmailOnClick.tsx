"use client";

const EmailOnClick = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("marekkrumal11@gmail.com");
    const notification = document.getElementById("notification");
    if (notification) {
      notification.style.display = "inline";
      setTimeout(() => {
        notification.style.display = "none";
      }, 2000);
    }
  };

  return (
    <span className="relative">
      <span
        className="font-mono text-green-700 hover:text-green-500 dark:text-green-200 dark:hover:text-green-300 cursor-pointer"
        role="button"
        aria-label="Copy Email"
        tabIndex={0}
        onClick={handleCopy}
        onKeyDown={(e) => e.key === "Enter" && handleCopy()}
      >
        marekkrumal11@gmail.com
      </span>
      <span
        id="notification"
        className="absolute top-full mt-1 text-md text-black dark:text-white font-extralight"
        style={{ display: "none" }}
      >
        {" "}
        Email copied
      </span>
    </span>
  );
};

export default EmailOnClick;
