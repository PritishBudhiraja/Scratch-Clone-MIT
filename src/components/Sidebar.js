import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  moveImageDown,
  moveImageLeft,
  moveImageRight,
  moveImageUp,
  resetPositions,
  rotateLeft,
  rotateRight,
} from "../actions/motionAction";
import Icon from "./Icon";

export default function Sidebar() {
  const { xValue, yValue, rotateValue } = useSelector((state) => {
    return {
      xValue: state.motionReducer.xValue,
      yValue: state.motionReducer.yValue,
      rotateValue: state.motionReducer.rotateValue,
    };
  });
  const [moveLeftVal, setMoveLeftVal] = useState(0);
  const [moveRightVal, setMoveRightVal] = useState(0);
  const [moveUpVal, setMoveUpVal] = useState(0);
  const [moveDownVal, setMoveDownVal] = useState(0);
  const [moveDegreeLeft, setMoveDegreeLeft] = useState(0);
  const [moveDegreeRight, setMoveDegreeRight] = useState(0);

  const dispatch = useDispatch();
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold rounded text-black-400 p-2">Side Bar</div>
      <div>
        <div className="font-bold">Stats</div>
        <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm">
          X Coordinates : {xValue}
        </div>
        <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm">
          Y Coordinates : {yValue}
        </div>
        <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm">
          Rotate Degree : {rotateValue}
        </div>
        <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm">
          Show : True
        </div>
        <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm">
          Size : 0
        </div>
      </div>
      <div className="font-bold mb-5"> {"Motion"} </div>

      <div className="flex items-center justify-center flex-row flex-wrap bg-blue-500 mb-5">
        <div
          className="flex items-center justify-center flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => {
            dispatch(moveImageRight({ xValue: moveRightVal }));
          }}
        >
          {`Move ${moveRightVal} Right`}
        </div>
        <input
          type="number"
          className="text-black text-center w-10 mx-2"
          value={moveRightVal}
          onChange={(e) => {
            setMoveRightVal(parseInt(e.target.value));
          }}
        />
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap bg-blue-500 mb-5">
        <div
          className="flex items-center justify-center flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => {
            dispatch(moveImageLeft({ xValue: moveLeftVal }));
          }}
        >
          {`Move ${moveLeftVal} Left`}
        </div>
        <input
          type="number"
          className="text-black text-center w-10 mx-2"
          value={moveLeftVal}
          onChange={(e) => {
            setMoveLeftVal(parseInt(e.target.value));
          }}
        />
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap bg-blue-500 mb-5">
        <div
          className="flex items-center justify-center flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => {
            dispatch(moveImageUp({ yValue: moveUpVal }));
          }}
        >
          {`Move ${moveUpVal} Upwards`}
        </div>
        <input
          type="number"
          className="text-black text-center w-10 mx-2"
          value={moveUpVal}
          onChange={(e) => {
            setMoveUpVal(parseInt(e.target.value));
          }}
        />
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap bg-blue-500 mb-5">
        <div
          className="flex items-center justify-center flex-row flex-nowrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => {
            dispatch(moveImageDown({ yValue: moveDownVal }));
          }}
        >
          {`Move ${moveDownVal} Downwards`}
        </div>
        <input
          type="number"
          className="text-black text-center w-10 mx-2"
          value={moveDownVal}
          onChange={(e) => {
            setMoveDownVal(parseInt(e.target.value));
          }}
        />
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap bg-blue-500 mb-5">
        <div
          className="flex items-center justify-center flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => {
            dispatch(rotateLeft({ rotateValue: moveDegreeLeft }));
          }}
        >
          {`Turn ${moveDegreeLeft} degree`}
          <Icon name="undo" size={15} className="text-white mx-2" />
        </div>
        <input
          type="number"
          className="text-black text-center w-10 mx-2"
          value={moveDegreeLeft}
          onChange={(e) => {
            setMoveDegreeLeft(parseInt(e.target.value));
          }}
        />
      </div>

      <div className="flex items-center justify-center flex-row flex-wrap bg-blue-500 mb-5">
        <div
          className="flex items-center justify-center flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={(e) => {
            dispatch(rotateRight({ rotateValue: moveDegreeRight }));
          }}
        >
          {`Turn ${moveDegreeRight} degree`}
          <Icon name="redo" size={15} className="text-white mx-2" />
        </div>
        <input
          type="number"
          className="text-black text-center w-10 mx-2"
          value={moveDegreeRight}
          onChange={(e) => {
            setMoveDegreeRight(parseInt(e.target.value));
          }}
        />
      </div>

      <div
        className="flex items-center justify-center flex-row flex-wrap bg-blue-500 text-white px-20 py-2 mb-5 text-sm cursor-pointer"
        onClick={() => {
          dispatch(resetPositions());
        }}
      >
        Reset
      </div>

      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
    </div>
  );
}
