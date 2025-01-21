import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../../stores/Message";

import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";

export default function Actions() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const input = useRef();

  useEffect(() => {
    if (input) input.current?.focus();
  });

  const handleMessage = (e) => {
    e.preventDefault();

    if (message) {
      setMessage("");
      dispatch(sendMessage(message));
    }
  };

  return (
    <div className="bg-color2 relative h-[62px] px-5 pl-2 flex border-l border-color1">
      <div className="flex text-color2 mr-2">
        <div className="p-2 flex items-center cursor-pointer">
          <EmojiEmotionsOutlinedIcon />
        </div>
        <div className="flex items-center">
          <div className="p-2 rounded-full cursor-pointer">
            <AttachFileIcon />
          </div>
        </div>
      </div>
      <form onSubmit={handleMessage} className="flex items-center w-full">
        <div className="w-full">
          <input
            id="messageInput"
            ref={input}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            type="text"
            placeholder="Type a message"
            className="bg-[#2a3942] outline-none text-[#d1d7db] border border-[#2a3942] rounded-lg py-2 px-3 w-full placeholder:text-[15px] placeholder:pl-1 placeholder:text-color2"
          />
        </div>
        <button className="ml-5 cursor-pointer" type="submit">
          <SendIcon className="text-color2" />
        </button>
      </form>
    </div>
  );
}
