import classes from './shopItem.module.css'

export const ShopItem = (props) => {
  const { name, price, color, img } = props.cards
  return (
    <div className={classes['field-item']}>
      <img className={classes['img']} src={img}/>
      <div className={classes['name']}>{name}</div>
      <div className={classes['color']}>{color}</div>
      <div className={classes['price']}>{`$${price}`}</div>
      <button className={classes['btn']}>ADD TO CART</button>
    </div>
  )
}
