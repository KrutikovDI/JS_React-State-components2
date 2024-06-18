import classes from './iconSwitch.module.css'

export const IconSwitch = (props) => {
    const  { icon, onSwitch } = props
  return (
  <>
    <div className={classes['icon-field']}>{icon == "view_list"? <img onClick={onSwitch} src="src\assets\view_list.png" className={classes["icon"]}/>:<img onClick={onSwitch} src="src\assets\view_module.png" className={classes["icon"]}/>}</div>
  </>
  )
}
