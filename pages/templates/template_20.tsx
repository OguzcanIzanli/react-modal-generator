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
  useLogo,
} from "../../Components/Context";

function Template_20() {
  const { sizeTemp } = useSize();
  const { position } = usePosition();
  const { color } = useColor();
  const { contents, size } = useTemplate();
  const { image, logo } = useLogo();
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
        } rounded-[15px] bg-white shadow-xl text-[36px] ${addAfterClass} m-[20px] `}
      >
        {/* CLOSE BUTTON */}
        <div className="absolute top-[17px] right-[25px] z-10">
          <button className="text-black opacity-[0.4] hover:opacity-[0.6]">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="flex flex-col relative">
          <Image
            className="rounded-t-[15px]"
            src={image}
            width={480}
            height={250}
          />
          <div className="w-[120px] h-[120px] bg-white mt-[38%] mx-auto right-[37%] absolute rounded-[50%] border-4 border-solid border-white">
            <Image
              className="rounded-[50%]"
              src={logo}
              width={120}
              height={120}
            />
          </div>
        </div>

        <div className="w-[100%] px-[10%] h-[100%] tracking-normal text-black flex flex-col justify-items-start items-center text-center">
          {/* IMAGE OR LOGO */}

          {/* CONTENT */}
          <h1 className="text-[20px] mt-[18%] font-bold leading-[24px]">
            {contents.h1}
          </h1>

          <h2 className="text-[16px] mt-[2%] font-normal leading-[19px]">
            {contents.h2}
          </h2>

          <h3 className="text-[30px] mt-[6%] font-bold leading-[36px]">
            {contents.h3}
          </h3>

          <h4 className="text-[20px] mt-[8%] font-normal leading-[24px]">
            {contents.h4}
          </h4>

          {/* BUTTON */}
          <form className="mt-[10%] w-[100%] font-medium text-[16px] flex justify-between">
            <button
              className={`${color.bgcolor} ${color.buttoncolor} w-[48%] h-[48px] border border-solid border-gray-300 rounded-[12px] opacity-[0.9] hover:opacity-[1] hover:shadow-md`}
            >
              {contents.buttonApply}
            </button>
            <button className="w-[48%] h-[48px] hover:bg-gray-100 hover:shadow-md border border-solid border-gray-300 rounded-[12px] ">
              {contents.buttonCancel}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Template_20;
