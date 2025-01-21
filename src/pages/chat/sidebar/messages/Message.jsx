import { useState } from "react";
import { useDispatch } from "react-redux";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import UserAvatar from "../../../../components/common/UserAvatar";
import { deleteChat } from "../../../../stores/Message";

export default function Message({ value, activeMessageHandle, activeMessage }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleDelete = (event, name) => {
    dispatch(deleteChat(name));
    handleClose(event);
  };

  let messageDetail = null;
  if (value.messages.length > 0) {
    let time = new Date(value.messages.at(-1).time);
    time =
      time.getHours() +
      ":" +
      (time.getMinutes() <= 9 ? "0" + time.getMinutes() : time.getMinutes());

    messageDetail = {
      message: value.messages.at(-1).message,
      typing: value.typing,
      time,
    };
  }

  const menuItems = ["Delete Chat"];

  const MessageDetail = () => {
    if (messageDetail) {
      return messageDetail?.typing ? (
        <div className="text-color4">Typing...</div>
      ) : (
        <div className="TextLineClamp1">{messageDetail.message}</div>
      );
    } else {
      return "Click and start a chat";
    }
  };

  return (
    <div
      onClick={() => activeMessageHandle(value.name)}
      className={
        "Message group cursor-pointer flex items-center pl-3.5" +
        (activeMessage === value.name ? "bg-color2" : "hover:bg-color3")
      }
    >
      <div className="Img mr-3">
        <div className="w-[49px] h-[49px] rounded-full overflow-hidden">
          <UserAvatar type={value.image} />
        </div>
      </div>
      <div className="w-full border-t border-color1 group-hover:border-[transparent] py-3 pr-3.5">
        <div className="Top flex items-center justify-between text-color1 text-[17px]">
          <div>{value.name}</div>
          <div className="Time text-[12px] text-color2">
            {messageDetail && messageDetail.time}
          </div>
        </div>
        <div className="Detail relative grid grid-cols-[auto_auto] justify-between text-color2 text-[14px]">
          <div className="flex items-center max-w-full mr-2">
            <MessageDetail />
          </div>
          <div className="flex items-center gap-1">
            <div>
              <div
                id="basic-button"
                onClick={handleClick}
                className={
                  "relative overflow-hidden w-0 group-hover:w-auto " +
                  (open ? "w-auto" : "")
                }
              >
                <KeyboardArrowDownIcon />
              </div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {menuItems.map((menuItem, index) => (
                  <MenuItem
                    key={index}
                    onClick={(event) => handleDelete(event, value.name)}
                  >
                    {menuItem}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
