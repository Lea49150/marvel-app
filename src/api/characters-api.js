import characters from '../data/characters.json';

// fonction getCharacters

export function getCharacters() {
    return characters;
}   

// fonction getCharacterById

export function getCharacterById(id) {
    const character = characters.find((character) => character.id === id);
    // return characters.find((character) => character.id === id);
    // if (!character) {
    //     throw new Error(`Character with id ${id} not found`);
    // }
    return character;
}   
