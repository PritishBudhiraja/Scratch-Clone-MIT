import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateMotionOrder } from "./actions/motionAction";
import { updateExistingList } from "./actions/midAreaActions";
import { updateLooksOrder } from "./actions/looksActions";

export default function App() {
  const { motionsStateSequence, stackOfEvents, looksStateSequence } =
    useSelector((state) => {
      return {
        motionsStateSequence: state.motionReducer.motionsStateSequence,
        stackOfEvents: state.midAreaReducer.stackOfEvents,
        looksStateSequence: state.looksReducer.looksStateSequence,
      };
    });

  const dragHandler = (result) => {
    console.log("Draggable Result Object", result);
    const { draggableId, source, destination } = result;
    const [screenDivision, id] = draggableId?.split("-");
    console.log("Screen Division - ", screenDivision, ", ID - ", id);
    if (source?.droppableId === destination?.droppableId) {
      if (!destination) return;
      if (
        source.droppableId === destination.droppableId &&
        destination.index === source.index
      )
        return;
      if (
        screenDivision === "SIDEBAR" &&
        [
          "MOVEUP",
          "MOVEDOWN",
          "MOVELEFT",
          "MOVERIGHT",
          "ROTATELEFT",
          "ROTATERIGHT",
          "RESET",
        ].includes(id)
      ) {
        const duplicateMotionOrder = [...motionsStateSequence];
        const fromIndex = duplicateMotionOrder.indexOf(id);
        const element = duplicateMotionOrder.splice(fromIndex, 1)[0];
        duplicateMotionOrder.splice(destination.index, 0, element);
        dispatch(
          updateMotionOrder({
            motionsStateSequence: duplicateMotionOrder,
          })
        );
      }

      if (
        screenDivision === "SIDEBAR" &&
        [
          "SHOW",
          "HIDE",
          "SIZE",
          "THINK_CLOUD",
          "HIDE_THINK_CLOUD",
          "THINK_WITH_TIMER",
        ].includes(id)
      ) {
        const duplicateLooksOrder = [...looksStateSequence];
        const fromIndex = duplicateLooksOrder.indexOf(id);
        const element = duplicateLooksOrder.splice(fromIndex, 1)[0];
        duplicateLooksOrder.splice(destination.index, 0, element);
        dispatch(
          updateLooksOrder({
            looksStateSequence: duplicateLooksOrder,
          })
        );
      }

      if (screenDivision === "MIDAREA") {
        const actionLists = stackOfEvents[destination.droppableId].actionLists;
        const fromIndex = actionLists.indexOf(id);
        if (fromIndex > -1) {
          const element = actionLists.splice(fromIndex, 1)[0];
          actionLists.splice(destination.index, 0, element);
          dispatch(
            updateExistingList({
              newActionList: [...actionLists],
              indexToBeChanged: Number(destination.droppableId),
            })
          );
        }
      }
    } else {
      const actionLists = stackOfEvents[destination.droppableId].actionLists;
      const fromIndex = actionLists.indexOf(id);
      if (fromIndex > -1) {
        const element = actionLists.splice(fromIndex, 1)[0];
        actionLists.splice(source.index, 0, element);
        dispatch(
          updateExistingList({
            newActionList: [...actionLists],
            indexToBeChanged: Number(destination.droppableId),
          })
        );
      } else {
        actionLists.splice(destination.index, 0, id);
        dispatch(
          updateExistingList({
            newActionList: [...actionLists],
            indexToBeChanged: Number(destination.droppableId),
          })
        );
      }
    }
  };

  const dispatch = useDispatch();
  return (
    <div className="h-screen overflow-hidden bg-blue-100 flex flex-row pt-6">
      <DragDropContext onDragEnd={dragHandler}>
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar />
          <MidArea />
        </div>
      </DragDropContext>
      <div className="w-1/3 relative h-screen overflow-scroll flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
        <PreviewArea />
      </div>
    </div>
  );
}
