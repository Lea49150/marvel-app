export function CharacterDetail({ character = {}}) {
  return (
    <div>
      <h2>{character.name}</h2>
      {
        character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />   
      }
        <p>{character.description}</p>
        {character.thumbnail.path}/standard_large.${character.thumbnail.extension}
    </div>
  );
}