import React, { memo } from "react";

const Contents = ({ number }) => {
  return (
    <>
      {" "}
      <div className="content" id={number}>
        Content Box {number}
      </div>
    </>
  );
};

const ContentsPropsAreEqual = (prevProps, nextProps) => {
  return prevProps.number === nextProps.number;
};

export default memo(Contents, ContentsPropsAreEqual);
