import { useSelector } from "react-redux";
import { useState } from "react";

import Default from "./Default";
import Message from "./message";

export default function ChatSection() {
  const activeMessage = useSelector((state) => state.message.activeMessage);
  const [rightSide, setRightSide] = useState(false);
  let messages = useSelector((state) => state.message.messages).find(
    (value) => {
      return value.name === activeMessage;
    }
  );

  if (!activeMessage) {
    return <Default />;
  } else {
    return (
      <div className="flex h-full">
        <Message
          rightSide={rightSide}
          setRightSide={setRightSide}
          messages={messages}
        />
      </div>
    );
  }
}
