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
            fetch('http://127.0.0.1:5000/shutdown', {method: 'POST'})
            .then(response => {
                if (!response.ok) {
                    throw new Error('Somethig is amiss!');
                }
                return response.text();
        })
        .then(data => {
            console.log('Data: ', data);
        })
        .catch((error) => {
            console.error('Error: ', error);
        });
        } else {
            console.log('Progressing through the code...');
            fetch('http://127.0.0.1:5000/run_script')
            .then(response => {    
                if (!response.ok) {
                    throw new Error('HTTP error! status: ${response.status}');
                }
                return response.text();
            })
            .then(data => {
                console.log('Data: ', data);
                console.log('Data.result: ', data.result);
                setConsoleOutput(prevOutput => prevOutput + '\n' + data.result);

        })
                .catch((error) => {
                    console.error('Error: ', error);
                    console.log('Error.message: ', error.message);
                    setConsoleOutput(prevOutput => prevOutput + '\nError ' + error.message);
            });
        }
        setIsRunning(!isRunning);    
    }

    const stopTask = () => {
        console.log('Task Terminated');
        fetch('http://127.0.0.1:5000/delete_repo', {method: 'DELETE'})
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);  // Log the entire data object
            console.log('Data.message:', data.message);  // Log the message property
        })
        .catch((error) => {
            console.error('Error:', error);  // Log the entire error object
        });
        setIsRunning(!isRunning)
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