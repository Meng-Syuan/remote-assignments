import React, { useState } from "react";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle((prevState) => !prevState);
  };

  return (
    <header>
      <div id="logo">Website Title / Logo</div>
      <button id="menu-btn" onClick={handleClick}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav className={isToggle ? "toggle" : null}>
        <button id="close-btn" onClick={handleClick}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
