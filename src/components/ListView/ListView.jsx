import { ShopItem } from '../ShopItem'
import classes from './listView.module.css'

export const ListView = (props) => {
  const { cards } = props;
  return (
    <div className={classes['field-cards']}>
    {cards.map((c, i) => (
      <li className={classes["li"]} key={i}>{<ShopItem cards={c}/>}</li>
    ))}
  </div>
  )
}
