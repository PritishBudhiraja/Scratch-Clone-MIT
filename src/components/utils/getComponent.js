import React from "react";
import Hide from "../sidebarComponents/looksComponents/Hide";
import HideThinkCloudComponent from "../sidebarComponents/looksComponents/HideThinkCloudComponent";
import Show from "../sidebarComponents/looksComponents/Show";
import Size from "../sidebarComponents/looksComponents/Size";
import ThinkCloudComponent from "../sidebarComponents/looksComponents/ThinkCloudComponent";
import ThinkCloudWithTimer from "../sidebarComponents/looksComponents/ThinkCloudWithTimer";
import MoveDown from "../sidebarComponents/motionComponents/MoveDown";
import MoveLeft from "../sidebarComponents/motionComponents/MoveLeft";
import MoveRight from "../sidebarComponents/motionComponents/MoveRight";
import MoveUp from "../sidebarComponents/motionComponents/MoveUp";
import Reset from "../sidebarComponents/motionComponents/Reset";
import RotateLeft from "../sidebarComponents/motionComponents/RotateLeft";
import RotateRight from "../sidebarComponents/motionComponents/RotateRight";

export const getComponent = (componentName, id) => {
  switch (componentName) {
    /*
     ? Motion Components
     */
    case "MOVEUP":
      return <MoveUp id={id} />;
    case "MOVEDOWN":
      return <MoveDown id={id} />;
    case "MOVELEFT":
      return <MoveLeft id={id} />;
    case "MOVERIGHT":
      return <MoveRight id={id} />;
    case "ROTATELEFT":
      return <RotateLeft id={id} />;
    case "ROTATERIGHT":
      return <RotateRight id={id} />;
    case "RESET":
      return <Reset />;

    /*
     ? Looks Components
     */

    case "SHOW":
      return <Show />;
    case "HIDE":
      return <Hide />;
    case "SIZE":
      return <Size id={id} />;
    case "THINK_CLOUD":
      return <ThinkCloudComponent id={id} />;
    case "HIDE_THINK_CLOUD":
      return <HideThinkCloudComponent />;
    case "THINK_WITH_TIMER":
      return <ThinkCloudWithTimer id={id} />;

    /*
     ? Default Case
     */

    default:
      return React.null;
  }
};
