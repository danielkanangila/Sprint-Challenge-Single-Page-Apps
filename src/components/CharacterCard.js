import React from "react";
import { Card, CardImage, CardTextContent } from './ui-components'
import Header from './Header';
import styled from "styled-components";

const Title = styled.span`
  margin-right: 5px;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bold;
`

const Name = styled.h3`
  margin: 0;
  padding: 10px 0;
`

const BottomText = styled.div`
 display: flex;
 flex-direction: row;
`

const P = styled.p`
  margin: 0;
  font-size: 0.7rem;
  color: rgba(0,0,0,0.7);
  margin-right: 15px;
  text-transform: uppercase;
`

export default function CharacterCard({name, gender, status, image}) {
  return(

    <Card>
      <CardImage src={image} />
      <CardTextContent>
        <Name>
          {name}
        </Name>
        <BottomText>
          <P>
            <Title>Gender:</Title>
            {gender}
          </P>
          <P>
            <Title>Status:</Title>
            {status}
          </P>
        </BottomText>
      </CardTextContent>
    </Card>
  )
}
