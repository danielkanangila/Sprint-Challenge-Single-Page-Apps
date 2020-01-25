import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    color: #212121;
    ${props => (props.___class === 'app' ? 
        `
            padding-top: 90px;
            @media (min-width: 875px) {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            @media (min-width: 1024px) {
                width: 80%;
            }
        `
        : null
    )}
`;

export const Logo  = styled.h1`
    margin: 0;
    font-family: 'Fredoka One', cursive;
    font-size: 1.8rem;
    letter-spacing: -2px;
    color: #495057;
`

export const GridView = styled.div`
    display: flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const Card = styled.div`
    display: block;
    width: 100%;
    box-shadow: 1px 1px 1px #ccc;
`