import { useSelector } from "react-redux";

import DeleteMessage from "./DeleteMessage";

const modals = {
  deleteMessage: <DeleteMessage />,
};

export default function Modals() {
  const activeModal = useSelector((state) => state.modal.activeModal);
  if (activeModal !== null) {
    return modals[activeModal];
  }
}
