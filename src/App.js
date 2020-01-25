import React from "react";
import Header from "./components/Header.js";
import { Container } from "./components/ui-components.js";
import AppBar from './components/AppBar';
import Footer from './components/Footer';



export default function App() {
  return (
    <main>
      <AppBar />
      <Container>
        <Header />  
      </Container>
      <Footer />
    </main>
  );
}
