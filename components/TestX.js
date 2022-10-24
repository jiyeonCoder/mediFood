import React from "react";
import styled from "styled-components";

import img from "../banana.jpg";

const TestX = (props) => {
  return (
    <img
      src={img}
      style={{
        width: "30vw",
        margin: "16px",
      }}
    />
  );
};

export default TestX;
