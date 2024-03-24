import React from "react";
import { Link } from "react-router-dom";

function Signup3() {
  return (
    <div className=" flex justify-center items-center  bg-gray-200 ">
      <div className="px-10 py-12 mt-5 w-ful mb-10 bg-white backdrop-blur-[12.699999809265137px] max-w-[1277px] rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30e95302c59c7f6179f87b4950a9332c17172472bc475c602bc3cfefa9961514?"
                className="w-full aspect-[1.18] max-md:max-w-full"
              />
              
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 items-start max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
           
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9131f073ec921fbfae808b4c0cd72de662acf3c734e87ed2987ea7e780b7fd?"
                className="shrink-0 w-0.5 border-2 border-black border-solid aspect-[0] stroke-[1.5px] stroke-black"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex flex-col self-end px-px max-w-full w-[510px]">
                  <div className="flex gap-5 text-4xl font-bold leading-7 text-black uppercase max-md:flex-wrap max-md:max-w-full">
                  <div className="flex pb-5 px-5">Create company</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a66283f2b701da8e59db9898920a1b399449a2533dfdfe5c4ffb97f8128f4294?"
                      className="shrink-0 self-start w-7 aspect-square fill-black"
                    />
                  </div>
                  <div className="flex justify-center items-center self-center px-4 mt-5 rounded-full bg-zinc-300 h-[150px] w-[150px] max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e9b45bf4e14ae659ff50d7e986fe7c863c98b56aab84e0f576e51df58062517?"
                      className="w-full aspect-square fill-black fill-opacity-30"
                    />
                  </div>
                </div>
                <form className="flex flex-col mt-4 max-w-full max-md:ml-2.5">
                <div className="flex justify-center items-start px-4 py-4 rounded-lg bg-zinc-300 mb-8">
                    <label htmlFor="email" className="sr-only">
                      Enter your company email{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your company email address"
                      className="flex-auto my-auto text-white uppercase bg-transparent border-none outline-none"
                    />
                  </div>
                  <div className="flex justify-center items-start px-4 py-4 rounded-lg bg-zinc-300 mb-8">
                    <label htmlFor="email" className="sr-only">
                      Enter your company email{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your company email address"
                      className="flex-auto my-auto text-white uppercase bg-transparent border-none outline-none"
                    />
                  </div>
                  <div className="flex justify-center items-start px-4 py-4 rounded-lg bg-zinc-300 mb-8">
                    <label htmlFor="email" className="sr-only">
                      Enter your company email{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your company email address"
                      className="flex-auto my-auto text-white uppercase bg-transparent border-none outline-none"
                    />
                  </div>
             
                </form>

                <div className="flex gap-5 self-end mt-24 mr-11 max-w-full text-xl leading-7 text-black capitalize whitespace-nowrap w-[466px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
                  <Link to="/signup4" className="">
                    <div className="justify-center items-center px-16 py-5 rounded-lg bg-zinc-300 max-md:px-5">
                      Next
                    </div>
                  </Link>
                  <div className="justify-center items-center px-16 py-5 bg-white rounded-lg border border-black border-solid max-md:px-5">
                    reset
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup3;
