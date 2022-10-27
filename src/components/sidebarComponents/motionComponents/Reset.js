import React from "react";
import { useDispatch } from "react-redux";
import { resetPositions } from "../../../actions/motionAction";

function Reset() {
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center flex-row flex-wrap bg-blue-500 text-white px-20 py-2 mb-5 text-sm cursor-pointer"
      onClick={() => {
        dispatch(resetPositions());
      }}
    >
      Reset
    </div>
  );
}

export default Reset;
