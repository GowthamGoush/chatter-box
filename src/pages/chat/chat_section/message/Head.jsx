import { useSelector } from "react-redux";

import UserAvatar from "../../../../components/common/UserAvatar";
import { GetContact } from "../../../../utils/helper";
import { MoreVert, SearchOutlined } from "@mui/icons-material";

export default function Head() {
  const activeMessage = useSelector((state) => state.message.activeMessage);
  const contact = GetContact(activeMessage);

  return (
    <div className="bg-color2 h-[60px] px-4 pr-6 flex items-center justify-between border-l border-color1">
      <div className="cursor-pointer flex items-center text-[#e9edef]">
        <div className="w-10 h-10 flex items-center rounded-full overflow-hidden mr-3">
          <UserAvatar type={contact.image} />
        </div>
        <div className="flex flex-col">
          <div>{contact.name}</div>
        </div>
      </div>
      <div className="flex items-center text-[#aebac1] gap-4">
        <div className="cursor-pointer">
          <SearchOutlined />
        </div>
        <div className="cursor-pointer">
          <MoreVert />
        </div>
      </div>
    </div>
  );
}
