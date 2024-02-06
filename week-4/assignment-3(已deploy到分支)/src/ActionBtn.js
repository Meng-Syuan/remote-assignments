import React from "react";

const ActionBtn = ({ action }) => {
  return (
    <>
      <button id="action" onClick={action}>
        Call to Action
      </button>
    </>
  );
};

export default ActionBtn;
