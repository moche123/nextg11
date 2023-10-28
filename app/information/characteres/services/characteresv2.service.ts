import { ICharacter } from "../models/character.model";


export const getCharacteresV2 = async (): Promise<ICharacter> => {
    const url = "https://rickandmortyapi.com/api/character/1";

    const res = await fetch(url);
    const data = await res.json();
    return data;
}