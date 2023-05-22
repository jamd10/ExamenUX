import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Carrusel from './Carrusel';
import ReactCard from './ReactCard';
import './card.css';
import Footer from './Footer';

function App() {
  const cards = [
    {
      title: 'Título de la tarjeta 1',
      image: '/img/Fondo copy.jpg',
      content: 'La experiencia de usuario (UX, por sus siglas en inglés) se refiere a la interacción global que tiene un usuario con un producto, servicio o sistema, y está diseñada para proporcionar una experiencia positiva y satisfactoria. ',
    },
    {
      title: 'Título de la tarjeta 2',
      image: '/img/Fondo copy.jpg',
      content: 'El diseño de interacción se enfoca en la forma en que los usuarios interactúan y se involucran con un producto o sistema. ',
    },
    {
      title: 'Título de la tarjeta 3',
      image: '/img/Fondo copy.jpg',
      content: 'La accesibilidad se refiere a la capacidad de un producto, servicio o sistema para ser utilizado por personas con diversas capacidades y discapacidades.',
    },
  ];

  return (
    <>
      <Navbar />
      <Carrusel />

      <div className="card-container">
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', width: '100%' }}>
          <h1 style={{ color: 'white', fontSize: '48px', textAlign: 'center' }}>¿Qué es la experiencia de usuario?</h1>
        </div>
      </div>

      <div className="card-container">
        {cards.map((card, index) => (
          <ReactCard key={index} image={card.image} content={card.content} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
