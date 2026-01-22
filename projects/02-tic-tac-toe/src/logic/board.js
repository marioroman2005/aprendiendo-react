import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras 
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if(
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] && // 0 y 3 -> x -> x u o
        boardToCheck[a] === boardToCheck[c] // si para todas las posiciones ganadoras son todo x o todos o, hay ganador
      ){
        return boardToCheck[a] // x u o
      }
    }
    return null

  }

export const checkEndGame = () => {
    // revisamos si hay un empate, 
    // si no hay mas espacios vacios
    //  en el tablero
    return newBoard.every((square) => square !== null)
  }