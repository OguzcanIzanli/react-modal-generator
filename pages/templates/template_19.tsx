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

function Template_19() {
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
        } rounded-[15px] bg-white shadow-xl text-[36px] ${addAfterClass} m-[20px] `}
      >
        {/* CLOSE BUTTON */}
        <div className="absolute top-[17px] right-[25px]">
          <button className="text-black opacity-[0.4] hover:opacity-[0.6]">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="w-[100%] h-[100%] flex flex-col justify-evenly tracking-normal items-center p-[2%] px-[10%] text-center">
          {/* LOGO OR IMAGE */}
          <div>
            <Image
              className="rounded-[50%]"
              src={logo}
              width={60}
              height={60}
            />
          </div>

          {/* CONTENT */}
          <div className="w-[60%] text-black ">
            <h1 className="font-bold leading-[34px] text-[30px]">
              {contents.h1}
            </h1>
            <h2 className="font-[500] leading-[24px] text-[20px] mt-[4%]">
              {contents.h2}
            </h2>
          </div>

          <div className="text-left">
            <h3 className=" text-black font-bold leading-[22px] text-[18px] flex items-center">
              <Image src="/eye.svg" width={26} height={26} /> {contents.h3}
            </h3>
            <h4 className=" text-[#717791] font-normal leading-[17px] text-[14px] mt-[2%] ">
              {contents.h4}
            </h4>
          </div>

          <div className="text-left">
            <h5 className=" text-black font-bold leading-[22px] tracking-normal text-[18px] flex items-center">
              <Image src="/environment.svg" width={26} height={26} />
              {contents.h5}
            </h5>
            <h6 className=" text-[#717791] font-normal leading-[17px] tracking-normal text-[14px] mt-[2%]">
              {contents.h6}
            </h6>
          </div>

          {/* BUTTON */}
          <form className="flex flex-col w-[100%] text-[16px] font-medium tracking-normal">
            <button
              className={`${color.bgcolor} ${color.buttoncolor} h-[48px] border border-solid border-gray-300 rounded-[12px] opacity-[0.9] hover:opacity-[1] hover:shadow-md`}
            >
              {contents.buttonApply}
            </button>
            <button className="hover:bg-gray-100 hover:shadow-md h-[48px] border border-solid border-gray-300 rounded-[12px] mt-[4%]">
              {contents.buttonCancel}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Template_19;
