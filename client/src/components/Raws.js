import React from "react";

import Raw from "./Raw";

const Raws = (props) => {
  return (
    <table className={"game-space"}>
      <tbody>
        <Raw id={10} combination={props.combination} />
        <Raw id={9} combination={props.combination} />
        <Raw id={8} combination={props.combination} />
        <Raw id={7} combination={props.combination} />
        <Raw id={6} combination={props.combination} />
        <Raw id={5} combination={props.combination} />
        <Raw id={4} combination={props.combination} />
        <Raw id={3} combination={props.combination} />
        <Raw id={2} combination={props.combination} />
        <Raw id={1} combination={props.combination} />
      </tbody>
    </table>
  );
};

export default Raws;
