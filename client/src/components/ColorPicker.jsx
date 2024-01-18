import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  const handleColorChange = (color) => {
    console.log("Color changed:", color.hex);
    state.color = color.hex;
  };

  console.log("Current color in state:", snap.color);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
