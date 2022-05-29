import './LandingPage.css';
import React from 'react';
import MainButton from '../components/Button/Button';
import Header from '../components/Header/Header';
import MiddleText from '../components/Middle-Text/MiddleText';
import RecButton from '../components/RecButton/RecButton';

class LandingPage extends React.Component {
    next = () => {
        
    };

    render() {
    return (
      
        <div className="landing-screen">
            <h1></h1>
            <Header></Header>
            <MiddleText></MiddleText>
            <a href='/question'>
                <MainButton onClick={this.next()}> Get Started</MainButton>
            </a>
        </div>
    );
    }
}

export default LandingPage;