import React from "react";
import { useSelector } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./utils/getComponent";

export default function Sidebar() {
  const {
    xValue,
    yValue,
    rotateValue,
    motionsStateSequence,
    isCatspriteVisible,
    sizeOfCatSpirit,
    looksStateSequence,
  } = useSelector((state) => {
    return {
      xValue: state.motionReducer.xValue,
      yValue: state.motionReducer.yValue,
      rotateValue: state.motionReducer.rotateValue,
      motionsStateSequence: state.motionReducer.motionsStateSequence,
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
      sizeOfCatSpirit: state.looksReducer.size,
      looksStateSequence: state.looksReducer.looksStateSequence,
    };
  });

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
          Show : {isCatspriteVisible ? "It's Visible" : "Oh It's Hidden"}
        </div>
        <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm">
          Scaled Percentage : {sizeOfCatSpirit / 100}%
        </div>
        <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm">
          Size (h*w) :{" "}
          {`${(sizeOfCatSpirit / 100) * 100 + 100} * ${
            (sizeOfCatSpirit / 95) * 95 + 95
          }`}
        </div>
      </div>
      <div className="font-bold mb-5"> {"Motion"} </div>
      <Droppable droppableId={"SIDEBAR-MOTIONS"}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {motionsStateSequence?.map((componentName, index) => {
              return (
                <Draggable
                  key={`${index}-side-bar-motions-tab`}
                  draggableId={`SIDEBAR-${componentName}`}
                  index={index}
                >
                  {(provided) => {
                    return (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {getComponent(componentName)}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
      <div className="font-bold"> {"Looks"} </div>

      <Droppable droppableId={"SIDEBAR-LOOKS"}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {looksStateSequence?.map((componentName, index) => {
              return (
                <Draggable
                  key={`SIDEBAR-LOOKS-${componentName}-${index}`}
                  draggableId={`SIDEBAR-${componentName}`}
                  index={index}
                >
                  {(provided) => {
                    return (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {getComponent(componentName)}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
    </div>
  );
}
