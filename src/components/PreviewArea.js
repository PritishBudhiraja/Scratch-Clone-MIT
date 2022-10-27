import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import CatSprite from "../assests/CatSprite.svg";
import { dragImageInPreview } from "./../actions/motionAction";
import { throttle } from "lodash";
import Icon from "./Icon";

const useStyles = (props) =>
  makeStyles(() => ({
    previewParent: {
      width: "100%",
      height: "100%",
      position: "relative",
      backgroundColor: "#87CEEB",
    },
    imageStyles: {
      width: "100%",
      height: "100%",
      display: props.isCatspriteVisible ? "inherit" : "none",
      transform: `scale(${1 + props.sizeOfCatspirit / 100})`,
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
  const {
    xValue,
    yValue,
    rotateValue,
    isCatspriteVisible,
    sizeOfCatspirit,
    isThinkCloudVisible,
    thinkCloudMessage,
  } = useSelector((state) => {
    return {
      xValue: state.motionReducer.xValue,
      yValue: state.motionReducer.yValue,
      rotateValue: state.motionReducer.rotateValue,
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
      sizeOfCatspirit: state.looksReducer.size,
      isThinkCloudVisible: state.looksReducer.isThinkCloudVisible,
      thinkCloudMessage: state.looksReducer.thinkCloudMessage,
    };
  });

  const dispatch = useDispatch();
  const classes = useStyles({
    xValue,
    yValue,
    rotateValue,
    isCatspriteVisible,
    sizeOfCatspirit,
  })();

  let pos1 = 0,
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

  const throttledFunc = throttle((e, id) => dragMouseDown(e, id), 2000);

  const myRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (isThinkCloudVisible) {
      myRef.current.style.position = "relative";
      textRef.current.style.position = "absolute";
      textRef.current.style.top = "40px";
      textRef.current.style.left = "20px";
      textRef.current.style.width = "70%";
      textRef.current.style.wordWrap = "break-word";
    }
  }, [myRef, textRef, isThinkCloudVisible]);

  return (
    <div className={classes.previewParent}>
      <div className="font-bold mb-5 rounded text-black-400 p-2">
        Preview Area
      </div>
      <div
        id="container-div"
        className={classes.catSpriteMovementStyles}
        onMouseDown={(e) => throttledFunc(e, "container-div")}
      >
        {isThinkCloudVisible && (
          <div style={{ position: "relative" }}>
            <Icon
              name="cloud"
              size={100}
              className="text-white"
              innerRef={myRef}
            />
            <div ref={textRef}>{thinkCloudMessage}</div>
          </div>
        )}
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
