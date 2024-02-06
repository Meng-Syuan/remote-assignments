import React, { useState } from "react";

const Title = () => {
  const [message, setMessage] = useState("Welcome Message");
  const handleClick = () => {
    setMessage("Have a Good Time!");
  };
  return (
    <>
      {" "}
      <h1 onClick={handleClick}>{message}</h1>
      <h2>Section Title</h2>
    </>
  );
};

export default Title;
