import React from 'react';
import './css/navLateral.css';

import { Link } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faMapMarkerAlt, faBuilding, faComments} from '@fortawesome/free-solid-svg-icons';

const navLateral = () => {
    return (
        <React.Fragment>
            <div className="wrapper">
                <div className="sidebar">
                    <h2>LOGO</h2>
                    <ul>
                        <li>
                            <Link to="/userPage" className="a">
                                <FontAwesomeIcon icon={faUsers} className="fas fa-users" />Usuario
                            </Link>
                        </li>
                        <li>
                            <Link to="/departmentPage" className="a">
                                <FontAwesomeIcon icon={faBuilding} className="fas fa-building" />Departamento
                            </Link>
                        </li>
                        <li>
                            <Link to="/tourismPage" className="a">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fas fa-map-maker-alt" />Centros Turísticos
                            </Link>
                        </li>
                        <li>
                            <Link to="/commentPage" className="a">
                                <FontAwesomeIcon icon={faComments} className="fas fa-comments" />Comentarios
                            </Link>
                        </li>
                    </ul>
                    <div className="exit">
                        <Link to="/login" className="a">Salir</Link>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
};
export default navLateral;