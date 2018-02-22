import React from 'react';
import {Link} from 'react-router';

const Navigation = props => (
    <div>
        <nav>
            <div className="nav-header">
                 <Link to="/">Przepisy dla alergików</Link>
            </div>
            <div className="nav-main">
                <ul>
                    <li><Link to="/breakfast">Śniadania</Link></li>
                    <li><Link to="/salad"></Link>Sałatki</li>
                    <li><Link to="/soup">Zupy</Link></li>
                    <li><Link to="/dinner">Dania główne</Link></li>
                    <li><Link to="/dessert">Desery</Link></li>
                </ul>
            </div>
        </nav>
        <div className="main">
            {props.children}
        </div>
    </div>
);

export default Navigation;