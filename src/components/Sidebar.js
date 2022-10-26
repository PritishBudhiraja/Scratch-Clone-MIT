import React from "react";
import { useSelector } from "react-redux";
import Icon from "./Icon";

export default function Sidebar() {
  const { xValue, yValue, rotateValue } = useSelector((state) => {
    return {
      xValue: state.motionReducer.xValue,
      yValue: state.motionReducer.yValue,
      rotateValue: state.motionReducer.rotateValue,
    };
  });
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
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
      </div>
      <div className="font-bold"> {"Motion"} </div>

      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Move 10 steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Move 10 steps"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change x by 10"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Change y by 10"}
      </div>
      <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Set y to 4"}
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
