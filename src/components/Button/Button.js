import React from "react";
import './Button.css';

class MainButton extends React.Component {
    render() {
        return (
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <button
                className="MainButton"
            >
            Get Started
            </button>
            </a>

        );
    }
}

export default MainButton;