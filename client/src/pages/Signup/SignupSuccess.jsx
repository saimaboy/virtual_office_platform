import React from "react";

function SignupSuccess() {
  return (
    <div className="flex gap-5 justify-between px-10 py-12 mt-14 w-full bg-white backdrop-blur-[12.699999809265137px] max-w-[1277px] rounded-[32px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-end mt-24 max-md:mt-10">
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
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9131f073ec921fbfae808b4c0cd72de662acf3c734e87ed2987ea7e780b7fd?"
        className="shrink-0 w-0.5 border-2 border-black border-solid aspect-[0] stroke-[1.5px] stroke-black"
      />
      <div className="flex gap-0.5 items-start self-start text-center text-black capitalize max-md:flex-wrap">
        <div className="flex flex-col grow shrink-0 self-end mt-64 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
          <div className="text-5xl max-md:max-w-full max-md:text-4xl">
            Your account has create <br />
            successfully..
          </div>
          <div className="justify-center self-center px-14 py-3 mt-44 text-4xl whitespace-nowrap rounded-lg bg-zinc-300 max-md:px-5 max-md:mt-10">
            cancel
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a66283f2b701da8e59db9898920a1b399449a2533dfdfe5c4ffb97f8128f4294?"
          className="shrink-0 self-start w-7 aspect-square fill-black"
        />
      </div>
    </div>
  );
}

export default SignupSuccess;