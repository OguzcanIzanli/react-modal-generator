import Image from "next/image";
import { isMobile, isBrowser } from "react-device-detect";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {
  useSize,
  usePosition,
  useColor,
  useTemplate,
  useTargetting,
} from "../../Components/Context";

function Template_15() {
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
        className={`${position ? position : "sticky top-[30%]"} ${
          sizeTemp === "small"
            ? size.small
            : sizeTemp === "large"
            ? size.large
            : size.medium
        } rounded-[15px] ${
          color.bgcolor
        } shadow-xl text-[36px] ${addAfterClass} m-[20px] `}
      >
        {/* CLOSE BUTTON */}
        <div className="absolute top-[17px] right-[25px]">
          <button
            className={`${color.buttoncolor} opacity-[0.4] hover:opacity-[0.6]`}
          >
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="flex flex-col text-center justify-evenly h-[100%] px-[10%] p-[5%] w-[100%]">
          {/* CONTENT */}

          <div className="p-[5%]">
            <h1
              className={` ${color.buttoncolor} mt-[3%] font-bold leading-[32px] tracking-normal text-[30px]`}
            >
              {contents.h1}
            </h1>
          </div>
          <div className="flex justify-between">
            <div className="w-[59px] h-[59px] ring-1 hover:ring-offset-2 ring-gray-500 rounded-[50%]">
              😤
            </div>
            <div className="w-[59px] h-[59px] ring-1 hover:ring-offset-2 ring-gray-500 rounded-[50%]">
              🙁
            </div>
            <div className="w-[59px] h-[59px] ring-1 hover:ring-offset-2 ring-gray-500 rounded-[50%]">
              🙄
            </div>
            <div className="w-[59px] h-[59px] ring-1 hover:ring-offset-2 ring-gray-500 rounded-[50%]">
              😃
            </div>
            <div className="w-[59px] h-[59px] ring-1 hover:ring-offset-2 ring-gray-500 rounded-[50%]">
              😍
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template_15;
