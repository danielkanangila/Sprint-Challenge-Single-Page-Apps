import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import { Container } from "./components/ui-components.js";
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';
import HomePage from './components/HomePage';

const useStyle = {
  container: {
    paddingTop: '70px',
  }
}

export default function App() {
  const classes = useStyle;

  return (
    <main>
      <AppBar />
      <Container style={classes.container}>
        <Route exact path="/" component={HomePage} />
        <Route path="/character-list" component={CharacterList} />
      </Container>
      <Footer />
    </main>
  );
}
