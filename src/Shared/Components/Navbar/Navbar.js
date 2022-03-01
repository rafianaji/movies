import React from "react";
import RebelWorks from "../../Assets/RebelWorks.svg";

export default function Navbar() {
  return (
    <a
      className="fluid"
      style={{ position: "absolute", top: 0, zIndex: 10, marginTop: "0.5em" }}
      onClick={() => {
        window.location.replace("/");
      }}
    >
      <img src={RebelWorks} style={{ width: 30, height: 30 }} />
    </a>
  );
}
