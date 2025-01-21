import { getMessage } from "../../stores/Message";
import { disableTyping, enableTyping } from "../../stores/Contacts";
import API from "../../utils/api_config";

const AutoMessages = (contact, dispatch) => {
  dispatch(enableTyping(contact.name));

  async function getQuote() {
    const res = await fetch(API.randomQuotes);
    return await res.json();
  }

  getQuote()
    .then((data) => {
      const payload = {
        name: contact.name,
        message: data.quote,
      };
      setTimeout(() => {
        dispatch(getMessage(payload));
        dispatch(disableTyping(contact.name));
      }, 5000);
    })
    .catch((err) => console.error(err));
};

export default AutoMessages;
