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

function Template_14() {
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

        <div className="flex h-[100%]">
          {/* IMAGE OR LOGO */}
          <div className="p-[5%]">
            <Image
              className="rounded-[50%]"
              src={image}
              width={100}
              height={100}
            />
          </div>
          <div className=" w-[70%] flex flex-col justify-evenly my-[5%] text-left">
            {/* CONTENT */}
            <h1
              className={` ${color.buttoncolor} mt-[3%] font-bold leading-[28px] tracking-normal text-[24px]`}
            >
              {contents.h1}
            </h1>
            <h2
              className={` ${color.buttoncolor} mt-[3%] opacity-[0.7]  font-normal leading-[20px] tracking-normal text-[18px]`}
            >
              {contents.h2}
            </h2>
            <h3
              className={` ${color.buttoncolor} mt-[11%]  font-normal leading-[22px] tracking-normal text-[18px]`}
            >
              {contents.h3}
            </h3>
            <h4
              className={` ${color.buttoncolor} mt-[11%] mb-[3%] font-normal leading-[16px] tracking-normal text-[14px]`}
            >
              {contents.h4}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Template_14;
