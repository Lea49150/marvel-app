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
      {sortedCharacters.map((character) => (
        <li key={character.id}>
          <Link to={`characters/${character.id}`}>{character.name}</Link>
        </li>
      ))}
    </ul>
  );
}