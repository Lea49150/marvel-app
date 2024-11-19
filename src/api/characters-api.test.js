import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

jest.mock('../data/characters.json', () => [
  { id: 1, name: 'Iron Man', modified: '2021-02-01' },
  { id: 2, name: 'Thor', modified: '2021-01-01' },
  { id: 3, name: 'Hulk', modified: '2021-03-01' },
]);

describe('getCharacters', () => {
  it('should return all characters sorted by name in ascending order by default', () => {
    const result = getCharacters();
    expect(result).toEqual([
      { id: 3, name: 'Hulk', modified: '2021-03-01' },
      { id: 1, name: 'Iron Man', modified: '2021-02-01' },
      { id: 2, name: 'Thor', modified: '2021-01-01' },
    ]);
  });

  it('should return all characters sorted by name in descending order', () => {
    const result = getCharacters('name', 'desc');
    expect(result).toEqual([
      { id: 2, name: 'Thor', modified: '2021-01-01' },
      { id: 1, name: 'Iron Man', modified: '2021-02-01' },
      { id: 3, name: 'Hulk', modified: '2021-03-01' },
    ]);
  });

  it('should return all characters sorted by modified date in ascending order', () => {
    const result = getCharacters('modified', 'asc');
    expect(result).toEqual([
      { id: 2, name: 'Thor', modified: '2021-01-01' },
      { id: 1, name: 'Iron Man', modified: '2021-02-01' },
      { id: 3, name: 'Hulk', modified: '2021-03-01' },
    ]);
  });

  it('should return all characters sorted by modified date in descending order', () => {
    const result = getCharacters('modified', 'desc');
    expect(result).toEqual([
      { id: 3, name: 'Hulk', modified: '2021-03-01' },
      { id: 1, name: 'Iron Man', modified: '2021-02-01' },
      { id: 2, name: 'Thor', modified: '2021-01-01' },
    ]);
  });
});

describe('getCharacterById', () => {
  it('should return the correct character for a valid ID', () => {
    const result = getCharacterById(1);
    expect(result).toEqual({ id: 1, name: 'Iron Man', modified: '2021-02-01' });
  });

  it('should return undefined for an invalid ID', () => {
    const result = getCharacterById(999);
    expect(result).toBeUndefined();
  });
});