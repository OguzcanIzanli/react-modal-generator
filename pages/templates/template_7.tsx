import Image from "next/image";
import { isMobile, isBrowser } from "react-device-detect";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSize } from "../../Components/Context";
import { usePosition } from "../../Components/Context";
import { useColor } from "../../Components/Context";
import { useTemplate } from "../../Components/Context";
import { useLogo } from "../../Components/Context";
import { useTargetting } from "../../Components/Context";

function Template_7() {
  const { sizeTemp } = useSize();
  const { position } = usePosition();
  const { color } = useColor();
  const { contents, size } = useTemplate();
  const { device, seconds, scroll } = useTargetting();

  // After % Scroll
  const [addAfterClass, setAddAfterClass] = useState("hidden");

  function scrollPosition(scrollPos: any) {
    // console.log("scroll pos", scrollPos);
    // console.log("scroll", Number(scroll));
    scrollPos > Number(scroll) ? setAddAfterClass("") : "";
  }

  document.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => {
      scrollPosition(
        (window.scrollY / document.documentElement.offsetHeight) * 100
      ); // scroll position divided by body height
    });
  });

  // After X Seconds

  function afterSeconds() {
    setAddAfterClass("");
  }
  setTimeout(afterSeconds, Number(seconds));
  // console.log(Number(seconds), "saniye sonra açılacak.");

  if (
    device === "isMobile" ? isMobile : device === "isBrowser" ? isBrowser : true
  ) {
    return (
      <div
        id="Modal"
        className={`${position ? position : "sticky top-[50px]"} ${
          sizeTemp === "small"
            ? size.small
            : sizeTemp === "large"
            ? size.large
            : size.medium
        } rounded-[15px] ${
          color.bgcolor
        } shadow-xl text-[36px] ${addAfterClass}`}
      >
        {/* CLOSE BUTTON */}
        <div className="absolute top-[17px] right-[25px]">
          <button className="text-black opacity-[0.4] hover:opacity-[0.6]">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="w-[100%] h-[100%] flex flex-col justify-evenly items-center p-[15px] text-center">
          {/* CONTENT */}
          <h1
            className={`w-[80%] ${color.buttoncolor} font-bold leading-[40px] tracking-normal text-[30px]`}
          >
            {contents.h1}
          </h1>
          <h2
            className={`w-[80%] ${color.buttoncolor} font-normal leading-[40px] tracking-normal text-[20px]`}
          >
            {contents.h2}
          </h2>

          {/* BUTTON */}
          <form className="w-[80%] text-[16px] flex justify-between">
            <button
              className={` ${color.buttoncolor} w-[45%] h-[48px] border border-solid border-gray-400 rounded-[12px] font-medium tracking-normal opacity-[0.9] hover:opacity-[1] hover:shadow-md`}
            >
              {contents.buttonApply}
            </button>
            <button className="bg-white hover:bg-gray-100 hover:shadow-md w-[45%] h-[48px] border border-solid border-gray-400 rounded-[12px] font-medium tracking-normal">
              {contents.buttonCancel}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Template_7;
