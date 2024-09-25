async function getCharacters() {
    try {
        const response = await fetch('http://127.0.0.1:5500/src/data/characters.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const characters = await response.json();
        console.log(characters);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Appelle la fonction pour récupérer les données
getCharacters();
