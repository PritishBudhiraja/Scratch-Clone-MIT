import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsThinkCloudVisible,
  setThinkCloudMessage,
} from "../../../actions/looksActions";

function ThinkCloudComponent({ id }) {
  const { isCatspriteVisible, isThinkCloudVisible } = useSelector((state) => {
    return {
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
      isThinkCloudVisible: state.looksReducer.isThinkCloudVisible,
    };
  });
  const dispatch = useDispatch();
  const [thinkCloudMsg, setThinkCloudMsg] = useState("Hmmm");
  return (
    <div className="flex-col items-center justify-between flex-row flex-wrap bg-yellow-500 mb-5">
      <div
        onClick={() => {
          if (isCatspriteVisible) {
            !isThinkCloudVisible && dispatch(setIsThinkCloudVisible());
            dispatch(setThinkCloudMessage(thinkCloudMsg));
          }
        }}
      >
        <div className="flex items-center justify-between flex-row flex-nowrap text-white px-2 py-1 mb-2 text-sm cursor-pointer">
          Enter Message:
        </div>
        <div className="flex items-center justify-between flex-row flex-nowrap text-white px-2 py-1 mb-3 text-sm cursor-pointer">
          {`Message - ${thinkCloudMsg}`}
        </div>
      </div>
      <input
        id={id}
        type="text"
        className="text-black text-center w-auto mx-2 mb-2"
        value={thinkCloudMsg}
        onChange={(e) => {
          setThinkCloudMsg(e.target.value);
        }}
      />
    </div>
  );
}

export default ThinkCloudComponent;
