import { useState } from "react";
import classes from './store.module.css'

import { IconSwitch } from './components/IconSwitch'
import CardsView from './components/CardsView/CardsView';
import { ListView } from './components/ListView'


export const Store = () => {
  const [iconCards, setIcon] = useState(true);


  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "src/assets/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "src/assets/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "src/assets/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "src/assets/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "src/assets/5.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "src/assets/6.jpg"
  }];
  return (
    <div className={classes["main"]}>
    <IconSwitch icon={`${iconCards ? "view_list" : "view_module"}`} onSwitch={() => {setIcon(!iconCards)}}/>
    {iconCards && <CardsView cards={products}/>}
    {!iconCards && <ListView cards={products}/>}
    </div>
  )
}
