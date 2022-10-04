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

function Template_13() {
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
        className={`${position ? position : "sticky top-[15%]"} ${
          sizeTemp === "small"
            ? size.small
            : sizeTemp === "large"
            ? size.large
            : size.medium
        } rounded-[15px] shadow-xl text-[36px] ${addAfterClass}`}
      >
        {/* CLOSE BUTTON */}
        <div className="absolute top-[17px] right-[25px] ">
          <button className="text-black opacity-[0.4] hover:opacity-[0.6]">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div
          className={`w-[100%] ${color.bgcolor} rounded-[15px] opacity-[0.85] pb-[15%] h-[100%] px-[10%] flex flex-col justify-evenly items-center p-[15px] text-center`}
        >
          {/* LOGO OR IMAGE */}
          <div
            className={`h-[90px] w-[90px] flex items-center justify-center rounded-[50%] ${color.textcolor}`}
          >
            <Image className="text-white" src={logo} width={120} height={120} />
          </div>

          {/* CONTENT */}
          <h1
            className={` ${color.buttoncolor} font-bold leading-[40px] tracking-normal text-[30px]`}
          >
            {contents.h1}
          </h1>
          <h2
            className={` ${color.buttoncolor} font-normal leading-[40px] tracking-normal text-[20px]`}
          >
            {contents.h2}
          </h2>
        </div>
        <h3
          className={` ${color.buttoncolor} ${color.bgcolor} rounded-b-[15px] opacity-[1] w-[100%] absolute bottom-0 text-center p-[5%] leading-[20px] tracking-normal text-[20px]`}
        >
          {contents.h3}
        </h3>
      </div>
    );
  }
}

export default Template_13;
