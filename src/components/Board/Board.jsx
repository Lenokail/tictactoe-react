import React from 'react'
import Cell from '../Сell/Cell'
import classes from './Board.module.css'

const Board = ({board, click}) => {


	return (
	<div className={classes.board}>
		{
			board.map((cell, i) => (
				<Cell key={i} value={cell} onClick={() => click(i)}/>
			))
		}
	</div>
  )
}

export default Board