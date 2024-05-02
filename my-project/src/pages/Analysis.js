import React from 'react';
import './Analysis.css';
import "./button.js";
import "./button.css";
import {useState} from 'react';

const Analysis = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const toggleTask = () => {
        if (isRunning) {
            clearInterval(intervalId);
            console.log("Task Stopped")
            setIntervalId(null);
        } else {
            const id = setInterval(() => {
                console.log('Progressing through the code...');
            }, 1000);
            setIntervalId(id);
        }
        setIsRunning(!isRunning);
    
    }

    return (
        <div className="analysis-container">
            <h2>Analysis</h2>
            <p>
                This is where the magic happens!
            </p>
        <div>
            <button onClick = {toggleTask}>{isRunning ? 'Stop Code' : 'Start Code' } </button>
        </div>
        </div>
    );
}

export default Analysis;