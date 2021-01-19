import React, { useContext } from "react";
import colorTranslator from "../utils/colorTranslator";
import ColorContext from "../context/colorContext";

const ColorControl = (props) => {
  const colorContext = useContext(ColorContext);

  const { setColor } = colorContext;
  const colors = props.colors;

  const handleClickColor = (event) => {
    setColor(event.target.id);
  };

  return (
    <div className={"control-panel"}>
      <div className={"center"}>
        {colors.map((color, index) => (
          <button
            key={index}
            id={color}
            onClick={handleClickColor}
            className={"control-circle"}
            style={{
              background: `radial-gradient(circle at 23px 23px, ${colorTranslator(
                color
              )}, #000)`,
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorControl;
