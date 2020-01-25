import React from 'react';
import styled from 'styled-components';
import { Container, Logo } from './ui-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #ccc;
    background: #ffff;
    z-index: 1000;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`

const MenuItemIcon = styled.div`

    a {
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
    }
    a.active {
        background: #ccc;
        color: #000;
    }
`

const MenuText = styled.span`
    font-size: 0.7rem;
    text-transform: uppercase;
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
                    <MenuItemIcon>
                        <NavLink exact activeClassName="active" to="/">
                            <MenuText>
                                Home
                            </MenuText>
                        </NavLink>
                    </MenuItemIcon>
                    <MenuItemIcon>
                        <NavLink activeClassName="active" to="/character-list">
                            <MenuText>
                                Characters
                            </MenuText>
                        </NavLink>
                    </MenuItemIcon>
                </div>
            </Container>
        </Wrapper>
    )
}

export default AppBar;