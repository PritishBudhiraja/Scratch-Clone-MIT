import React from "react";
import { useDispatch } from "react-redux";
import {
  moveImageDown,
  moveImageLeft,
  moveImageRight,
  moveImageUp,
  rotateLeft,
} from "../../../actions/motionAction";

function OnKeyEvent() {
  const dispatch = useDispatch();
  document.body.onkeyup = function (e) {
    if (e.code == "Space") {
      dispatch(rotateLeft({ rotateValue: 10 }));
    } else if (e.code == "KeyW") {
      dispatch(moveImageUp({ yValue: 10 }));
    } else if (e.code == "KeyA") {
      dispatch(moveImageLeft({ xValue: 10 }));
    } else if (e.code == "KeyD") {
      dispatch(moveImageRight({ xValue: 10 }));
    } else if (e.code == "KeyX") {
      dispatch(moveImageDown({ yValue: 10 }));
    }
  };

  return <></>;
}

export default OnKeyEvent;
