import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rotateLeft } from "../../../actions/motionAction";
import Icon from "./../../Icon";

function RotateLeft({ id }) {
  const { isCatspriteVisible } = useSelector((state) => {
    return {
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
    };
  });
  const dispatch = useDispatch();
  const [moveDegreeLeft, setMoveDegreeLeft] = useState(0);

  return (
    <div className="flex items-center justify-between flex-row flex-wrap bg-blue-500 mb-5">
      <div
        className="flex items-center justify-between flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => {
          if (isCatspriteVisible)
            dispatch(rotateLeft({ rotateValue: moveDegreeLeft }));
        }}
      >
        {`Turn ${moveDegreeLeft} degree`}
        <Icon name="undo" size={15} className="text-white mx-2" />
      </div>
      <input
        id={id}
        type="number"
        className="text-black text-center w-10 mx-2"
        value={moveDegreeLeft}
        onChange={(e) => {
          setMoveDegreeLeft(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default RotateLeft;
