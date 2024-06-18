import classes from './shopCard.module.css'

export const ShopCard = (props) => {
    const { name, price, color, img } = props.cards;
  return (
    <div className={classes["card"]}> 
        <h3 className={classes["h3"]}>{name}</h3>
        <p className={classes["p"]}>{color}</p>
        <img className={classes["img"]} src={img}/>
        <div className={classes["price-field"]}>
            <div className={classes["price"]}>{`$${price}`}</div>
            <button className={classes["btn"]}>ADD TO CART</button>
        </div>
    </div>
  )
}
