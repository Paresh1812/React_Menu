import React from "react";
import Menu from "./Menu.js";
import Card from "./Card.jsx";
import { useState } from "react";
import Navbar from "./Navbar.jsx";

const uniqueList = [
    
  "All",
  ...new Set(
    Menu.map((cur_ele) => {
      console.log(cur_ele.category)
      return cur_ele.category;
    })
  ),
];

// console.log(uniqueList);

function Resturant() {
  const [MenuData, setMenuData] = useState(Menu);
  const [UniqueList]  = useState(uniqueList)

  const filterItem = (category) => {

    if (category === 'All') {
        setMenuData(Menu);
        return
    }

    const UpdataedList = Menu.filter((curele) => {
      return curele.category === category;
    });
    setMenuData(UpdataedList);
  };

  return (
    <>
      <Navbar FilterItem={filterItem} ul={UniqueList}/>
      <Card menudata={MenuData} />
    </>
  );
}

export default Resturant;
