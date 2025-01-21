module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      1441: "1441px",
    },
    colors: {
      color1: "#111b21",
      color2: "#1f2c33",
      color3: "#aebac1",
      color4: "#101a20",
      icon: "#8696a0",
    },
    extend: {
      backgroundImage: {
        messagesBg: "url('/messages_bg.png')",
      },
      backgroundColor: {
        color1: "#111b21",
        color2: "#1f2c33",
        color3: "#202c33",
        color4: "#3b4a54",
        color5: "#182229",
        color6: "#0b141a",
        color7: "#080a0a",
      },
      textColor: {
        color1: "#e9edef",
        color2: "#8696a0",
        color3: "#d1d7db",
        color4: "#00a884",
      },
      borderColor: {
        color1: "rgba(134,150,160,0.15)",
        color2: "#2a3942",
      },
      padding: {
        2: "0.5rem",
        5: "1.25rem",
        1.5: "0.375rem",
        3: "0.75rem",
        4: "1rem",
      },
      margin: {
        1: "0.25rem",
        4: "1rem",
        3: "0.75rem",
        5: "1.25rem",
      },
    },
  },
  plugins: [],
};
