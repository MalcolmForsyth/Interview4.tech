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
            <a href='/question'>
                <MainButton className="main-button-1" onClick={this.next()}> Begin</MainButton>
            </a>
            <MiddleText></MiddleText>
        </div>
    );
    }
}

export default LandingPage;