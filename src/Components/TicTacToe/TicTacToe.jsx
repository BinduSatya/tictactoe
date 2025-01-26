import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import _circleIcon from "../Assets/circle.png";
import _crossIcon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef("");
  let box2 = useRef("");
  let box3 = useRef("");
  let box4 = useRef("");
  let box5 = useRef("");
  let box6 = useRef("");
  let box7 = useRef("");
  let box8 = useRef("");
  let box9 = useRef("");

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe in <span>React</span>";
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }

    return null;
  };

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    // console.log("Clikcing");

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${_circleIcon}'>`;
      data[num] = "o";
      setCount(++count);
      console.log("even");
    } else {
      e.target.innerHTML = `<img src='${_crossIcon}'>`;
      data[num] = "x";
      setCount(++count);
      console.log("odd");
    }

    const winner = checkWinner();
    if (winner) {
      //   alert(`Player ${winner.toUpperCase()} wins!`);
      if (winner === "x") {
        titleRef.current.innerHTML = `Congratulations : <img src = ${_crossIcon}> wins`;
      } else if (winner === "o") {
        titleRef.current.innerHTML = `Congratulations : <img src = ${_circleIcon}> wins`;
      }
      setLock(true); // Lock the board after a win
    } else if (count === 9) {
      //   alert("It's a draw!");
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="title" ref={titleRef}>
          Tic Tac Toe in <span>React</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              ref={box1}
              className="boxes"
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="boxes"
              ref={box2}
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="boxes"
              ref={box3}
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              className="boxes"
              ref={box4}
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="boxes"
              ref={box5}
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="boxes"
              ref={box6}
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              className="boxes"
              ref={box7}
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="boxes"
              ref={box8}
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="boxes"
              ref={box9}
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button
          className="reset"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
