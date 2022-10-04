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

function Template_11() {
  const { sizeTemp } = useSize();
  const { position } = usePosition();
  const { color } = useColor();
  const { contents, size } = useTemplate();
  const { image } = useLogo();
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
        } rounded-[15px] bg-white shadow-xl text-[36px] flex justify-center ${addAfterClass}`}
      >
        {/* CLOSE BUTTON */}
        <div className="absolute top-[17px] right-[25px] z-10">
          <button className="text-black opacity-[0.4] hover:opacity-[0.6]">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="w-[94%] mt-[12%] flex flex-col items-center text-center">
          {/* IMAGE OR LOGO */}

          <Image src={image} width={160} height={160} />

          {/* CONTENT */}
          <h1 className="text-[30px] w-[80%] mt-[7%] text-black font-bold leading-[32px] tracking-normal ">
            {contents.h1}
          </h1>

          <h2 className="text-[24px] w-[80%] mt-[6%] text-black font-normal leading-[26px] tracking-normal ">
            {contents.h2}
          </h2>

          <input
            placeholder={contents.h3}
            className="text-black font-normal h-[48px] mt-[10%] leading-[16px] tracking-normal text-[16px] rounded-[12px] border border-solid border-gray-300 p-[15px] text-left w-[80%]"
          />

          {/* BUTTON */}
          <form className="w-[80%] mt-[6%] text-[16px] flex flex-col items-center">
            <button
              className={` ${color.bgcolor} ${color.buttoncolor}  w-[100%] h-[48px] border border-solid border-gray-300 rounded-[12px] font-medium tracking-normal opacity-[0.9] hover:opacity-[1] hover:shadow-md`}
            >
              {contents.buttonApply}
            </button>
          </form>
          <h4 className="text-[14px] mt-[3%] text-black font-normalleading-[40px] tracking-normal mr-[10%] ml-[10%]">
            {contents.h4}
          </h4>
        </div>
      </div>
    );
  }
}

export default Template_11;
