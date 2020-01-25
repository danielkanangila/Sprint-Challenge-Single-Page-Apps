import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import { GridView } from "./ui-components";
import styled from 'styled-components';

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
      console.log(response.data)
    })  
    .catch(error => console.error(error));
  }, []);

  return (
    <section className="character-list">
      <GridView>
        {characterList.map(character => <CharacterCard {...character} />)}
      </GridView>
    </section>
  );
}
