import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Skull from '../../assets/images/skull.svg';
import './index.css'

function Error(){
    return(
        <div>
            <Header/>
            <div className="error">
                <div className="not">
                    <img src={Skull}></img>
                    <h1>404</h1>
                    <p>Not Found</p>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default Error;