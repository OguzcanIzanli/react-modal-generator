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

function Template_9() {
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
        } rounded-[15px] bg-white shadow-xl text-[36px] ${addAfterClass} m-[20px] `}
      >
        {/* CLOSE BUTTON */}
        <div className="absolute top-[17px] right-[25px] z-10">
          <button className="text-black opacity-[0.4] hover:opacity-[0.6]">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="w-[100%] h-[92%] flex flex-col justify-items-start items-center text-center">
          {/* IMAGE OR LOGO */}

          <Image
            className="rounded-t-[15px]"
            src={image}
            width={520}
            height={354}
          />

          {/* CONTENT */}
          <h1 className="text-[30px] mt-[5%] text-black font-bold leading-[40px] tracking-normal ">
            {contents.h1}
          </h1>

          <h2 className="text-[20px] mt-[3%] text-black font-normal leading-[40px] tracking-normal ">
            {contents.h2}
          </h2>

          <input
            placeholder={contents.h3}
            className="text-black font-normal mt-[3%] leading-[16px] tracking-normal text-[16px] rounded-[12px] border border-solid border-gray-300 p-[15px] text-left w-[80%]"
          />
          <input
            placeholder={contents.h4}
            className="text-black font-normal mt-[3%] leading-[16px] tracking-normal text-[16px] rounded-[12px] border border-solid border-gray-300 p-[15px] text-left w-[80%]"
          />
          {/* BUTTON */}
          <form className="w-[80%] mt-[3%] text-[16px] flex flex-col items-center">
            <button
              className={` ${color.bgcolor} ${color.buttoncolor} mt-[4%] w-[80%] h-[48px] border border-solid border-gray-300 rounded-[12px] font-medium tracking-normal opacity-[0.9] hover:opacity-[1] hover:shadow-md`}
            >
              {contents.buttonApply}
            </button>
          </form>
        </div>
        <h5 className="text-[14px] mt-[4%] text-black font-normalleading-[40px] tracking-normal mr-[10%] ml-[10%]">
          {contents.h5}
        </h5>
      </div>
    );
  }
}

export default Template_9;
