import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import { calculateWinner } from '../../helper'
import Board from './Board'
import './GameStyle.css'


const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
}
//immutable không thể thay đổi
//[...arr] [...obj]
//deep copy JSON.parse(JSON.stringfy(obj))
const gameReducer = (state, action) => {
    switch (action.type) {
        case 'CLICK': {
            const { board, xIsNext } = state
            const { index, winner } = action.payload
            if (winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state))
            console.log("gameReducer ~ nextState", nextState);
            nextState.board[index] = xIsNext ? 'X' : 'O'
            nextState.xIsNext = !xIsNext
            return nextState
        }

        case 'RESET': {
            const nextState = JSON.parse(JSON.stringify(state))
            nextState.board = Array(9).fill(null)
            nextState.xIsNext = true
            return nextState
        }

        default:
            console.log('Error');
            break;
    }
    return state
}

const Game = () => {

    const [state, dispatch] = useReducer(gameReducer, initialState)
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(state.board)

    const handleClick = (index) => {
        // const boardCopy = [...board];
        // if (winner || boardCopy[index]) return;
        dispatch({
            type: 'CLICK',
            payload: {
                index,
                winner,
            }
        })
        // boardCopy[index] = xIsNext ? 'X' : 'O';
        // console.log(boardCopy[index]);
        // setBoard(boardCopy);
        // setXIsNext((xIsNext) => !xIsNext);
    }

    const hanleResetGame = () => {
        // setBoard(Array(9).fill(null));
        // setXIsNext(true);
        dispatch({
            type: 'RESET',
        })
    }
    return (
        <div>
            <Board cells={state.board} onClick={handleClick} />
            <div className='game-winner'>
                {winner ? `Winner is ${xIsNext ? 'O' : 'X'}` : ""}
            </div>

            <button className='game-reset' onClick={hanleResetGame}>Reset Game</button>
        </div>
    )
}

export default Game