import React, { useContext } from "react";
import ColorContext from "../context/colorContext";

const DevCombi = (props) => {
  const combi = props.combi;
  const colorContext = useContext(ColorContext);

  const { color } = colorContext;

  return (
    <div>
      <hr />
      <h3>Combi dev</h3>

      {combi.map((color, index) => (
        <p key={index}>{color}</p>
      ))}
      <hr />
    </div>
  );
};

export default DevCombi;
