import Image from "next/image";
import { isMobile, isBrowser } from "react-device-detect";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSize } from "../Components/Context";
import { usePosition } from "../Components/Context";
import { useColor } from "../Components/Context";
import { useTemplate } from "../Components/Context";
import { useLogo } from "../Components/Context";
import { useTargetting } from "../Components/Context";

function Template_3() {
  const { sizeTemp } = useSize();
  const { position } = usePosition();
  const { color } = useColor();
  const { contents, size } = useTemplate();
  const { logo } = useLogo();
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
        } rounded-[15px] bg-white shadow-xl text-[36px] ${addAfterClass}`}
      >
        {/* <html lang="en" /> */}

        <div className="absolute top-[17px] right-[25px]">
          <button className="text-black opacity-[0.4] hover:opacity-[0.6]">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="w-[100%] h-[100%] flex flex-col justify-evenly items-center p-[30px] text-center">
          {/* Logo */}
          <div
            className={`h-[90px] w-[90px] flex items-center justify-center opacity-[0.9] rounded-[50%] ${color.bgcolor} ${color.textcolor}`}
          >
            <Image className="text-white" src={logo} width={36} height={44} />
          </div>

          {/* Content */}
          <h1 className="text-black font-bold leading-[40px] tracking-normal text-[30px]">
            {contents.h1}
          </h1>
          <h2 className="text-black font-normal leading-[25px] tracking-normal text-[20px] w-[80%]">
            {contents.h2}
          </h2>
          <p className="text-gray-400 font-normal leading-[18px] tracking-normal text-[16px] p-[15px] text-left w-[80%]">
            {contents.p}
          </p>

          {/* Button */}
          <form className="w-[90%] flex flex-col text-[16px] mt-[3%] items-center">
            <button
              className={`${color.bgcolor} ${color.buttoncolor} w-[80%] h-[48px] border border-solid border-gray-300 rounded-[12px] font-medium tracking-normal opacity-[0.9] hover:opacity-[1] hover:shadow-md`}
            >
              {contents.buttonCancel}
            </button>
            <button className="hover:bg-gray-100 hover:shadow-md w-[80%] h-[48px] border border-solid border-gray-300 rounded-[12px] font-medium tracking-normal mt-[4%]">
              {contents.buttonApply}
            </button>
          </form>
        </div>
        <script src="script.js" defer></script>
      </div>
    );
  }
}

export default Template_3;
