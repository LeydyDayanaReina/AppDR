
import React from 'react';
import { Link } from 'react-router-dom';

import "./home.css"

const Home = () => {
    return (
        <div>
            <h2>Bienvenido al sistema de gestión de citas del Salón de Belleza</h2>
            <p>Desde aquí puedes acceder a diferentes funcionalidades:</p>
            <ul>
                <li><Link to="/empleados">Gestión de Personal</Link></li>
                <li><Link to="/ver-citas">Ver Citas</Link></li>
                <li><Link to="/informes">Informes</Link></li>
            </ul>
        </div>
    );
}

export default Home;
