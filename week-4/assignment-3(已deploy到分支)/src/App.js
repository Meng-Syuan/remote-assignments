import React from "react";

import Header from "./Header";
import Main from "./Main";

function App() {
  const boxes = document.querySelectorAll(".content");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].id = i + 1;
    boxes[i].insertAdjacentText("beforeend", boxes[i].id);
  }
  return (
    <>
      {" "}
      <Header />
      <Main />
    </>
  );
}

export default App;
