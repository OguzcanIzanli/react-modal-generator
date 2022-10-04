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

function Template_10() {
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
        } rounded-[15px] bg-white shadow-xl text-[36px] ${addAfterClass}`}
      >
        {/* CLOSE BUTTON */}
        <div className="absolute top-[17px] right-[25px] z-10">
          <button className="text-black opacity-[0.4] hover:opacity-[0.6]">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="flex h-[100%]">
          <div className="w-[50%] flex flex-col">
            {/* CONTENT */}
            <h1 className="text-[30px] mt-[10%] ml-[10%] text-black font-bold leading-[30px] tracking-normal ">
              {contents.h1}
            </h1>

            <h2 className="text-[20px]  mt-[5%] ml-[10%] text-black font-normal leading-[20px] tracking-normal ">
              {contents.h2}
            </h2>

            <input
              placeholder={contents.h3}
              className="text-black font-normal px-[14px] mx-[10%] mt-[8%] leading-[16px] tracking-normal text-[16px] rounded-[12px] border border-solid border-gray-300 h-[48px] text-left w-[80%]"
            />
            <input
              placeholder={contents.h4}
              className="text-black font-normal px-[14px] mx-[10%] mt-[8%] leading-[16px] tracking-normal text-[16px] rounded-[12px] border border-solid border-gray-300 h-[48px] text-left w-[80%]"
            />
            {/* BUTTON */}
            <form className="w-[100%] mt-[7%] text-[16px] flex flex-col items-center">
              <button
                className={` ${color.bgcolor} ${color.buttoncolor} mt-[4%] w-[80%] h-[48px] border border-solid border-gray-300 rounded-[12px] font-medium tracking-normal opacity-[0.9] hover:opacity-[1] hover:shadow-md`}
              >
                {contents.buttonApply}
              </button>
            </form>
            <div className="text-[14px] tracking-normal flex justify-between w-[100%] leading-[40px] t text-black mt-[6%] px-[10%]">
              <h5>{contents.h5}</h5>
              <h6>{contents.h6}</h6>
            </div>
          </div>

          {/* IMAGE OR LOGO */}
          <Image
            className="rounded-r-[15px]"
            src={image}
            width={410}
            height={330}
          />
        </div>
      </div>
    );
  }
}

export default Template_10;
