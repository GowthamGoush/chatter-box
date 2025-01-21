import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../stores/Modal";
import { deleteMessage } from "../../stores/Message";

export default function DeleteMessage() {
  const dispatch = useDispatch();
  const deleteMessageData = useSelector(
    (state) => state.modal.deleteMessageData
  );

  function closeModalHandle() {
    dispatch(closeModal());
  }

  function deleteForMe() {
    dispatch(deleteMessage({ ...deleteMessageData, type: 0 }));
    dispatch(closeModal());
  }

  function deleteForEveryone() {
    dispatch(deleteMessage({ ...deleteMessageData, type: 1 }));
    dispatch(closeModal());
  }

  return (
    <div className="w-full h-full absolute bg-[rgba(11,20,26,0.85)] z-10 flex items-center justify-center">
      <div className="Content w-[500px] rounded-[3px] bg-[#3b4a54] p-5 shadow-[0_17px_50px_0_rgba(11,20,26,.19),0_12px_15px_0_rgba(11,20,26,.24)] text-[#d1d7db]">
        <div className="Head mb-4 text-lg">Delete message?</div>
        <div className="Actions flex flex-col items-end gap-3">
          {!deleteMessageData.sender && (
            <button
              onClick={deleteForEveryone}
              className="p-[10px_24px] text-[#00a884] rounded-[3px] border tracking-[1.25px] text-[14px] border-color1"
            >
              DELETE FOR EVERYONE
            </button>
          )}
          <button
            onClick={deleteForMe}
            className="p-[10px_24px] text-[#00a884] rounded-[3px] border tracking-[1.25px] text-[14px] border-color1"
          >
            DELETE FOR ME
          </button>
          <button
            onClick={closeModalHandle}
            className="p-[10px_24px] text-[#00a884] rounded-[3px] border tracking-[1.25px] text-[14px] border-color1"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}
