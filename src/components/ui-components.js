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
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const Card = styled.div`
    display: block;
    width: 100%;
    box-shadow:  0 4px 8px 0 rgba(0,0,0,0.2);
    margin-bottom: 15px;
    transition: 0.3s;
    border-radius: 5px;
    padding-bottom: 20px;

    @media (min-width: 600px) {
        width: 46%;
        margin-bottom: 3%;
    }
    @media (min-width: 1024px) {
        width: 30%;
        margin-bottom: 3%;
    }

    img {
        width: 100%;
    }
`
export const CardImage = styled.img`
    width: 100%;
    border-radius: 5px 5px 0 0;
`

export const CardTextContent = styled.div`
    padding: 0 15px;
`;

export const TextField = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    :focus {
        border: 2px solid #339AF0;
    }
`; 

export const TextFieldWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: 80%;
    margin-bottom: 30px;
`;

export const Label = styled.label`
    display: block;
    padding: 15px 0px 1px 5px;
    text-transform: uppercase;
    font-size: 0.7rem;

`;