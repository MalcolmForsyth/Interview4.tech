import React from "react";
import './Button.css';

class MainButton extends React.Component {
    render() {
        return (
            <button
                className="MainButton"
                href="https://reactjs.org"
            >
            Get Started
            </button>
        );
    }
}

export default MainButton;