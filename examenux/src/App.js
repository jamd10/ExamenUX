import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Carrusel from './Carrusel';
import ReactCard from './ReactCard';
import './card.css'; // Importar el archivo CSS para los estilos personalizados de las tarjetas

function App() {
  const cards = [
    {
      image: '/img/img1.jpg',
      content: 'Contenido de la tarjeta 1',
    },
    {
      image: '/img/img2.jpg',
      content: 'Contenido de la tarjeta 2',
    },
    {
      image: '/img/img3.jpg',
      content: 'Contenido de la tarjeta 3',
    },
  ];

  return (
    <>
      <Navbar />
      <Carrusel />

      <div className="card-container">
        {cards.map((card, index) => (
          <ReactCard key={index} image={card.image} content={card.content} />
        ))}
      </div>
    </>
  );
}

export default App;
