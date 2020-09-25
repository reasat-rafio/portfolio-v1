import React from "react";

const Backdrop = ({ setMbl_menu }) => {
  return (
    <div
      onClick={() => setMbl_menu((prevMenu) => (prevMenu = !prevMenu))}
      className="backdrop"
    />
  );
};

export default Backdrop;
