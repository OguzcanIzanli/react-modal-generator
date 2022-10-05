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

function Template_6() {
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
        className={`${position ? position : "sticky top-[50px]"} ${
          sizeTemp === "small"
            ? size.small
            : sizeTemp === "large"
            ? size.large
            : size.medium
        } rounded-[15px] bg-white shadow-xl text-[36px] m-[20px]  ${addAfterClass}`}
      >
        {/* CLOSE BUTTON */}
        <div className="absolute top-[17px] right-[25px]">
          <button className="text-black opacity-[0.4] hover:opacity-[0.6]">
            <IoMdCloseCircleOutline />
          </button>
        </div>

        <div className="w-[100%] h-[100%] flex flex-col justify-evenly items-center p-[10px] text-center">
          {/* CONTENT */}
          <p
            className={`w-[80%] ${color.textcolor} font-bold leading-[40px] tracking-normal text-[18px]`}
          >
            PLANS
          </p>
          <p className="w-[80%] text-black font-bold leading-[40px] tracking-normal text-[30px]">
            Choose best for you
          </p>
          <p className="w-[80%] text-black font-[500] leading-[40px] tracking-normal text-[20px]">
            Only pay for the capacity that you use.
          </p>

          <div className="flex flex-col items-start w-[100%] pl-12 pr-12 ">
            <div className="flex justify-center">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className={`w-4 h-4 ${color.textcolor} bg-gray-100 dark:bg-gray-700 dark:border-gray-600 focus:ring-0`}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                ></label>
              </div>
              <div className="text-left">
                <h1 className="w-[80%] text-black font-bold leading-[22px] tracking-normal text-[18px]">
                  {contents.h1}
                </h1>
                <h2 className=" text-[#717791] font-normal leading-[17px] tracking-normal text-[14px]">
                  {contents.h2}
                </h2>
              </div>
            </div>

            <div className="flex justify-center  mt-[25px]">
              <div className="flex items-center ">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className={`w-4 h-4 ${color.textcolor} bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 focus:ring-0`}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                ></label>
              </div>
              <div className="text-left">
                <h3 className="w-[80%] text-black font-bold leading-[22px] tracking-normal text-[18px]">
                  {contents.h3}
                </h3>
                <h4 className=" text-[#717791] font-normal leading-[17px] tracking-normal text-[14px]">
                  {contents.h4}
                </h4>
              </div>
            </div>

            <div className="flex justify-center  mt-[25px]">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className={`w-4 h-4 ${color.textcolor} bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 focus:ring-0`}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                ></label>
              </div>
              <div className="text-left">
                <h5 className="w-[80%] text-black font-bold leading-[22px] tracking-normal text-[18px]">
                  {contents.h5}
                </h5>
                <h6 className=" text-[#717791] font-normal leading-[17px] tracking-normal text-[14px]">
                  {contents.h6}
                </h6>
              </div>
            </div>
          </div>
          {/* BUTTON */}
          <form className="w-[80%] flex justify-between text-[16px]">
            <button className="hover:bg-gray-100 hover:shadow-md w-[45%] h-[48px] border border-solid border-gray-300 rounded-[12px] font-medium tracking-normal">
              {contents.buttonCancel}
            </button>
            <button
              className={`${color.bgcolor} ${color.buttoncolor} w-[45%] h-[48px] border border-solid border-gray-300 rounded-[12px] font-medium tracking-normal opacity-[0.9] hover:opacity-[1] hover:shadow-md`}
            >
              {contents.buttonApply}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Template_6;
