import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MoonImage = styled.div`
  position: absolute;
  top: 0; /* 상단에 배치 */
  right: 0; /* 오른쪽에 배치 */
  /* height: 100vh; 높이를 원하는 값으로 조절 */
  z-index: -1000;
  cursor: pointer;
`;

function Moon() {
  return (
    <Link to="/about">
      <MoonImage>
        <img src="/moon.png" alt="Moon" style={{ width: "100%" }} />
      </MoonImage>
    </Link>
  );
}

export default Moon;
