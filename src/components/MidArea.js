import { Button } from "@material-ui/core";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  hideCatsprite,
  setIsThinkCloudNotVisible,
  setIsThinkCloudVisible,
  setSizeOfCatsprite,
  setThinkCloudMessage,
  showCatsprite,
} from "../actions/looksActions";
import { addNewStack } from "../actions/midAreaActions";
import {
  moveImageDown,
  moveImageLeft,
  moveImageRight,
  moveImageUp,
  resetPositions,
  rotateLeft,
  rotateRight,
} from "../actions/motionAction";
import { getComponent } from "./utils/getComponent";

export default function MidArea() {
  const { stackOfEvents, isThinkCloudVisible } = useSelector((state) => {
    return {
      stackOfEvents: state.midAreaReducer.stackOfEvents,
      isThinkCloudVisible: state.looksReducer.isThinkCloudVisible,
    };
  });
  const dispatch = useDispatch();

  const customDispatcherMapper = {
    /**
     * * Motions Action Dispatcher
     */
    MOVEUP: (val) => dispatch(moveImageUp({ yValue: parseInt(val) })),
    MOVEDOWN: (val) => dispatch(moveImageDown({ yValue: parseInt(val) })),
    MOVELEFT: (val) => dispatch(moveImageLeft({ xValue: parseInt(val) })),
    MOVERIGHT: (val) => dispatch(moveImageRight({ xValue: parseInt(val) })),
    ROTATELEFT: (val) => dispatch(rotateLeft({ rotateValue: parseInt(val) })),
    ROTATERIGHT: (val) => dispatch(rotateRight({ rotateValue: parseInt(val) })),
    RESET: () => dispatch(resetPositions()),

    /**
     * * Looks Action Dispatcher
     */
    SHOW: () => dispatch(showCatsprite()),
    HIDE: () => dispatch(hideCatsprite()),
    SIZE: (val) => dispatch(setSizeOfCatsprite(parseInt(val))),
    THINK_CLOUD: (val) => {
      !isThinkCloudVisible && dispatch(setIsThinkCloudVisible());
      dispatch(setThinkCloudMessage(val));
    },
    HIDE_THINK_CLOUD: () => dispatch(setIsThinkCloudNotVisible()),
    THINK_WITH_TIMER: (message, timer) => {
      !isThinkCloudVisible && dispatch(setIsThinkCloudVisible());
      dispatch(setThinkCloudMessage(message));
      setTimeout(() => {
        dispatch(setIsThinkCloudNotVisible());
      }, Number(timer) * 1000);
    },
  };

  const handleRun = (listOfComponets, stackNumber) => {
    listOfComponets.forEach(async (component) => {
      if (component === "THINK_WITH_TIMER") {
        let userInputMessage = document.getElementById(
          `MIDAREA-${component}-${stackNumber}-MESSAGE`
        );
        let userInputTimer = document.getElementById(
          `MIDAREA-${component}-${stackNumber}-TIMER`
        );
        await customDispatcherMapper[component](
          userInputMessage?.value,
          userInputTimer?.value
        );
      } else {
        let userInput = document.getElementById(
          `MIDAREA-${component}-${stackNumber}`
        );
        await customDispatcherMapper[component](userInput?.value);
      }
    });
  };

  const addStack = () => {
    dispatch(addNewStack());
  };

  return (
    <div className="flex-1 h-full overflow-auto">
      <div className="flex items-center justify-between m-3">
        <div className="font-bold rounded text-black-400 p-2">Mid Area</div>
        <Button variant="outlined" color="primary" onClick={() => addStack()}>
          Add Stack
        </Button>
      </div>
      {stackOfEvents?.map((stack, index) => (
        <div
          className="w-80 border border-2 border-gray-300 p-2 justify-center items-center m-3"
          key={index}
        >
          <Button
            variant="outlined"
            color="secondary"
            style={{
              marginBottom: 7,
            }}
            onClick={() => handleRun(stack?.actionLists, index)}
          >
            RUN
          </Button>
          <div
            className="w-75 border border-2 border-gray-300 p-2"
            style={{
              backgroundColor: "rgb(228 228 231)",
            }}
          >
            <Droppable droppableId={`${stack?.id}`}>
              {(provided) => {
                return (
                  <div
                    className="flex grow text-black-400 p-2"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <div>
                      {stack?.actionLists?.map((actionComponent, i) => (
                        <Draggable
                          key={`${actionComponent}-${stack.id}-${index}`}
                          draggableId={`MIDAREA-${actionComponent}`}
                          index={i}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {getComponent(
                                actionComponent,
                                `MIDAREA-${actionComponent}-${index}`
                              )}
                              {provided.placeholder}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        </div>
      ))}
    </div>
  );
}
