import React, { useState, useEffect } from "react";

import Title from "./Title";
import Contents from "./Contents";
import ActionBtn from "./ActionBtn";

const Main = () => {
  //製作 content box 的 id
  const [boxNumber, setBoxNumber] = useState(4);
  const [contentsIdArr, setContentsIdArr] = useState([1, 2, 3, 4]);
  useEffect(() => {
    setContentsIdArr(handleBoxNumber(boxNumber));
  }, [boxNumber]);
  const handleBoxNumber = (boxNumber) => {
    const newContentArr = [];
    for (let i = 1; i <= boxNumber; i++) {
      newContentArr.push(i);
    }
    return newContentArr;
  };

  const displayMoreContents = () => {
    setBoxNumber(boxNumber + 4);
  };

  return (
    <main>
      <Title />
      <div className="container">
        {contentsIdArr.map((id) => (
          <Contents key={id} number={id} />
        ))}
      </div>
      <ActionBtn action={displayMoreContents} />
    </main>
  );
};

export default Main;
