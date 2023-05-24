import React, { useEffect, useRef } from 'react';
import './icons.css';

const Icons = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const handleCarousel = () => {
            const firstCircle = container.querySelector('.circle');
            container.appendChild(firstCircle);
        };

        const carouselInterval = setInterval(handleCarousel, 3000);

        return () => {
            clearInterval(carouselInterval);
        };
    }, []);

    return (
        <div className="icons" ref={containerRef}>
            <div className="circle orange">
                <i className="fab fa-html5"></i>
            </div>
            <div className="circle orange">
                <i className="fab fa-css3"></i>
            </div>
            <div className="circle orange">
                <i className="fab fa-js"></i>
            </div>
            <div className="circle orange">
                <i className="fab fa-bootstrap"></i>
            </div>
            <div className="circle orange">
                <i className="fab fa-react"></i>
            </div>
            <div className="circle orange">
                <i className="fab fa-android"></i>
            </div>
            <div className="circle orange">
                <i className="fas fa-desktop"></i>
            </div>
            <div className="circle orange">
                <i className="fab fa-apple"></i>
            </div>
        </div>
    );
};

export default Icons;
