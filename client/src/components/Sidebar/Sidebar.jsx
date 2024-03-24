import * as React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col px-3 pt-2 pb-28 bg-zinc-700 max-w-[100px] h-[1100px]">
      <button>
        <div className="flex justify-center items-center px-5 w-full rounded-full bg-zinc-300 h-[77px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ae498b97bb362239a8ee6c783a22a69b8624936a4c597c37af291ff2b937577?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ae498b97bb362239a8ee6c783a22a69b8624936a4c597c37af291ff2b937577?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ae498b97bb362239a8ee6c783a22a69b8624936a4c597c37af291ff2b937577?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ae498b97bb362239a8ee6c783a22a69b8624936a4c597c37af291ff2b937577?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ae498b97bb362239a8ee6c783a22a69b8624936a4c597c37af291ff2b937577?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ae498b97bb362239a8ee6c783a22a69b8624936a4c597c37af291ff2b937577?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ae498b97bb362239a8ee6c783a22a69b8624936a4c597c37af291ff2b937577?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ae498b97bb362239a8ee6c783a22a69b8624936a4c597c37af291ff2b937577?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="aspect-[0.91] w-[41px]"
          />
        </div>
      </button>
      <button>
        <div className="shrink-0 mt-5 w-full rounded-full bg-violet-950 h-[77px]" />
      </button>
      <button>
        <div className="shrink-0 mt-3.5 w-full rounded-full bg-zinc-300 h-[77px]" />
      </button>
      <button>
        <div className="shrink-0 mt-3.5 w-full rounded-full bg-zinc-300 h-[77px]" />
      </button>
      <button>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f244e11f1a3d9733506216c42ee2c66e9e6e71975e2a4cb6ca49ec3d3ec9c5df?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f244e11f1a3d9733506216c42ee2c66e9e6e71975e2a4cb6ca49ec3d3ec9c5df?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f244e11f1a3d9733506216c42ee2c66e9e6e71975e2a4cb6ca49ec3d3ec9c5df?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f244e11f1a3d9733506216c42ee2c66e9e6e71975e2a4cb6ca49ec3d3ec9c5df?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f244e11f1a3d9733506216c42ee2c66e9e6e71975e2a4cb6ca49ec3d3ec9c5df?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f244e11f1a3d9733506216c42ee2c66e9e6e71975e2a4cb6ca49ec3d3ec9c5df?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f244e11f1a3d9733506216c42ee2c66e9e6e71975e2a4cb6ca49ec3d3ec9c5df?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f244e11f1a3d9733506216c42ee2c66e9e6e71975e2a4cb6ca49ec3d3ec9c5df?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
          className="self-center mt-3.5 w-full rounded-full aspect-square bg-zinc-300 h-[77px]"
        />
      </button>
    </div>
  );
}

export default Sidebar;
