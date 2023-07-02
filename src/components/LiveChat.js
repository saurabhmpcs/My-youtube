import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling

      dispatch(
        addMessage({
          name: "saurabh",
          message: "Lorem Ipsum dolar site ",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div className="">
          {" "}
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className=" w-full p-2 ml-2 border border-black
      "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Saurabh Singh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="px-2 w-96"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
