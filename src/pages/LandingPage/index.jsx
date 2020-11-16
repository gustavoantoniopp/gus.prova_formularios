import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer' ;
import './index.css'

function LandingPage(){
    return(
        <div>
            <Header/>
            <div className="content">
                <div className="page">
                    <h1>ROBSON É UMA BALEIA MUITO FELIZ</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default LandingPage;