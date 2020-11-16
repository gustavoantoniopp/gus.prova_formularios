import React from 'react';
import Facebook from '../../assets/images/facebook.svg';
import Instagram from '../../assets/images/instagram.svg';
import Twitter from '../../assets/images/twitter.svg';
import './index.css';

function Footer(){
    return(
        <div>
            <div className="footer">
                <div className="contact">
                    <ul>
                        <h1>CONTATO</h1>
                        <li><strong>Email</strong> - gustavoantonio.pp@outlook.com</li>
                        <li><strong>FONE</strong> - (45) 99831-9274</li>
                        <li><strong>FONE</strong> - (45) 3573-1123</li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <a className="face"><img src={Facebook}></img></a>
                        <a className="insta"><img src={Instagram}></img></a>
                        <a className="tt"><img src={Twitter}></img></a>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© Copyright - Gustavo Antonio</p>
            </div>
    </div>
    );
}

export default Footer;