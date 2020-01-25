import React from 'react';
import styled from 'styled-components';
import { Container, Logo } from './ui-components';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #ccc;
    background: #ffff;
    z-index: 1000;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`

const MenuItemIcon = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: rgba(0,0,0,0.5);
    padding: 20px 10px;
    transition: all .3s;

    :hover {
        background: #ccc;
        color: #000;
    }
`

const MenuText = styled.span`
    font-size: 0.7rem;
    text-transform: uppercase;
`

const UserIcon = styled.i`
    color: inherit;
    font-size: 1.2rem;
`

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        fontSize: '1.7rem'
    },
    rightItems: {
        display: 'flex',
        flexDirection: 'row'
    }
}

const AppBar = () => {
    const classes = styles;
    return(
        <Wrapper>
            <Container style={classes.container}>
                <Logo>
                    Rick&amp;Morty
                </Logo>
                <div style={classes.rightItems}>    
                    <MenuItemIcon href="/">
                        <MenuText>
                            Home
                        </MenuText>
                    </MenuItemIcon>
                    <MenuItemIcon href="/character-list">
                        <MenuText>
                            Characters
                        </MenuText>
                    </MenuItemIcon>
                </div>
            </Container>
        </Wrapper>
    )
}

export default AppBar;