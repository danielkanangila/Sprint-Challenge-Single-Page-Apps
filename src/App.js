import React from "react";
import Header from "./components/Header.js";
import { Container } from "./components/ui-components.js";
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import CharacterList from './components/CharacterList';


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
        <Header  /> 
        <CharacterList /> 
      </Container>
      <Footer />
    </main>
  );
}
