import React from "react";
import { Link } from "react-router-dom";

function Signup2() {
  return (
    <div className=" flex justify-center items-center  bg-gray-200 ">
      <div className="px-10 py-12 mt-5 w-ful mb-10 bg-white backdrop-blur-[12.699999809265137px] max-w-[1277px] rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-20  max-md:flex-col max-md:gap-0">
          {/* Left Section */}
          <div className="flex flex-col w-6/12 max-md:w-full">
            <div className="flex grow gap-5 max-md:flex-wrap max-md:mt-10">
              {/* Images */}
              <div className="flex flex-col grow shrink-0 self-end mt-36 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4a11485519131a5ec1e094cfe166b5ce274bc4fc9348bff0803a5d334c2321f?"
                  className="w-full aspect-[1.75]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c90a46eb0389114e7d07f627279c37ebbf6d9f9e715362e10c5be86971a3e7d?"
                  className="mt-32 w-[418px] aspect-[5.56] max-md:mt-10"
                />
              </div>
              {/* Divider */}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9131f073ec921fbfae808b4c0cd72de662acf3c734e87ed2987ea7e780b7fd?"
                className="shrink-0 w-0.5 border-2 border-black border-solid aspect-[0] stroke-[1.5px] stroke-black"
              />
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col ml-5 w-6/12 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              {/* Title */}
              <div className="flex gap-5 self-start text-4xl font-bold leading-7 text-black uppercase max-md:flex-wrap">
                <div className="flex-auto">Create company</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a66283f2b701da8e59db9898920a1b399449a2533dfdfe5c4ffb97f8128f4294?"
                  className="shrink-0 w-7 aspect-square fill-black"
                />
              </div>
              {/* OTP Prompt */}
              <div className="mt-20 text-xl leading-7 text-black capitalize max-md:max-w-full">
                Enter OTP number
              </div>
              {/* Labels */}
              <div className="flex flex-col mt-4 max-w-full text-sm leading-7 text-black capitalize max-md:ml-2.5">
                <div className="flex gap-1 whitespace-nowrap">
                  <input
                    type="checkbox"
                    id="emailCheckbox"
                    className="w-4 h-4"
                  />
                  <label htmlFor="emailCheckbox">Email</label>
                </div>
                <div className="flex gap-1 mt-3">
                  <input
                    type="checkbox"
                    id="phoneNumberCheckbox"
                    className="w-4 h-4"
                  />
                  <label htmlFor="phoneNumberCheckbox">Phone number</label>
                </div>
              </div>

              {/* OTP Boxes */}
              <div className="flex gap-2 mt-4 max-md:pr-5">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    className="rounded-xl bg-zinc-300 h-[51px] w-[51px] text-center"
                  />
                ))}
              </div>

              {/* Resend Text */}
              <div className="mt-4 text-base leading-7 text-cyan-400 capitalize max-md:max-w-full">
                Resend
              </div>
              {/* Action Buttons */}
              <div className="flex gap-5 mx-8 mt-56 text-xl leading-7 text-black capitalize whitespace-nowrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                <Link to="/signup3" className="">
                  <div className="justify-center items-center px-16 py-5 rounded-lg bg-zinc-300 max-md:px-5">
                    Next
                  </div>
                </Link>
                <div className="justify-center items-center px-16 py-5 bg-white rounded-lg border border-black border-solid max-md:px-5">
                  Reset
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup2;
