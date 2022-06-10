import React from 'react'
import classes from './Cell.module.css'

const Cell = (props) => {
  return (
	<button className={classes.cell} onClick={props.onClick}>
		{props.value}
	</button>
  )
}

export default Cell