import React from 'react';
import { Link } from 'react-router-dom';

export function CharactersList({ characters = [], sortBy, order }) {
  const sortedCharacters = [...characters].sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === 'modified') {
      comparison = new Date(a.modified) - new Date(b.modified);
    }
    return order === 'asc' ? comparison : -comparison;
  });

  if (!characters.length) {
    return <p>No characters found</p>;
  }

  return (
    <ul id="characters">
      {sortedCharacters.map((character) => {
        const formattedDate = new Date(character.modified).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
        return (
          <li key={character.id}>
            <Link to={`characters/${character.id}`}>
              <strong>{character.name}</strong> - <small>{formattedDate}</small>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}