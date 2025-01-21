import { useState } from "react";

import Head from "./Head";
import Search from "./Search";
import Messages from "./messages";
import NewChat from "./NewChat";

export default function SideBar() {
  const [filterText, setFilterText] = useState("");
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((open) => !open);
  };

  return (
    <div className="LeftSide h-full bg-color1 w-[30%] relative overflow-hidden">
      <Head handleDrawerOpen={toggleDrawer} />
      <Search filterText={filterText} setFilterText={setFilterText} />
      <Messages filterText={filterText} />
      <NewChat drawerOpen={open} handleDrawerClose={toggleDrawer} />
    </div>
  );
}
