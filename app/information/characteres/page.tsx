import { getCharacteres,getCharacteresV2 } from "./services";


async function fetchCharacteres() {
    return await getCharacteres();
}

async function Characteres() {
  const characteres = await fetchCharacteres();
  return (
    <>
        {
            characteres && characteres.map(character => <div key={character.id}>{character.name}</div>)
        }
    </>
  )
}

export default Characteres