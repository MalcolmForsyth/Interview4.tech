import './LandingPage.css';
import React from 'react';
import MainButton from '../components/Button/Button';
import Header from '../components/Header/Header';
import MiddleText from '../components/Middle-Text/MiddleText';
import ParticlesBg from 'particles-bg';
import ScoreCard from '../components/ScoreCard/ScoreCard';
import NewProgBar from '../components/NewProgBar/NewProgBar';
class LandingPage extends React.Component {
    next = () => {
        
    };

    render() {
    return (
      
        <div className="landing-screen">
            <ParticlesBg color="#85b5f8" num={200} type="cobweb" bg={true}/>
            <Header></Header>
            <a href='/question'>
                <MainButton className="main-button-1" onClick={this.next()}> Begin</MainButton>
            </a>
            <MiddleText></MiddleText>
            {/* <ScoreCard /> */}
            <NewProgBar className='bar' value='60' title='test' />

        </div>
    );
    }
}

export default LandingPage;