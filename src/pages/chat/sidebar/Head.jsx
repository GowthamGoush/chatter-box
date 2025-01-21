import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVert from "@mui/icons-material/MoreVert";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

export default function Head({ handleDrawerOpen }) {
  return (
    <div className="Head bg-color2 h-[60px] px-4 flex items-center justify-between">
      <div className="Profile flex items-center h-full">
        <AccountCircleIcon fontSize="large" sx={{ color: "white" }} />
      </div>
      <div className="Actions text-color3 flex text-center gap-6 pr-2">
        <div className="Story">
          <RotateLeftIcon />
        </div>
        <div onClick={handleDrawerOpen} className="Message cursor-pointer">
          <ChatIcon />
        </div>
        <div className="Settings">
          <MoreVert />
        </div>
      </div>
    </div>
  );
}
