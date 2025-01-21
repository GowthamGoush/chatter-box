import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { openModal, setDeleteMessageID } from "../../../../stores/Modal";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const menuItems = ["Delete message"];

const SentMessage = ({ id, message, time }) => {
  const dispatch = useDispatch();
  const activeMessage = useSelector((state) => state.message.activeMessage);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleClose = (event) => {
    dispatch(setDeleteMessageID({ activeMessage, id, sender: true }));
    dispatch(openModal("deleteMessage"));
    handleDelete(event);
  };

  return (
    <div className="MessageWrapper flex justify-start px-[9%] my-1">
      <div className="group transition-all duration-200 Message relative overflow-hidden bg-[#202c33] text-[#e9edef] text-[14px] rounded-md px-1.5 flex items-end">
        <div className="mr-1 px-1 py-1.5">{message}</div>
        <div className="flex items-center py-0.5 text-color3">
          <div className="mr-1 text-[12px]">{time}</div>
        </div>
        <div
          onClick={handleClick}
          className={
            "MessageActionsLeft w-0 group-hover:w-auto overflow-hidden cursor-pointer absolute right-0 top-0 h-[100%] flex items-center" +
            (open ? "w-auto" : "")
          }
        >
          <div className="p-1">
            <KeyboardArrowDownOutlinedIcon />
          </div>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleDelete}
        >
          {menuItems.map((menuItem, index) => (
            <MenuItem key={index} onClick={handleClose}>
              {menuItem}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

const ReceivedMessage = ({ id, message, time }) => {
  const dispatch = useDispatch();
  const activeMessage = useSelector((state) => state.message.activeMessage);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleClose = (event) => {
    dispatch(setDeleteMessageID({ activeMessage, id }));
    dispatch(openModal("deleteMessage"));
    handleDelete(event);
  };

  return (
    <div className="MessageWrapper flex justify-end px-[9%] my-1">
      <div className="group Message relative bg-[#005c4b] text-[#e9edef] text-[14px] inline-block rounded-md overflow-hidden px-1.5">
        <div className="flex items-end">
          <div className="mr-1 px-1 py-1.5">{message}</div>
          <div className="flex items-center py-0.5 text-color3">
            <div className="mr-1 text-[12px]">{time}</div>
          </div>
          <div
            onClick={handleClick}
            className={
              "MessageActionsRight w-0 group-hover:w-auto overflow-hidden cursor-pointer absolute right-0 top-0 h-[100%] flex items-center" +
              (open ? "w-auto" : "")
            }
          >
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleDelete}
          >
            {menuItems.map((menuItem, index) => (
              <MenuItem key={index} onClick={handleClose}>
                {menuItem}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default function MessageWrapper(value) {
  let time = new Date(value.time);
  time =
    time.getHours() +
    ":" +
    (time.getMinutes() <= 9 ? "0" + time.getMinutes() : time.getMinutes());

  return value.status !== "received" ? (
    <ReceivedMessage
      id={value.id}
      message={value.message}
      time={time}
      reply={value?.reply}
    />
  ) : (
    <SentMessage id={value.id} message={value.message} time={time} />
  );
}
