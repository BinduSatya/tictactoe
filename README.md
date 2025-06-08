# React Tic Tac Toe

This is a simple Tic Tac Toe game built with React.

## How to Install and Run

1. **Install dependencies**  
   Open your terminal in the project directory and run: _npm install_
2. **Start the development server**, run : _npm start_
   The app will open in your browser at `http://localhost:3000`.

3. **Build for production**  
   To create an optimized production build, run: _npm run build_

## Project Functionality

- This project is a classic Tic Tac Toe game for two players.
- The board is a 3x3 grid. Players take turns clicking on empty cells to place their symbol (O or X).
- The game checks for a winner after each move. If a player gets three in a row (horizontally, vertically, or diagonally), a win message is displayed and the board is locked.
- If all cells are filled and there is no winner, the game declares a draw.
- A "Reset" button allows you to start a new game at any time.

## How It Is Built

- The game uses React functional components and React Hooks (`useState`, `useRef`) for state and DOM management.
- The board state is managed using a simple array.
- The UI is updated by directly manipulating the DOM using refs for each cell and the title.
- The main functions are:
  - `toggle`: Handles cell clicks, updates the board, and checks for a winner.
  - `checkWinner`: Checks all possible winning combinations.
  - `reset`: Resets the board and state for a new game.

## Tech Stack and Libraries

- **React**: For building the user interface.
- **JavaScript (ES6+)**: Core programming language.
- **CSS**: For styling the game board and layout.
- **No additional libraries** are used beyond the default Create React App setup.

---
