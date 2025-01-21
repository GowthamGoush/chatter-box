import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";

const UserAvatar = ({ type }) => {
  switch (type) {
    case "svg-group":
      return <GroupIcon />;
    case "svg-solo":
      return <PersonIcon />;
    default:
      return (
        <img
          className="w-full h-full object-cover"
          src={type}
          alt="user-avatar"
        />
      );
  }
};

export default UserAvatar;
