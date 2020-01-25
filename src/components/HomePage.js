import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
    display: block;
    height: 52.8vh;
`

const Box = styled.div`
    display: block;
    background: #ccc;
    padding: 70px 0;
    text-align: center;
    margin-top: 50px;
    border-radius: 5px;
`

const HomePage = () => {
    return(
        <Wrapper>
            <Box>
                <Header />
            </Box>
        </Wrapper>
    )
}

export default HomePage;