import React, { useState } from "react";
import Chatbox from "../Chatbox/Chatbox";
import Meetingbox from "../../pages/Meetings/Meetings";

function Dashboard() {

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
    <div className="pl-3">
    <div className="flex flex-col  pb-[220px] text-xl leading-7 text-white uppercase bg-stone-500 max-w-[265px]">
      <div className="flex gap-2 px-4 py-1.5 font-bold shadow-sm bg-zinc-700">
        <div className="shrink-0 rounded-full bg-violet-950 h-[51px] w-[51px]" />
        <div className="flex-auto my-auto">company name</div>
      </div>
      <div className="flex flex-col px-5 pt-4 pb-12 mt-2.5 w-full rounded shadow-sm bg-zinc-700">
        <div className="self-center font-semibold">WELCOME</div>
        <div className="flex flex-col px-2 mt-3 w-full whitespace-nowrap">
          <div className={`self-start mt-4 ml-6 cursor-pointer ${selectedTab === 0 ? 'text-sky-500' : ''}`} onClick={() => handleTabClick(0)}>MEMBERS</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f12b75e357fdf1ceaaef034c9b46811d609b1ff54932b516c836fd832156c6d?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="mt-1 w-full border border-solid aspect-[50] blur-[0.6499999761581421px] border-stone-500 stroke-[1px] stroke-stone-500"
          />
          <div className={`self-start mt-2 ml-6 cursor-pointer ${selectedTab === 1 ? 'text-sky-500' : ''}`} onClick={() => handleTabClick(1)}>ANNOUNCEMENT</div>
        </div>
        <div className="flex flex-col px-2 mt-2 w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7af28bf7444d711383fa5289d2a6c7170bda46be999b675b0f014a709c06b778?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="w-full border border-solid aspect-[50] blur-[0.6499999761581421px] border-stone-500 stroke-[1px] stroke-stone-500"
          />
          <div className={`self-start mt-2 ml-6 cursor-pointer ${selectedTab === 2 ? 'text-sky-500' : ''}`} onClick={() => handleTabClick(2)}>RULES</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf70d4de60b397bc796a41c11d01712996a6ef1336f6b7bbbe24af5c3b0456e4?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="mt-2 w-full border border-solid aspect-[50] blur-[0.6499999761581421px] border-stone-500 stroke-[1px] stroke-stone-500"
          />
        </div>
      </div>
      <div className="flex flex-col px-5 pt-5 pb-14 mt-2.5 w-full rounded shadow-sm bg-zinc-700">
        <div className="self-center">GENERAL CHAT</div>
        <div className="flex flex-col px-2 mt-3 w-full">
          
          <div className={`self-start mt-4 ml-6 cursor-pointer ${selectedTab === 3 ? 'text-sky-500' : ''}`} onClick={() => handleTabClick(3)}>CHAT</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a04f2c0964e0e3aba37489b4829f88373e23da5b98b66488393c874d05ed8d7?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="mt-2 w-full border border-solid aspect-[50] blur-[0.6499999761581421px] border-stone-500 stroke-[1px] stroke-stone-500"
          />
          <div className={`self-start mt-2 ml-6 cursor-pointer ${selectedTab === 4 ? 'text-sky-500' : ''}`} onClick={() => handleTabClick(4)}>MEETING</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b939c4eaa6571b37675523ddea3f13f3182ead6305af57250445cf41cb73faae?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="mt-2 w-full border border-solid aspect-[50] blur-[0.6499999761581421px] border-stone-500 stroke-[1px] stroke-stone-500"
          />
        </div>
      </div>
      <div className="flex flex-col px-5 pt-3.5 pb-14 mt-2.5 w-full rounded shadow-sm bg-zinc-700">
        <div className="self-center">DOCUMENT</div>
        <div className="flex flex-col pr-1.5 pl-3 mt-2.5 w-full">
          
          <div className={`self-start mt-4 ml-6 cursor-pointer ${selectedTab === 5 ? 'text-sky-500' : ''}`} onClick={() => handleTabClick(5)}>EXCEL SHEET</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/621ce996f47f7114c7e4351fe1c2cde8c164ab8bf01dbd550dac4dde11dc03a1?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="mt-2 w-full border border-solid aspect-[50] blur-[0.6499999761581421px] border-stone-500 stroke-[1px] stroke-stone-500"
          />
          <div className={`self-start mt-2 ml-6 cursor-pointer ${selectedTab === 6 ? 'text-sky-500' : ''}`} onClick={() => handleTabClick(6)}>WORD DOCS</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39d30111d73468fe61c5bc059354b6f0f6b7e196c9aec4108f286ff99c10d1b5?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="mt-2 w-full border border-solid aspect-[50] blur-[0.6499999761581421px] border-stone-500 stroke-[1px] stroke-stone-500"
          />
          <div className={`self-start mt-2 ml-6 cursor-pointer ${selectedTab === 7 ? 'text-sky-500' : ''}`} onClick={() => handleTabClick(7)}>PDF</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ef671a2c7b15b784a880edc47d988e47a6b6784296759e846ba67740a0a5170?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
            className="mt-1 w-full border border-solid aspect-[50] blur-[0.6499999761581421px] border-stone-500 stroke-[1px] stroke-stone-500"
          />
        </div>
      </div>
    </div>
    </div>
    {selectedTab === 0 && <div>Tab 1 Content</div>}
    {selectedTab === 1 && <div>Tab 2 Content</div>}
    {selectedTab === 2 && <div>Tab 3 Content</div>}
    {selectedTab === 3 && <Chatbox />}
    {selectedTab === 4 && <Meetingbox />}
    {selectedTab === 5 && <Meetingbox />}
    {selectedTab === 6 && <Chatbox />}
    {selectedTab === 7 && <Chatbox />}
    {selectedTab === 8 && <Chatbox />}
    </>

  );
}
export default Dashboard;
