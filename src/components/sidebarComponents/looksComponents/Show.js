import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showCatsprite } from "../../../actions/looksActions";

function Show() {
  const { isCatspriteVisible } = useSelector((state) => {
    return {
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
    };
  });
  const dispatch = useDispatch();
  return (
    <div
      className="flex items-center flex-row flex-wrap bg-yellow-500 text-white px-20 py-2 mb-5 text-sm cursor-pointer text-center mt-2"
      onClick={() => {
        dispatch(showCatsprite());
      }}
    >
      Show
    </div>
  );
}

export default Show;
