import React from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    const characters = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const sortBy = queryParams.get('sortBy') || 'name';
    const order = queryParams.get('order') || 'asc';

    const handleSortChange = (event) => {
        queryParams.set('sortBy', event.target.value);
        navigate({ search: queryParams.toString() });
    };

    const handleOrderChange = (event) => {
        queryParams.set('order', event.target.value);
        navigate({ search: queryParams.toString() });
    };

    return (
        <>
            <h2>Marvel Characters</h2>
            <div>
                <label>
                    Sort by:
                    <select value={sortBy} onChange={handleSortChange}>
                        <option value="name">Name</option>
                        <option value="modified">Date Modified</option>
                    </select>
                </label>
                <label>
                    Order:
                    <select value={order} onChange={handleOrderChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>
            <CharactersList characters={characters} sortBy={sortBy} order={order} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;