import React from "react";
import { Link } from "react-router-dom";

function Signup1() {
  return (
    <div className=" flex justify-center items-center  bg-gray-200 ">
      <div className="m-10 px-12 py-12 bg-white backdrop-blur-[12.699999809265137px] rounded-[32px] max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-28 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9789ed8cba86d1973835eae9b161af7c38fa59854a7a5f007b63e9d3a41c2f52?"
                className="w-full aspect-[1.27] max-md:max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc21bac88269dd7c6e741ec7bf6efe7fd240e849deac32532fc9c8615acf6195?"
                className="mt-14 max-w-full aspect-[5.56] w-[433px] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 items-start text-xl leading-7 capitalize text-black text-opacity-30 max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9131f073ec921fbfae808b4c0cd72de662acf3c734e87ed2987ea7e780b7fd?"
                className="shrink-0 w-0.5 border-2 border-black border-solid aspect-[0] stroke-[1.5px] stroke-black"
              />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="flex gap-5 self-end max-w-full text-4xl font-bold leading-7 text-black uppercase w-[479px] max-md:flex-wrap">
                  <div className="flex-auto">Create company</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e7c052a87dba33deaa1d2bb6a380a71638504327091b77810be5ef16e2c5714?"
                    className="shrink-0 self-start w-7 aspect-square fill-black"
                  />
                </div>
                <div className="mx-20 mt-20">
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
                    <label htmlFor="password" className="sr-only">
                      Create password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Create password"
                      className="flex-auto my-auto text-white uppercase bg-transparent border-none outline-none"
                    />
                  </div>
                  <div className="flex justify-center items-start p-4 rounded-lg bg-zinc-300 mb-8">
                    <label htmlFor="confirmPassword" className="sr-only">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      className="flex-auto my-auto text-white uppercase bg-transparent border-none outline-none"
                    />
                  </div>
                  <div className="flex gap-5 px-4 py-2.5 rounded-lg bg-zinc-300 mb-8">
                    <img
                      src=""
                      alt="Phone"
                      className="w-14 h-14 object-cover"
                    />
                    <div className="flex-auto my-auto">
                      <label htmlFor="phoneNumber" className="sr-only">
                        Enter phone number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        className="flex-auto my-auto text-white uppercase bg-transparent border-none outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 self-end mt-5 max-w-full text-black whitespace-nowrap w-[466px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
                  <Link to="/signup2" className="">
                    <button
                      className="justify-center items-center px-16 py-5 rounded-lg bg-zinc-300 max-md:px-5"
                      type="submit"
                    >
                      Next
                    </button>
                  </Link>
                  <button
                    className="justify-center items-center px-16 py-5 bg-white rounded-lg border border-black border-solid max-md:px-5"
                    type="reset"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup1;
