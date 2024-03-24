import * as React from "react";

function Chatbox() {
  return (
    <div className=" p-5 w-[1200px]">
    <div className="flex flex-col py-12 rounded-2xl bg-zinc-700">
      <div className="self-start ml-36 text-base leading-7 text-white uppercase max-md:ml-2.5">
        mR. Rasika
      </div>
      <div className="flex flex-col px-5 mt-2 w-full max-md:max-w-full">
        <div className="flex gap-3.5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef1dc6a7cf2b06d4a49e034fb362a230523bbbb6cfa7c4f856e1fa019795c556?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="shrink-0 my-auto aspect-square w-[72px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fc81ca82a8a7a557dd67b807c2a029a039d2f82957d02d49da5bb030d149915?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="grow shrink-0 aspect-[5] basis-0 w-fit max-md:max-w-full"
          />
        </div>
        <div className="flex gap-5 justify-between self-end mt-16 max-md:flex-wrap max-md:mt-10">
          <div className="shrink-0 max-w-full bg-cyan-400 rounded-2xl h-[81px] w-[382px]" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2046e6456edb0bd8f57b35f33dc05d58e6b6b5b267ea1da5a0f999439a28aa12?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="shrink-0 self-start mt-2.5 aspect-square w-[72px]"
          />
        </div>
        <div className="self-start mt-3 ml-28 text-base leading-7 text-white uppercase max-md:ml-2.5">
          DHANUKA
        </div>
        <div className="shrink-0 mt-2.5 ml-28 max-w-full bg-red-400 rounded-2xl h-[82px] w-[382px] max-md:ml-2.5" />
        <div className="flex gap-5 justify-between self-center mt-14 w-full max-w-[718px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="shrink-0 max-w-full bg-cyan-400 rounded-2xl h-[126px] w-[591px]" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2046e6456edb0bd8f57b35f33dc05d58e6b6b5b267ea1da5a0f999439a28aa12?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="shrink-0 my-auto aspect-square w-[72px]"
          />
        </div>
        <div className="flex gap-4 self-center w-[700px] mt-36 max-md:flex-wrap max-md:mt-10">
  <div className="flex flex-auto gap-5 justify-between px-4 py-2.5 bg-zinc-500 rounded-[48px] max-md:flex-wrap max-md:max-w-full">
    <input
      type="text"
      placeholder="Type your message..."
      className="flex-auto my-auto text-white uppercase bg-transparent border-none outline-none"
    />
    <div className="flex gap-3">
      <div className="flex gap-1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c9cfb4553d9db49423e7d93a97988a5f284a496e342e879b7097729856b413b?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
          className="shrink-0 aspect-square w-[38px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5508e679909393f0bbbe2e5f897dda0af8ff48223088cd8cdf4a915627d6bd?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
          className="shrink-0 self-start w-9 aspect-square"
        />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ff15484fcb437e34540637c95c804ef9e22cba4e934c14a76be8091360da06?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
        className="shrink-0 my-auto aspect-[0.97] w-[33px]"
      />
    </div>
  </div>
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/97818c3318e549202cb4927fdff8af4d43f2eaebcf4852a835c92d45fb23a9b7?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
    className="shrink-0 aspect-[1.27] w-[71px]"
  />
</div>

      </div>
    </div>
    </div>
  );
}

export default Chatbox;