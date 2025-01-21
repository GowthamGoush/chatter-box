import { createSlice } from "@reduxjs/toolkit";

let contacts = [
  {
    name: "Harry Potter",
    image: "https://ik.imagekit.io/hpapi/harry.jpg",
    about: 'Favorite spell: "Expelliarmus"',
  },
  {
    name: "Hermonie Granger",
    image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
    about: "Favorite spell: 'Wingardium Leviosa'",
  },
  {
    name: "Severus Snape",
    image: "https://ik.imagekit.io/hpapi/snape.jpg",
    about: "Favorite spell: 'Avada Kedavra'",
  },
  {
    name: "Ron Weasley",
    image: "https://ik.imagekit.io/hpapi/ron.jpg",
    about: "Favorite spell: 'Stupefy'",
  },
  {
    name: "Albus Dumbledore",
    image: "https://avatar.iran.liara.run/public/45",
    about: "Favorite spell: 'Alohomora'",
  },
  {
    name: "Luna Lovegood",
    image: "https://ik.imagekit.io/hpapi/luna.jpg",
    about: "Favorite spell: 'Riddikulus'",
  },
  {
    name: "Draco Malfoy",
    image: "https://ik.imagekit.io/hpapi/draco.jpg",
    about: "Favorite spell: 'Serpensortia'",
  },
  {
    name: "Neville Longbottom",
    image: "https://ik.imagekit.io/hpapi/neville.jpg",
    about: "Favorite spell: 'Expulso'",
  },
  {
    name: "Sirius Black",
    image: "https://ik.imagekit.io/hpapi/sirius.JPG",
    about: "Favorite spell: 'Protego'",
  },
  {
    name: "Remus Lupin",
    image: "https://ik.imagekit.io/hpapi/lupin.jpg",
    about: "Favorite spell: 'Expecto Patronum'",
  },
  {
    name: "Minerva McGonagall",
    image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
    about: "Favorite spell: 'Transfiguration'",
  },
  {
    name: "Rubeus Hagrid",
    image: "https://ik.imagekit.io/hpapi/hagrid.png",
    about: "Favorite spell: 'Engorgio'",
  },
];

if (localStorage.getItem("contacts")) {
  contacts = JSON.parse(localStorage.getItem("contacts"));
} else {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

const slice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: {
    enableTyping: (state, action) => {
      state.find((value) => value.name === action.payload)["typing"] = true;
    },
    disableTyping: (state, action) => {
      state.find((value) => value.name === action.payload)["typing"] = false;
    },
  },
});

export const { enableTyping, disableTyping } = slice.actions;
export default slice.reducer;
