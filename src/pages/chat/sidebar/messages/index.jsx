import Message from "./Message";

import { useDispatch, useSelector } from "react-redux";
import { setActiveMessage } from "../../../../stores/Message";

export default function Messages({ filterText }) {
  const dispatch = useDispatch();
  const activeMessage = useSelector((state) => state.message.activeMessage);
  const messages = useSelector((state) => {
    const all = state.message.messages
      .filter((value) => value)
      .sort((a, b) => {
        return b.messages.at(-1)?.time - a.messages.at(-1)?.time;
      });

    if (filterText.length > 0) {
      return all.filter((value) =>
        value.name.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    return all;
  });
  const contacts = useSelector((state) => state.contacts);
  const data = [];
  messages.map((value) =>
    data.push({
      ...value,
      ...contacts.find((contact) => contact.name === value.name),
    })
  );

  function handleActiveMessage(name) {
    dispatch(setActiveMessage(name));
  }

  return (
    <div className="Messages h-[calc(100%-120px)] px-1 overflow-y-scroll overflow-x-hidden overflow scrollbar">
      {data.map((value, index) => (
        <Message
          activeMessageHandle={handleActiveMessage}
          activeMessage={activeMessage}
          key={index}
          index={index}
          value={value}
        />
      ))}
    </div>
  );
}
