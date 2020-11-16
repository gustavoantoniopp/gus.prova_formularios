import React from 'react';
import Frango from '../../assets/images/frango.svg';
import './index.css';

function Header(){
    return(
        <div className="header">
            <div className="logo"><img src={Frango}></img></div>
            <ul className="opts">
                <li>Animais</li>
                <li>Produtos</li>
                <li>Preços</li>
                <li>Contato</li>
            </ul>
        </div>
    );
}

export default Header;   