import React from 'react'
import { useState } from 'react'
import { calculateWinner } from '../../helper'
import Board from './Board'
import './GameStyle.css'

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board)
    
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        console.log(boardCopy[index]);
        setBoard(boardCopy);
        setXIsNext((xIsNext) => !xIsNext);
    }

    const hanleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    }
    return (
        <div>
            <Board cells={board} onClick={handleClick} />
            <div className='game-winner'>
                {winner ? `Winner is ${xIsNext ? 'O' : 'X'}` : ""}
            </div>

            <button className='game-reset' onClick={hanleResetGame}>Reset Game</button>
        </div>
    )
}

export default Game