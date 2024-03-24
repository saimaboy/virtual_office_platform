import React from "react";
import { Link } from "react-router-dom";

function Signup4() {
  return (
    <div className="px-10 py-12 mt-14 w-full bg-white backdrop-blur-[12.699999809265137px] max-w-[1277px] rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-28 max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1936304f9e95f41ad711e45c9176b607c3d43903d79e3835ac9d5fee56134869?"
              className="self-start w-full aspect-[1.03]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7021562818d83a53aac0bb7929839ace730ae0f6b978e594d8cd3c118c105a62?"
              className="self-center mt-20 aspect-[5.56] w-[418px] max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-5 items-start text-xl text-black capitalize max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9131f073ec921fbfae808b4c0cd72de662acf3c734e87ed2987ea7e780b7fd?"
              className="shrink-0 w-0.5 border-2 border-black border-solid aspect-[0] stroke-[1.5px] stroke-black"
            />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div className="flex gap-5 self-end max-w-full text-4xl font-bold leading-7 uppercase w-[510px] max-md:flex-wrap">
                <div className="flex-auto">Create company</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a66283f2b701da8e59db9898920a1b399449a2533dfdfe5c4ffb97f8128f4294?"
                  className="shrink-0 self-start w-7 aspect-square fill-black"
                />
              </div>
              <div className="justify-center px-5 py-12 mt-16 leading-7 rounded-xl bg-zinc-300 max-md:mt-10 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque non bibendum leo. Donec finibus diam a quam
                aliquam, ac laoreet urna dictum. Nulla eget egestas magna, sit
                amet porta magna. Quisque finibus orci a scelerisque laoreet.
                Suspendisse potenti. Duis at bibendum lorem. Quisque enim enim,
                iaculis nec tristique et, scelerisque ut ante. Nam auctor leo
                elit, non tincidunt ligula maximus eget. Vivamus gravida
              </div>
              <div className="flex gap-1 self-end mt-6 mr-12 text-sm leading-7 whitespace-nowrap max-md:mr-2.5">
                <div className="shrink-0 self-start w-2.5 h-2.5 bg-black border border-black border-solid" />
                <div>Accept</div>
              </div>
              <div className="flex gap-5 self-center mt-14 max-w-full leading-[137.5%] w-[466px] max-md:flex-wrap max-md:mt-10">
                <div className="justify-center items-center px-16 py-5 rounded-lg bg-zinc-300 max-md:px-5">
                  Create{" "}
                </div>
                <div className="justify-center items-center px-16 py-5 whitespace-nowrap bg-white rounded-lg border border-black border-solid max-md:px-5">
                  reset
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup4;
