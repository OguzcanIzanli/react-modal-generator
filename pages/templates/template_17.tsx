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

function Template_17() {
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

        <div className="w-[100%] h-[100%] flex flex-col justify-evenly items-center p-[15px] text-center">
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
          <h1 className="w-[90%] text-black font-bold mt-[1%]  leading-[40px] tracking-normal text-[30px]">
            {contents.h1}
          </h1>
          <h2 className="w-[90%] text-black font-normal mt-[2%] leading-[40px] tracking-normal text-[20px]">
            {contents.h2}
          </h2>

          {/* BUTTON */}
          <form className="w-[90%] flex flex-col text-[16px] items-center">
            <button
              className={`hover:bg-gray-100 w-[80%] h-[44px] border border-solid ${color.textcolor} rounded-[12px] font-medium tracking-normal opacity-[0.9] hover:opacity-[1] hover:shadow-md`}
            >
              {contents.buttonCancel}
            </button>
            <button
              className={`hover:bg-gray-100 w-[80%] h-[44px] border border-solid ${color.textcolor} rounded-[12px] font-medium tracking-normal opacity-[0.9] hover:opacity-[1] hover:shadow-md mt-[4%]`}
            >
              {contents.buttonApply}
            </button>
            <p className="w-[80%] text-black font-medium mt-[2%] leading-[40px] tracking-normal text-[16px]">
              {contents.p}
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Template_17;
