import './App.css';
import React from 'react';
import MainButton from './components/Button/Button';
import Header from './components/Header/Header';
import MiddleText from './components/Middle-Text/MiddleText';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './views/LandingPage';
import QuestionScreen from './views/QuestionScreen';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/question' element={<QuestionScreen/>}/>
                </Routes>
            </Router>    
        );
    }
}



export default App;
