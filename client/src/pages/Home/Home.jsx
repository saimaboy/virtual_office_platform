import React from "react";

function Home() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden relative flex-col pb-20 w-full min-h-[858px] max-md:max-w-full">
       <nav> <img
          loading="lazy"
          srcSet="assets/heroimage.svg"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex justify-end relative gap-5 px-16 py-3.5 w-full text-base leading-7 text-white uppercase shadow-sm bg-stone-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div>about</div>
          <div>pricing</div>
          <div>contact</div> 

          <button>
          <div className="justify-center self-start px-4  text-sm leading-7 rounded-3xl bg-zinc-700">
            join to company
          </div>
          </button> 
        </div>
        </nav>
        <div className="flex relative z-10 flex-col items-end px-20 -mt-14 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 items-start self-stretch text-6xl leading-7  text-white uppercase max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full max-md:text-4xl">
            <img
              loading="lazy"
              srcSet="assets/logo.svg"
              className="shrink-0 self-start max-w-full aspect-[1.16] w-[247px] pb-40"
              />
            <div className="ml-[550px] self-end   max-md:text-4xl ">
              IMAGINE A PLACE...
            </div>
          </div>
          <div className="mt-16 text-xl leading-7 text-right text-white uppercase max-md:mt-10 max-md:max-w-full">
            ...where you can belong to a school club,
            <br /> a gaming group, or a worldwide art community. <br />
            Where just you and a handful of
            <br /> friends can spend time together. A place that makes it <br />
            easy to talk every day and hang out more often.
          </div>
          <div className="flex gap-5 mt-24 mr-5 text-xl leading-7 text-white uppercase max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
            <div className="justify-center px-3.5 py-5 bg-zinc-700 rounded-[46px]">
              CREATE COMPANY
            </div>
            <div className="justify-center px-3 py-5 border-2 border-solid border-zinc-700 rounded-[57px]">
              JOIN TO COMPANY
            </div>
          </div>
     
          <div className="flex gap-5 justify-between mt-44 mr-7 max-md:mt-10 max-md:mr-2.5">
            <img
              loading="lazy"
              srcSet="assets/facebook.svg"
              className="shrink-0 aspect-square w-[46px]"
            />
            <img
              loading="lazy"
              srcSet="assets/twitter.svg"
              className="shrink-0 aspect-square w-[46px]"
            />
            <img
              loading="lazy"
              srcSet="assets/instagram.svg"
              className="shrink-0 aspect-square w-[46px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center px-5 mt-24 w-full max-w-[1063px] max-md:mt-10 max-md:max-w-full">
        <div className="text-6xl leading-7 text-black uppercase max-md:max-w-full max-md:text-4xl">
          WORK FROM HOME
        </div>
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="z-10 self-stretch my-auto text-xl leading-7 text-black uppercase max-md:mt-10 max-md:max-w-full">
                Low-latency voice and video feels like <br />
                you’re in the same room. Wave hello over video,
                watch friends stream their games, or gather up and
                have a drawing session with screen share.
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b720bbd0ffbc28fa26e786272c447bb487ee49799764a28a4e5e9ba10ffb66a?"
                className="grow w-full aspect-[1.39] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 mt-40 w-full bg-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mb-9 w-full max-w-[1069px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef4023dc51540567c93f4287b955577034e4cd921410580a4926d48de9958f93?"
                className="grow mt-28 w-full aspect-[1.35] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col leading-7 text-right text-white uppercase max-md:max-w-full">
                <div className="text-6xl max-md:max-w-full max-md:text-4xl max-md:leading-5">
                  RELIABLE TECH FOR STAYING CLOSE
                </div>
                <div className="mt-24 text-xl max-md:mt-10 max-md:max-w-full">
                  Low-latency voice and video feels like <br />
                  you’re in the same room. Wave hello over video,
                   watch friends stream their games, or gather up and
                  have a drawing session with screen share.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center mt-28 w-full max-w-[1068px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto leading-7 text-black uppercase max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl max-md:max-w-full max-md:text-4xl max-md:leading-5">
                RELIABLE TECH FOR
            
                STAYING CLOSE
              </div>
              <div className="mt-14 text-xl max-md:mt-10 max-md:max-w-full">
                Low-latency voice and video feels like <br />
                you’re in the same room. Wave hello over video,
              
                watch friends stream their games, or gather up and 
                have a drawing session with screen share.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e24d3e530c75c51fd738cb6a44a38bb3dfa0734e9f720d9f028c3cdba3d243e?"
              className="grow w-full aspect-[1.16] max-md:mt-6 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="pt-8 pr-20 pl-10 mt-44 w-full bg-zinc-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-3.5 text-xl leading-7 text-white capitalize max-md:mt-10">
              <div>
                <span className="text-zinc-800">PRODUCT</span>
                <br />
                <br />
               <div> Download</div>
              
                <div>Nitro</div>
                
                <div>Status</div>
                
                <div>App Directory</div>
                
                <div>New Mobile Experience</div>
              </div>
              <img
                loading="lazy"
                srcSet="assets/logo.svg"
                className="self-start mt-36 w-full aspect-[1.85] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[15%] max-md:ml-0 max-md:w-full">
            <div className="mt-3.5 text-xl leading-7 text-white capitalize max-md:mt-10">
              <span className="text-zinc-800">COMPANY</span>
              <br />
              <br />
              <div>about</div>
              
              <div>Jobs</div>
             
              <div>Brand</div>
              
              <div>Newsroom</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="mt-3.5 max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="text-xl leading-7 text-white capitalize max-md:mt-2.5">
                    <span className="text-zinc-800">RESOURCES</span>
                    <br />
                    <br />
                  <div> College </div> 
                   
                    <div>Support</div>
                  
                    <div>Safety</div>
                    
                    <div>Blog</div>
                    
                    <div>Feedback</div>
                    
                    <div>StreamKit</div>
                    
                    <div>Creators</div>
                    
                    <div>Community</div>
                   
                    <div>Developers</div>
                    
                    <div>Gaming</div>
                    
                    <div>Official 3rd Party Merch</div>
                    
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="text-xl leading-7 text-white capitalize max-md:mt-2.5">
                    <span className="text-zinc-800">POLICIES</span>
                    <br />
                    <br />
                    <div>terms</div>
                    
                    <div>Privacy</div>
                   
                    <div>Cookie Settings</div>
                    
                    <div>Guidelines</div>
                    
                    <div>Acknowledgements</div>
                    
                    <div>Licenses</div>
                    
                    <div>Company Information</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 pl-24">
              <div className="flex gap-3 text-xl leading-7 text-black capitalize whitespace-nowrap">
                <img
                  loading="lazy"
                  srcSet="assets/america.svg"
                  className="shrink-0 w-10 aspect-square"
                />
                <div className="my-auto">English</div>
           
              </div>
              <div className="flex flex-col items-center self-end mt-20 w-[46px] max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="assets/instagram.svg"
                  className="w-full aspect-square"
                />
                <img
                  loading="lazy"
                  srcSet="assets/twitter.svg"
                  className="mt-10 w-full aspect-square"
                />
                <img
                  loading="lazy"
                  srcSet="assets/facebook.svg"
                  className="mt-10 w-full aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
