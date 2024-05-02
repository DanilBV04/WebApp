import React from 'react';
import './Upload.css';
import "./button.js";
import "./button.css";
import {useState} from 'react';

const Upload = () => {

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
        <div className="upload-container">
            <h2>Upload</h2>
                <p>
                    This is where you feed the beast
                </p>
            <div>
                <button onClick = {toggleTask}>{isRunning ? 'Upload' : 'Start Code' } </button>
            </div>
        </div>
    );
}

export default Upload;