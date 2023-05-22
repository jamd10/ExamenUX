import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="social-icons">
                    <a href="https://facebook.com">
                        <FaFacebook size={24} color="#ff6600" />
                    </a>
                    <a href="https://instagram.com">
                        <FaInstagram size={24} color="#ff6600" />
                    </a>
                    <a href="https://youtube.com">
                        <FaYoutube size={24} color="#ff6600" />
                    </a>
                    <a href="https://whatsapp.com">
                        <FaWhatsapp size={24} color="#ff6600" />
                    </a>
                </div>
                <div className="info">
                    <p>
                        Información de contacto: ejemplo@example.com | Teléfono: 1234567890
                    </p>
                    <p>
                        Derechos reservados &copy; 2023 | Creadores: Jesús Meraz, Sahory Herrera
                    </p>
                    <p>
                        La experiencia de usuario (UX) se refiere a la interacción global que tiene un usuario con un producto, servicio o sistema. En nuestra página, nos enfocamos en proporcionar una experiencia positiva y satisfactoria a nuestros usuarios. Utilizamos principios de diseño centrados en el usuario, investigamos sus necesidades y deseos, y creamos soluciones intuitivas y atractivas.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
