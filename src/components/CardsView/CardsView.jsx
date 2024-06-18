import classes from "./cardsView.module.css"

import { ShopCard } from '../ShopCard'

const CardsView = (props) => {
  const { cards } = props
  return (
    <div className={classes['field-cards']}>
      {cards.map((c, i) => (
        <li className={classes["li"]} key={i}>{<ShopCard cards={c}/>}</li>
      ))}
    </div>
  )
}

export default CardsView
