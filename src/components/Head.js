import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(searchQuery);

    //Make an API call after every key press
    //but if the differnce between 2 API calls is < 200ms decline API CALL
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key-i
   * -render the component
   * -useEffect()
   * -start timer => make api call after 200ms
   *
   * key - ip
   * - if key p is pressed before 200 ms - then JS destroys the component(using useEffect return method)
   * -re-render the component
   * -useEffect()
   * -start timer => make api call after 200ms(new timer)
   */

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5  m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer "
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="menu"
        />

        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 rounded-r-full  bg-gray-100 w-10">
          <i className="fa-solid fa-magnifying-glass p-0"></i>
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
