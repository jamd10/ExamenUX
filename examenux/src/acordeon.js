import React, { useState } from 'react';
import './acordeon.css';

const Acordeon = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAcordeon = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const acordeonItems = [
        {
            titulo: '1. Enfoque en las necesidades del usuario',
            info:
                'El diseño centrado en el usuario se enfoca en comprender las necesidades y expectativas de los usuarios y diseñar una experiencia digital que se adapte a ellas. Es decir, se trata de diseñar pensando en el usuario final, y no en el producto o servicio en sí mismo.',
        },
        {
            titulo: '2. Investigación y análisis de datos',
            info:
                'Para conocer las necesidades del usuario, es necesario realizar una investigación exhaustiva y analizar los datos. El diseño centrado en el usuario utiliza diversas técnicas de investigación, como encuestas, entrevistas y pruebas de usabilidad, para obtener información valiosa sobre los usuarios.',
        },
        {
            titulo: '3. Prototipado y testing',
            info:
                'Una vez que se ha recopilado la información necesaria, se procede a crear prototipos y hacer pruebas con los usuarios para evaluar la usabilidad y eficacia del diseño. El objetivo es asegurarse de que el diseño cumpla con las necesidades y expectativas del usuario final.',
        },
        {
            titulo: '4. Iteración y mejora continua',
            info:
                'El diseño centrado en el usuario es un proceso iterativo y continuo. Se trata de ir mejorando el diseño en base a los comentarios y sugerencias de los usuarios, para así lograr una experiencia digital cada vez más satisfactoria y efectiva.',
        },
        {
            titulo: '5. Integración con la analítica web',
            info:
                'Por último, el diseño centrado en el usuario se integra con la analítica web para medir el éxito y el impacto del diseño en los usuarios. Esto permite identificar áreas de mejora y tomar decisiones basadas en datos para optimizar la experiencia del usuario y alcanzar los objetivos del sitio web.',
        },
    ];

    return (
        <div className="acordeon">
            {acordeonItems.map((item, index) => (
                <div className="acordeon-item" key={index}>
                    <div className="acordeon-titulo" onClick={() => toggleAcordeon(index)}>
                        <h3>{item.titulo}</h3>
                        <span className={`acordeon-icono ${activeIndex === index ? 'acordeon-icono-abierto' : ''}`}>&#9662;</span>
                    </div>
                    {activeIndex === index && (
                        <div className="acordeon-contenido">
                            <p>{item.info}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Acordeon;
