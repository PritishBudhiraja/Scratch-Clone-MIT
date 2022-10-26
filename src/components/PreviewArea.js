import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import CatSprite from "../assests/CatSprite.svg";
import { dragImageInPreview } from "./../actions/motionAction";

const useStyles = (props) =>
  makeStyles(() => ({
    previewParent: {
      width: "100%",
      height: "100%",
      position: "relative",
    },
    imageStyles: {
      width: "100%",
      height: "100%",
    },
    catSpriteMovementStyles: {
      position: "absolute",
      left: `${props.xValue}px`,
      top: `${props.yValue}px`,
      transform: `rotate(${props.rotateValue}deg)`,
      width: "100px",
      height: "100px",
    },
  }));

const Canvas = () => {
  const { xValue, yValue, rotateValue } = useSelector((state) => {
    return {
      xValue: state.motionReducer.xValue,
      yValue: state.motionReducer.yValue,
      rotateValue: state.motionReducer.rotateValue,
    };
  });
  const dispatch = useDispatch();
  const classes = useStyles({ xValue, yValue, rotateValue })();

  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  let divContainerElement = null;
  function dragMouseDown(e, id) {
    divContainerElement = document.getElementById(id);
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    /*
     * Calculating the positions of every coordinate relative to the preview window.
     */
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let calculatedXValue = divContainerElement.offsetLeft - pos1;
    let calculatedYValue = divContainerElement.offsetTop - pos2;
    if (
      calculatedXValue >= 10 &&
      calculatedXValue <= 550 &&
      calculatedYValue >= 40 &&
      calculatedYValue <= 750
    ) {
      dispatch(
        dragImageInPreview({
          xValue: calculatedXValue,
          yValue: calculatedYValue,
        })
      );
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return (
    <div className={classes.previewParent}>
      <div className="font-bold mb-5 w-1/4 text-center rounded text-black-400 p-2">
        Preview Area
      </div>
      <div
        id="container-div"
        className={classes.catSpriteMovementStyles}
        onMouseDown={(e) => dragMouseDown(e, "container-div")}
      >
        <img
          id="CatSprite"
          src={CatSprite}
          alt="CatSprite"
          className={classes.imageStyles}
        />
      </div>
    </div>
  );
};

export default Canvas;
