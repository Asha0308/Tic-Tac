import React, { useState, useEffect } from "react";
import "./App.css";
import Square from "./Square";
import { Patterns } from "./Pattern";
function App() {
  const [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({winner: "none", state: "none"});

  useEffect(() => {
    checkWin()
    if(player === "X") {
      setPlayer("O")
    }
    else {
      setPlayer("X")
    }
  }, [value])

  useEffect(() => {
   if (result.state != "none" ) {
    alert(`Game Finished: Winner is ${result.winner}`);
    resetGame();
   }
   
  }, [result])

  const chooseSquare = (square) => {
    setValue(value.map((item, index) => {
      if(square == index && item  == "") {
        return player
      }
    return item
    }))
  };
  const checkWin = () => {
    Patterns.forEach((currPattern) => {
     const firstPlayer = value[currPattern[0]];
     if(firstPlayer == "") return ;
     let winningPattern= true;
      currPattern.forEach((index) => {
        if(value[index] != firstPlayer) {
          winningPattern = false;
        }
      })
      if (winningPattern == true ) {
         setResult({winner : player, state: "Won"})
      }
    })
  }

  const resetGame = () => {
    setValue(["", "", "", "", "", "", "", "", ""])
     setPlayer("O")
  }

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={value[0]}  chooseSquare={() => chooseSquare(0)}/>
          <Square val={value[1]}  chooseSquare={() => chooseSquare(1)} />
          <Square  val={value[2]}  chooseSquare={() => chooseSquare(2)}/>
        </div>
        <div className="row">
        <Square val={value[3]}  chooseSquare={() => chooseSquare(3)}/>
          <Square val={value[4]}  chooseSquare={() => chooseSquare(4)} />
          <Square  val={value[5]}  chooseSquare={() => chooseSquare(5)}/>
        </div>
        <div className="row">
        <Square val={value[6]}  chooseSquare={() => chooseSquare(6)}/>
          <Square val={value[7]}  chooseSquare={() => chooseSquare(7)} />
          <Square  val={value[8]}  chooseSquare={() => chooseSquare(8)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
