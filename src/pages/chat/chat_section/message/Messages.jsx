import MessageWrapper from "./MessageWrapper";

export default function Messages({ messages = [] }) {
  const filteredMessages = messages.messages?.reduce((acc, curr) => {
    const date = new Date(curr.time);
    let dateString = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    const inToday = date.getDate() - (new Date().getDate() - 1) >= 1;

    if (inToday) {
      dateString = "TODAY";
    }

    if (!acc[dateString]) {
      acc[dateString] = [];
    }
    acc[dateString].push(curr);

    return acc;
  }, []);

  return (
    <div className="Messages max-h-full w-full relative bg-[#0b141a] border-l border-[rgba(233,237,239,0.12)]">
      <div className="absolute w-full h-full bg-messagesBg bg-repeat bg-[#080a0a] opacity-[0.06]"></div>
      <div className="relative w-full overflow-y-scroll max-h-full scrollbar">
        <div className="MessageList max-h-full flex flex-col justify-end h-full py-5 relative gap-y-0.5">
          {filteredMessages &&
            Object.entries(filteredMessages).map(([date, messages], index) => {
              return (
                <div key={index}>
                  <div className="flex justify-center my-4">
                    <div className="bg-[#182229] rounded-[7.5px] px-3 py-1.5 text-color2 text-[12.5px]">
                      {date}
                    </div>
                  </div>
                  {messages.map((value, index) => {
                    return (
                      <div data-id={value.id} key={index} className="my-0.5">
                        <MessageWrapper {...value} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
