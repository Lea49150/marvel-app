// affiche la page de détail d'un personnage, qui elle-même utilise un composant CharacterDetail pour afficher les détails du personnage
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';


const CharacterDetailPage = () => {
    const character = useLoaderData();
    return (
        <div>
            {character ? <CharacterDetail character={character} /> :'Loading...'}
        </div>
    );
};

export default CharacterDetailPage;