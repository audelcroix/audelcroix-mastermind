import React, { Fragment, useState } from "react";

const Rules = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className='rules'>
      {showRules ? (
        <Fragment>
          <p
            className='rules-command'
            onClick={() => {
              setShowRules(false);
            }}
          >
            Hide rules
          </p>

          <p className='rule-item'>
            The goal is to decode a random combination of 4 colors.
          </p>

          <p className='rule-item'>
            Click on a color in the selection board to select it, then click on
            a ball in the active raw to place the color.
          </p>

          <p className='rule-item'>Validate when you are sure.</p>

          <p className='rule-item'>
            The position of the colored dot in the result panel is NOT defined
            by its actual position in the combination.
          </p>

          <p className='rule-item'>
            A red dot indicates a correctly positionned color anywhere in the
            combination.
          </p>

          <p className='rule-item'>
            A white dot indicates a color present anywhere in the combination
            but not correctly placed.
          </p>
        </Fragment>
      ) : (
        <p
          className='rules-command'
          onClick={() => {
            setShowRules(true);
          }}
        >
          Show rules
        </p>
      )}
    </div>
  );
};

export default Rules;
