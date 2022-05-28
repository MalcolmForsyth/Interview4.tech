import './LandingPage.css';
import React from 'react';
import MainButton from '../components/Button/Button';
import Header from '../components/Header/Header';
import MiddleText from '../components/Middle-Text/MiddleText';

class LandingPage extends React.Component {
    render() {
    return (
        <div className="App">
            <Header></Header>
            <MiddleText></MiddleText>
            <MainButton></MainButton>
        </div>
    );
    }
}

export default LandingPage;