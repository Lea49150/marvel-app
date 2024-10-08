import { Link } from "react-router-dom";

export function CharactersList({characters = []}) {
// si la liste est vide, on affiche un message
    if (!characters.length) {
        return <p>No characters found</p>;
    }   

    // Sinon, on affiche la liste des personnages

    return (
        <ul id="characters">
          {characters.map((character)=> (
            <li key={character.id}>
              <Link tp={`character/${character.id}`}>${character.name}</Link>
              </li>
          ))}
        </ul>
    )
  }


  