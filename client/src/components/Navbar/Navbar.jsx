import React, { useState } from "react";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search submission (if needed)
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search logic here, if needed
    console.log("Search query:", searchQuery);
  };

  return (
    <div>
      <div className="box-border   shadow-sm bg-stone-500  py-4  text-center  appearance-none cursor-pointer pt-2 ">
        <div className="flex flex-row pr-10 justify-between ">
          <div className="flex">
            <img
              loading="lazy"
              src="assets/logo.svg"
              className="  max-w-[200px]  ml-10 "
            />
          </div>
          <div className="flex flex-row">
            <button openLinkInNewTab={false}>
              <div className="px-3 ">
                <img
                  loading="lazy"
                  src="assets/document.svg"
                  className="w-full aspect-[1.61] max-w-[47px] rounded-[113px] "
                />
              </div>
            </button>
            <button openLinkInNewTab={false}>
              <div className="px-3">
                <img
                  loading="lazy"
                  src="assets/chat.svg"
                  className="w-full aspect-[1.61] max-w-[47px] rounded-[113px] "
                />
              </div>
            </button>
            <button openLinkInNewTab={false}>
              <div className="px-3">
                <img
                  loading="lazy"
                  src="assets/video.svg"
                  className="w-full aspect-[1.61] max-w-[47px] rounded-[113px] "
                />
              </div>
            </button>

            <button openLinkInNewTab={false}>
              <div className="px-3">
                <img
                  loading="lazy"
                  src="assets/user.svg"
                  className="w-full aspect-[1.61] max-w-[47px] rounded-[113px]"
                />
              </div>
            </button>

            <div className="search-bar px-5 pt-1">
              <div className="flex justify-center items-start p-2 rounded-lg h-10  bg-stone-600 ">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    className="flex-auto my-auto bg-stone-600 text-white uppercase bg-transparent border-none outline-none"
                    onChange={handleSearchInputChange}
                    
                  />
                  <button type="submit">
                    <img
                      loading="lazy"
                      src="assets/search.svg"
                      className="w-full aspect-[1.61] max-w-[47px] rounded-[113px]"
                    />
                  </button>
                </form>
              </div>
            </div>
            <button openLinkInNewTab={false}>
              <div className="px-3">
                <img
                  loading="lazy"
                  src="assets/question.svg"
                  className="w-full aspect-[1.61] max-w-[47px] rounded-[113px] "
                />
              </div>
            </button>
            <button openLinkInNewTab={false}>
              <div className="px-3">
                <img
                  loading="lazy"
                  src="assets/setting.svg"
                  className="w-full aspect-[1.61] max-w-[47px] rounded-[113px] "
                />
              </div>
            </button>
            <button openLinkInNewTab={false}>
              <div className="px-3">
                <img
                  loading="lazy"
                  src="assets/notification.svg"
                  className="w-full aspect-[1.61] max-w-[47px] rounded-[113px] "
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
