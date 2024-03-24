import React, { useState } from "react";
import Popup from 'react-popup';
import { ZoomMtg } from '@zoom/meetingsdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();

function Meetingbox() {
	const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [password, setPassword] = useState("");

  const openLoginPopup = () => setIsOpen(true);
  const closeLoginPopup = () => setIsOpen(false);

  var authEndpoint = 'http://localhost:4000'
  var sdkKey = 'bKDSAv1fQj610du6RLlfcA'
  //var meetingNumber = '85493553413'
  //var passWord = 'bd48t7'
  var role = 0
  //var userName = 'React'
  var userEmail = 'avishka2k@gmail.com'
  var leaveUrl = 'http://localhost:3000/start'


  function getSignature(e) {
    e.preventDefault();

    fetch(authEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        meetingNumber: meetingId,
        role: role
      })
    }).then(res => res.json())
    .then(response => {
      startMeeting(response.signature)
    }).catch(error => {
      console.error(error)
    })
  }

  function startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block'

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      patchJsMedia: true,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingId,
          passWord: password,
          userName: name,
          userEmail: userEmail,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  return (
    <>
    <div className=" p-5 w-[1200px]">
      <div className="flex flex-col pt-9 pr-11 pb-16 rounded-2xl bg-zinc-700 max-md:pr-5">
        <div className="flex flex-col self-center w-full max-w-[806px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-3.5 px-5 py-5 w-full text-3xl leading-7 text-black uppercase rounded-xl bg-zinc-300 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/968890923d41789af62fea21e46deeaf7aa9eb47af1af5b64cc33090ae9cfabd?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
                    className="shrink-0 aspect-square w-[81px]"
                  />
                  <div className="flex-auto my-auto">create meeting</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 px-5 py-5 w-full text-3xl leading-7 text-black uppercase rounded-xl bg-zinc-300 max-md:mt-10" onClick={openLoginPopup}>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/931d26b57d14b5654c0346d61f94146fa12a23bcc2b1af5a5853ff0e76cfaae1?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/931d26b57d14b5654c0346d61f94146fa12a23bcc2b1af5a5853ff0e76cfaae1?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/931d26b57d14b5654c0346d61f94146fa12a23bcc2b1af5a5853ff0e76cfaae1?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/931d26b57d14b5654c0346d61f94146fa12a23bcc2b1af5a5853ff0e76cfaae1?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/931d26b57d14b5654c0346d61f94146fa12a23bcc2b1af5a5853ff0e76cfaae1?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/931d26b57d14b5654c0346d61f94146fa12a23bcc2b1af5a5853ff0e76cfaae1?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/931d26b57d14b5654c0346d61f94146fa12a23bcc2b1af5a5853ff0e76cfaae1?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/931d26b57d14b5654c0346d61f94146fa12a23bcc2b1af5a5853ff0e76cfaae1?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
                    className="shrink-0 rounded-lg aspect-square w-[81px]"
                  />
                  <div className="flex-auto my-auto cursor-pointer">join meeting</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 px-5 py-5 w-full text-2xl leading-7 text-black uppercase rounded-xl bg-zinc-300 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b6ef1873005e00ba56ad93c726da8bb58c685ba6c1813d3687aaa2365a0e5798?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ef1873005e00ba56ad93c726da8bb58c685ba6c1813d3687aaa2365a0e5798?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ef1873005e00ba56ad93c726da8bb58c685ba6c1813d3687aaa2365a0e5798?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ef1873005e00ba56ad93c726da8bb58c685ba6c1813d3687aaa2365a0e5798?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ef1873005e00ba56ad93c726da8bb58c685ba6c1813d3687aaa2365a0e5798?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ef1873005e00ba56ad93c726da8bb58c685ba6c1813d3687aaa2365a0e5798?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ef1873005e00ba56ad93c726da8bb58c685ba6c1813d3687aaa2365a0e5798?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ef1873005e00ba56ad93c726da8bb58c685ba6c1813d3687aaa2365a0e5798?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
                    className="shrink-0 rounded-lg aspect-square w-[81px]"
                  />
                  <div className="flex-auto my-auto">schedule meeting</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-5 px-5 py-5 w-full text-2xl leading-7 text-black uppercase rounded-xl bg-zinc-300 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c29b3da62ea0dd164e47ccec689e341a03e731843c22976291d4713fc0126d75?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c29b3da62ea0dd164e47ccec689e341a03e731843c22976291d4713fc0126d75?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c29b3da62ea0dd164e47ccec689e341a03e731843c22976291d4713fc0126d75?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c29b3da62ea0dd164e47ccec689e341a03e731843c22976291d4713fc0126d75?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c29b3da62ea0dd164e47ccec689e341a03e731843c22976291d4713fc0126d75?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c29b3da62ea0dd164e47ccec689e341a03e731843c22976291d4713fc0126d75?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c29b3da62ea0dd164e47ccec689e341a03e731843c22976291d4713fc0126d75?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c29b3da62ea0dd164e47ccec689e341a03e731843c22976291d4713fc0126d75?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
                    className="shrink-0 rounded-lg aspect-square w-[81px]"
                  />
                  <div className="flex-auto my-auto">select members</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 text-2xl leading-7 text-white uppercase max-md:mt-10 max-md:max-w-full">
            recent
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b838f2c80463cd9c36408216401ecaa3a32652c148561e3099ed4b275bfcd0ff?apiKey=97ad27ef41eb41c881f5f55b1d2863ce&"
          className="ml-5 mt-2 w-full border border-solid aspect-[50] blur-[0.6499999761581421px] border-stone-500 stroke-[1px] stroke-stone-500"
        />
        <div className="flex flex-col mt-7 ml-24 max-w-full text-base uppercase w-[468px]">
          <div className="flex gap-5 px-6 py-3 rounded-md bg-zinc-600 max-md:flex-wrap max-md:pl-5">
            <div className="shrink-0 rounded-full bg-zinc-300 h-[65px] w-[65px]" />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <div className="flex gap-5 text-white leading-[172%]">
                <div className="flex-auto">company name</div>
                <div>12.40</div>
              </div>
              <div className="flex gap-3 mt-1.5">
                <button className="pt-2 pb-6 leading-7 rounded-md bg-stone-500 text-white text-opacity-30">
                  <span className="text-white capitalize">description...</span>
                </button>
                <button className="justify-center self-start px-6 py-3 mt-3.5 text-black whitespace-nowrap bg-zinc-300 leading-[172%] max-md:px-5">
                  view
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-5 px-6 py-3 mt-6 rounded-md bg-zinc-600 max-md:flex-wrap max-md:pl-5">
            <div className="shrink-0 rounded-full bg-zinc-300 h-[65px] w-[65px]" />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <div className="flex gap-5 text-white leading-[172%]">
                <div className="flex-auto">company name</div>
                <div>12.40</div>
              </div>
              <div className="flex gap-3 mt-1.5">
                <button className="pt-2 pb-6 leading-7 rounded-md bg-stone-500 text-white text-opacity-30">
                  <span className="text-white capitalize">Description...</span>
                </button>
                <button className="justify-center self-start px-6 py-3 mt-3.5 text-black whitespace-nowrap bg-zinc-300 leading-[172%] max-md:px-5">
                  view
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-5 px-6 py-3 mt-6 rounded-md bg-zinc-600 max-md:flex-wrap max-md:pl-5">
            <div className="shrink-0 rounded-full bg-zinc-300 h-[65px] w-[65px]" />
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <div className="flex gap-5 text-white leading-[172%]">
                <div className="flex-auto">company name</div>
                <div>12.40</div>
              </div>
              <div className="flex gap-3 mt-1.5">
                <button className="pt-2 pb-6 leading-7 rounded-md bg-stone-500 text-white text-opacity-30">
                  <span className="text-white capitalize">Description...</span>
                </button>
                <button className="justify-center self-start px-6 py-3 mt-3.5 text-black whitespace-nowrap bg-zinc-300 leading-[172%] max-md:px-5">
                  view
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {isOpen && (
        // <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
        //   <div className="bg-white p-6 rounded shadow-lg">
        //     <button onClick={closeLoginPopup} className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800">
        //       Close
        //     </button>
        //     <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        //       {/* Form fields for username and password */}
        //       <input type="text" placeholder="Username" className="mb-4 p-2 border border-gray-400 rounded" />
        //       <input type="password" placeholder="Password" className="mb-4 p-2 border border-gray-400 rounded" />
        //       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        //         Submit
        //       </button>
        //     </form>
        //   </div>
        // </div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
        <div className=" bg-slate-800">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex gap-5 self-end max-w-full mt-5 text-4xl font-bold leading-7 text-black uppercase w-[479px] max-md:flex-wrap">
              <div className="flex-auto">Join Meeting</div>
            </div>
            <div className="mx-5 mt-10 mb-5">
              <div className="flex justify-center items-start px-4 py-4 rounded-lg bg-zinc-300 mb-8">
                <input
                  type="text"
                  id="name"
                  value={name}
                onChange={(e) => setName(e.target.value)}
                  placeholder="ENTER YOUR NAME"
                  className="flex-auto my-auto text-slate-800 bg-transparent border-none outline-none"
                  required
                />
              </div>
              <div className="flex justify-center items-start px-4 py-4 rounded-lg bg-zinc-300 mb-8">
                <input
                  type="number"
                  id="meetingId"
                  value={meetingId}
                  onChange={(e) => setMeetingId(e.target.value)}
                  placeholder="ENTER MEETING ID"
                  className="flex-auto my-auto text-slate-800 bg-transparent border-none outline-none"
                  required
                />
              </div>
              <div className="flex justify-center items-start px-4 py-4 rounded-lg bg-zinc-300 mb-8">
                <input
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="ENTER MEETING PASSWORD"
                  className="flex-auto my-auto text-slate-800 bg-transparent border-none outline-none"
                  required
                />
              </div>
              <div className="flex gap-5 self-end mt-5 max-w-full text-black whitespace-nowrap w-[466px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
              
                <button
                  className="justify-center items-center px-16 py-5 rounded-lg bg-zinc-300 max-md:px-5"
                  onClick={getSignature}
                >
                  Join
                </button>
              
              <button
                className="justify-center items-center px-16 py-5 bg-white rounded-lg border border-black border-solid max-md:px-5"
                type="reset"
                onClick={closeLoginPopup}
                  >
                Cancel
              </button>
            </div>
            </div>
          </div>
        </div>
       </div>
      )}
    </>
  );
}

export default Meetingbox;
