import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsThinkCloudNotVisible } from "../../../actions/looksActions";

function HideThinkCloudComponent() {
  const { isCatspriteVisible, isThinkCloudVisible } = useSelector((state) => {
    return {
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
      isThinkCloudVisible: state.looksReducer.isThinkCloudVisible,
    };
  });
  const dispatch = useDispatch();
  return (
    <div
      className="flex bg-yellow-500 text-white px-2 py-2 mb-5 text-sm cursor-pointer whitespace-nowrap"
      onClick={() => {
        if (isCatspriteVisible) {
          if (isThinkCloudVisible) dispatch(setIsThinkCloudNotVisible());
        }
      }}
    >
      {"Hide Think Cloud"}
    </div>
  );
}

export default HideThinkCloudComponent;
