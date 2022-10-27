import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveImageRight } from "../../../actions/motionAction";

function MoveRight({ id }) {
  const { isCatspriteVisible } = useSelector((state) => {
    return {
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
    };
  });
  const dispatch = useDispatch();
  const [moveRightVal, setMoveRightVal] = useState(0);
  return (
    <div className="flex items-center justify-between flex-row flex-wrap bg-blue-500 mb-5">
      <div
        className="flex items-center justify-between flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => {
          if (isCatspriteVisible)
            dispatch(moveImageRight({ xValue: moveRightVal }));
        }}
      >
        {`Move ${moveRightVal} Right`}
      </div>
      <input
        id={id}
        type="number"
        className="text-black text-center w-10 mx-2"
        value={moveRightVal}
        onChange={(e) => {
          setMoveRightVal(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default MoveRight;
