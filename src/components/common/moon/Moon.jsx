import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MoonImage = styled.div`
  /* transform: translate(50%, 50%); */
  position: absolute;
  top: 0;
  right: 0;

  z-index: -1000;
  cursor: pointer;
`;

function Moon() {
  return (
    <Link to="/about">
      <MoonImage style={{ width: "30%" }}>
        <img src="/moon.png" alt="Moon" style={{ width: "100%" }} />
      </MoonImage>
    </Link>
  );
}

export default Moon;
