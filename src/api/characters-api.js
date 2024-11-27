import characters from '../data/characters.json';

// fonction getCharacters

export function getCharacters(orderBy = 'name', order = 'asc') {

    const sortedCharacters = [...characters].sort((a, b) => {
        let comparison = 0;
        if (orderBy === 'name') {
            comparison = a.name.localeCompare(b.name);
        } else if (orderBy === 'modified') {
            comparison = new Date(a.modified) - new Date(b.modified);
        }
        return order === 'asc' ? comparison : -comparison;
    });

    return sortedCharacters;

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
