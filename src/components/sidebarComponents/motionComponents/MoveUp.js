import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveImageUp } from "../../../actions/motionAction";

function MoveUp({ id }) {
  const { isCatspriteVisible } = useSelector((state) => {
    return {
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
    };
  });
  const dispatch = useDispatch();
  const [moveUpVal, setMoveUpVal] = useState(0);
  return (
    <div className="flex items-center justify-between flex-row flex-wrap bg-blue-500 mb-5">
      <div
        className="flex items-center justify-between flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => {
          if (isCatspriteVisible) dispatch(moveImageUp({ yValue: moveUpVal }));
        }}
      >
        {`Move ${moveUpVal} Upwards`}
      </div>
      <input
        id={id}
        type="number"
        className="text-black text-center w-10 mx-2"
        value={moveUpVal}
        onChange={(e) => {
          setMoveUpVal(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default MoveUp;
