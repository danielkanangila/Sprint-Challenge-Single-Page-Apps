import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import { GridView } from "./ui-components";
import styled from 'styled-components';
import SearchForm from './SearchForm';

const Title = styled.h1`

`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacterList(response.data.results)
    })  
    .catch(error => console.error(error));
  }, []);

  const filter = query =>{
    console.log(query);
    if (query) {
      const newCharacterLis =  characterList.filter(character => character.name.includes(query));
      setCharacterList(newCharacterLis)
    }
  }
  return (
    <section className="character-list">
      <SearchForm filter={filter} />
      <GridView>
        {characterList.map((character) => <CharacterCard key={character.id} {...character} />)}
      </GridView>
    </section>
  );
}
