import { useSelector, useDispatch } from "react-redux";
import { setActiveMessage } from "../../../stores/Message";

import UserAvatar from "../../../components/common/UserAvatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function NewChat({ handleDrawerClose, drawerOpen }) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const handleNewChat = (name) => {
    dispatch(setActiveMessage(name));
    handleDrawerClose();
  };

  return (
    <div
      className={`NewChat absolute w-full h-full top-0 bg-[#111b21] ${
        drawerOpen ? "left-0" : "left-[-100%]"
      } grid-rows-[108px,calc(100%-108px)] grid transition-all duration-800`}
    >
      <div className="Head h-[108px] bg-[#202c33] flex items-end text-[#d9dee0] p-5">
        <div onClick={handleDrawerClose} className="mr-3 cursor-pointer">
          <ArrowBackIcon />
        </div>
        New Chat
      </div>
      <div className="List">
        <div className="Wrapper max-h-full overflow-y-scroll overflow-x-hidden overflow scrollbar">
          {contacts.map((contact, contactIndex) => (
            <div
              key={contactIndex}
              onClick={() => handleNewChat(contact.name)}
              className={
                "Message group cursor-pointer flex items-center pl-3.5 hover:bg-[#202c33]"
              }
            >
              <div className="Img mr-3">
                <div className="w-[49px] h-[49px] rounded-full overflow-hidden">
                  <UserAvatar type={contact.image} />
                </div>
              </div>
              <div className="w-full border-t border-color1 group-hover:border-[transparent] py-3 pr-3.5">
                <div className="Top flex items-center justify-between text-[#e9edef] text-[17px]">
                  <div>{contact.name}</div>
                  <div className="Time text-[12px] text-color2"></div>
                </div>
                <div className="Detail relative flex justify-between text-color2 text-[14px]">
                  <div className="flex items-center">{contact.about}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewChat;
