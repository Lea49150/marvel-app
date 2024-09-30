// version 1
import './App.css'
import { CharactersList } from './components/CharactersList'
import characters from './data/characters.json'


function App() {
  return (
    <>
      <h1>Marvel Characters</h1>
      <CharactersList characters={characters}/>
    </>
  )
}

export default App

// version 2


// import React from "react";

// function App() {
//   return (<h1>Hello World from react with JSX</h1>);
// }

// export default App;

// version 3
// import './App.css'

// function App() {
//   return (
//     <>
//       <h1>Marvel Characters</h1>
//       <ul id="characters">
//         <li>
//           Beast
//         </li>
//         <li>
//           Captain America
//         </li>
//         <li>
//           Deadpool
//         </li>
//       </ul>
//     </>
//   )
// }

// export default App

