function CharacterDetail({ character = {} }) {
  // if character is not provided, then render "No character"
  if (!character || Object.keys(character).length === 0) {
    return <div>No character</div>;
  } else {
    // if character is provided, then render the character details
    const formattedDate = new Date(character.modified).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    return (
      <div>
        <h2>{character.name}</h2>
        {
          // if character.thumbnail is not null, then render the image
          character.thumbnail && <img src={`${character.thumbnail.path}/standard_large.${character.thumbnail.extension}`} alt={character.name} />
        }
        <p>{character.description}</p>
        <p>{formattedDate}</p>
      </div>
    );
  }
}

export default CharacterDetail;