import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
import characters from '../data/characters.json'


export function Home() {
    document.title='Home | Marvel App';
        return(
            <>
                <h1 id="title">Marvel Characters</h1>
                <CharactersList characters={characters}/>
                <NumberOfCharacters characters={characters}/>
            </>
        );
    }