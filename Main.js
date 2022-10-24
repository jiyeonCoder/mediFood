import React from "react";
import styled from "styled-components";

import FoodCard from "./components/FoodCard";

const Main = (props) => {
  const foodList = props.list;
  return (
    <div>
      <button>Foods</button>
      <div>
        {foodList.map((list, i) => {
          return <p>{list}</p>;
        })}
      </div>
      <FoodCard />
    </div>
  );
};

export default Main;
