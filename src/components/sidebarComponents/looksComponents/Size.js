import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSizeOfCatsprite } from "../../../actions/looksActions";

function Size({ id }) {
  const [scalePercentage, setScalePercentage] = useState(1);
  const { isCatspriteVisible } = useSelector((state) => {
    return {
      isCatspriteVisible: state.looksReducer.isCatspriteVisible,
    };
  });
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between flex-row flex-wrap bg-yellow-500 mb-5">
      <div
        className="flex items-center justify-between flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={() => {
          if (isCatspriteVisible) dispatch(setSizeOfCatsprite(scalePercentage));
        }}
      >
        {`Scale - ${scalePercentage}%`}
      </div>
      <input
        id={id}
        type="number"
        className="text-black text-center w-10 mx-2"
        value={scalePercentage}
        onChange={(e) => {
          setScalePercentage(parseInt(e.target.value));
        }}
      />
    </div>
  );
}

export default Size;
