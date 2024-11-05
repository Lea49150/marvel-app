// FILEPATH: /c:/Users/lporch03/marvel-app/src/api/characters-api.test.js
import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

jest.mock('../data/characters.json', () => [
  { id: 1, name: 'Iron Man' },
  { id: 2, name: 'Thor' },
  { id: 3, name: 'Hulk' },
]);

describe('getCharacters', () => {
  it('should return the list of characters', () => {
    const result = getCharacters();
    expect(result).toEqual(characters);
  });
});

describe('getCharacterById', () => {
  it('should return the correct character for a valid ID', () => {
    const result = getCharacterById(1);
    expect(result).toEqual({ id: 1, name: 'Iron Man' });
  });

  it('should return undefined for an invalid ID', () => {
    const result = getCharacterById(999);
    expect(result).toBeUndefined();
  });
});