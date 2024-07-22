import React, { useEffect } from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import Clipboard from "clipboard";

const ShareButton = ({ handleShare, url }) => {
  useEffect(() => {
    const clipboard = new Clipboard(".copy-btn");

    clipboard.on("success", () => {
      toast.success("Copied to clipboard!");
    });

    clipboard.on("error", () => {
      toast.error("Error in Copy");
    });

    // Clean up clipboard instance on component unmount
    return () => {
      clipboard.destroy();
    };
  }, [url]);

  useEffect(() => {
    if (url) {
      toast.success("New URL generated!");
    }
  }, [url]);

  return (
    <div className="relative top-4 my-4 flex flex-col justify-center space-y-2 h-[24vh] ">
      <Toaster />
      <button
        onClick={handleShare}
        className="p-4 z-20 m-auto font-bold text-xl shadow-lg bg-primary  text-white rounded-full flex flex-row justify-center items-center gap-4"
      >
        Share
        <FaShareAlt />
      </button>
      <div className="flex gap-2 justify-between items-center border-2 p-2 rounded-full">
        <p>{url ? "URL Generated" : "click on share button to generate url"}</p>
        {url && (
          <button className="copy-btn" data-clipboard-text={url}>
            <FaCopy size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ShareButton;
