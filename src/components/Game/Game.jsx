import React, { useState } from 'react'
import Board from '../Board/Board'

import { calculateWinner } from '../../helper/calculateWinner'

import classes from './Game.module.css'
import Button from '../Button/Button'

const Game = () => {

	const [board, setBoard] = useState(Array(9).fill(null))
	const [xIsNext, setXIsNext] = useState(true)
	const winner = calculateWinner(board)

	const click = (index) => {
		const boardCopy = [...board]

		if (winner || boardCopy[index]) 
			return

		boardCopy[index] = xIsNext ? 'X' : 'O'

		setBoard(boardCopy)
		setXIsNext(!xIsNext)
	}

	const clearBoard = () => {
		setBoard(Array(9).fill(null))
	}

	const whoseMove = () => {
		return (
			<span className={classes.rezult}>
				{
					winner === 'Ничья'? 
					'Ничья' 
					:
					(winner) ?
					`Победил: ${winner}`
					:
					`Сейчас ходит: ${xIsNext ? 'X' : 'O'}`
				}
			</span>
		)
	}

	return (
	<div className={classes.game}>
		<Button onClick={clearBoard} style={{marginBottom: 20}}>Очистить доску</Button>
		<Board board={board} click={click}/>
		{ whoseMove() }
	</div>
  )
}

export default Game