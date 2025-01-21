import { createSlice, current } from "@reduxjs/toolkit";
import { UUID } from "../utils/helper";

let messages = [
  {
    name: "Harry Potter",
    messages: [
      {
        id: UUID(),
        message: "Hello",
        time: 1673373536000,
        status: "sent",
      },
      {
        id: UUID(),
        message: "Are you there?",
        time: 1673805536000,
        status: "received",
      },
      {
        id: UUID(),
        message: "My favorite spell is Expelliarmus",
        time: 1673805536000,
        status: "received",
      },
      {
        id: UUID(),
        message: "What is your favorite spell?",
        time: 1673805536000,
        status: "received",
      },
      {
        id: UUID(),
        message: "Ron and Hermione are my best friends",
        time: 1674237536000,
        status: "received",
      },
    ],
  },
];

if (localStorage.getItem("messages")) {
  messages = JSON.parse(localStorage.getItem("messages"));
} else {
  localStorage.setItem("messages", JSON.stringify(messages));
}

const initialState = {
  activeMessage: null,
  activeReply: [],
  messages,
};

const slice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setActiveMessage: (state, action) => {
      state.activeMessage = action.payload;

      const contact = state.messages.find(
        (value) => value.name === action.payload
      );
      contact?.messages.filter((message) => (message.readed = false));

      localStorage.setItem("messages", JSON.stringify(current(state.messages)));
    },
    sendMessage: (state, action) => {
      const time = new Date().getTime();
      const activeReply = state.activeReply.find(
        (value) => value.name === state.activeMessage
      );
      const messagesExist = state.messages.find((value) => {
        return value.name === state.activeMessage;
      });

      const message = {
        id: UUID(),
        message: action.payload,
        time,
        status: "sent",
        reply: activeReply && activeReply,
      };

      if (!messagesExist) {
        state.messages.push({
          name: state.activeMessage,
          messages: [{ ...message }],
        });
      } else {
        state.messages
          .find((value) => {
            return value.name === state.activeMessage;
          })
          .messages.push({
            ...message,
          });
      }

      if (activeReply) {
        state.activeReply = state.activeReply.filter(
          (value) => value.name !== state.activeMessage
        );
      }

      localStorage.setItem("messages", JSON.stringify(current(state.messages)));
    },
    deleteChat: (state, action) => {
      const messages = state.messages.filter(
        (message) => message.name !== action.payload
      );
      state.messages = messages;
      state.activeMessage = null;

      localStorage.setItem("messages", JSON.stringify(messages));
    },
    deleteMessage: (state, action) => {
      const contact = state.messages.find(
        (value) => value.name === action.payload.name
      );
      contact.messages = contact.messages.filter(
        (message) => message.id !== action.payload.messageID
      );
      localStorage.setItem("messages", JSON.stringify(current(state.messages)));
    },
    getMessage: (state, action) => {
      const time = new Date().getTime();
      const messagesExist = state.messages.find((value) => {
        return value.name === action.payload.name;
      });

      const message = {
        id: UUID(),
        message: action.payload.message,
        time,
        status: "received",
      };

      if (!messagesExist) {
        state.messages.push({
          name: action.payload.name,
          messages: [{ ...message }],
        });
      } else {
        state.messages
          .find((value) => {
            return value.name === action.payload.name;
          })
          .messages.push({
            ...message,
          });
      }
    },
  },
});

export const {
  setActiveMessage,
  sendMessage,
  deleteChat,
  deleteMessage,
  getMessage,
} = slice.actions;
export default slice.reducer;
