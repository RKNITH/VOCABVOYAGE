import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        // border: "1px solid blue",
        background: "#1E3A8A",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#fff", fontSize: "30px", fontFamily: "sans-serif" }}>
        VocabVoyage
      </h2>
    </div>
  );
};

export default Navbar;
