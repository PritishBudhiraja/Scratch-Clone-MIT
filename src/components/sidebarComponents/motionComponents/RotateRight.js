import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rotateRight } from "../../../actions/motionAction";
import Icon from "./../../Icon";

function RotateRight({ id }) {
  const { isCatspriteVisible } = useSelector((state) => {
    return {
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
    };
  });
  const dispatch = useDispatch();
  const [moveDegreeRight, setMoveDegreeRight] = useState(0);
  return (
    <div className="flex items-center justify-between flex-row flex-wrap bg-blue-500 mb-5">
      <div
        className="flex items-center justify-between flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={(e) => {
          if (isCatspriteVisible)
            dispatch(rotateRight({ rotateValue: moveDegreeRight }));
        }}
      >
        {`Turn ${moveDegreeRight} degree`}
        <Icon name="redo" size={15} className="text-white mx-2" />
      </div>
      <input
        id={id}
        type="number"
        className="text-black text-center w-10 mx-2"
        value={moveDegreeRight}
        onChange={(e) => {
          setMoveDegreeRight(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default RotateRight;
