import { List } from "@mui/material";
import React from "react";
import styled from "styled-components";

import FoodCard from "./components/FoodCard";
import TestX from "./components/TestX";

const Main = (props) => {
  const foodList = props.list;
  return (
    <div>
      <button>Foods</button>
      <ListStyle>
        {foodList.map((list, i) => {
          //console.log(i);
          return (
            <FoodCard />
            // <ListStyle>
            //   <FoodCard fruitName={list} style={{ flex: 1 }} />
            // </ListStyle>
          );
        })}
      </ListStyle>
    </div>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default Main;
