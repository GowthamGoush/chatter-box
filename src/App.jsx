import SideBar from "./pages/chat/sidebar";
import ChatSection from "./pages/chat/chat_section";
import Modals from "./components/modals";

import AutoMessages from "./components/common/AutoMessages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    setInterval(() => {
      const contact = contacts[Math.floor(Math.random() * contacts.length)];
      AutoMessages(contact, dispatch);
    }, 15 * 1000);
  }, []);

  return (
    <div className="App w-screen h-screen min-h-[512px] bg-color1">
      <Modals />
      <div className="Wrapper h-full max-h-full flex 1441:top-[19px] relative 1441:w-[calc(100%-38px)] 1441:h-[calc(100%-38px)] 1441:max-w-[1600px] mx-auto shadow-[0_6px_18px_rgba(11,20,26,.05)]">
        <SideBar />
        <div className="RightSide h-full w-[70%] bg-[#222e35]">
          <ChatSection />
        </div>
      </div>
    </div>
  );
}

export default App;
