import React, { useState, useEffect } from 'react';
import './Galeria.css';

const Galeria = () => {
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        // Cargar las imágenes desde la carpeta DCU
        const loadImageFiles = () => {
            const imageFiles = [];
            for (let i = 1; i <= 7; i++) {
                const fileName = `DCU/image${i}.png`;
                const image = new Image();
                image.src = fileName;
                imageFiles.push(image);
            }
            setImages(imageFiles);
        };

        loadImageFiles();
    }, []);

    useEffect(() => {
        // Iniciar la rotación continua de las imágenes
        const rotationInterval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(rotationInterval);
    }, [images]);

    const handleClickDot = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="galeria-container">
            <div className="galeria-images-container">
                {images.length > 0 &&
                    images.map((image, index) => (
                        <div
                            key={index}
                            className={`galeria-image-container ${index === activeIndex ? 'active' : ''
                                }`}
                            onClick={() => {
                                const updatedImages = [...images];
                                updatedImages[activeIndex].classList.remove('zoom');
                                updatedImages[activeIndex].classList.remove('terremoto');
                                setActiveIndex(index);
                            }}
                        >
                            <img
                                className={`galeria-image ${index === activeIndex ? 'zoom' : ''
                                    }`}
                                src={image.src}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    ))}
            </div>
            <div className="galeria-dots-container">
                {images.length > 0 &&
                    images.map((_, index) => (
                        <div
                            key={index}
                            className={`galeria-dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleClickDot(index)}
                        ></div>
                    ))}
            </div>
        </div>
    );
};

export default Galeria;
