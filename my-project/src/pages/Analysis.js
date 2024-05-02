import React from 'react';
import './Analysis.css';
import "./button.js";
import "./button.css";
import {useState} from 'react';

const Analysis = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [consoleOutput, setConsoleOutput] = useState('');

    const toggleTask = () => {
        if (isRunning) {
            console.log("Task Stopped")
        } else {
                console.log('Progressing through the code...');
                fetch('https://github.com/DanilBV04/TensorFlowAlgorithmFiles/blob/master/FilesforTheProject/main.py')
                .then(response => response.text())
                .then(data => {
                    const taskId = data.taskId;

                    const intervalId = setInterval(() => {
                        fetch(`example code add in a bit`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 'FINISHED') {
                                console.log(data);
                                setConsoleOutput(prevOutput => prevOutput + '\n' + data.result);
                                clearInterval(intervalId);
                            }
                });
            }, 5000);
        })
                .catch((error) => {
                    console.error('Error:', error);
                });
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
        <textarea value={consoleOutput} readOnly />
        </div>
    );
}

export default Analysis;