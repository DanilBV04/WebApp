import React from 'react';
import './Analysis.css';
import "./Button.css";
import "./Button.js";
import {Text, TouchableOpacity, View} from "react-native-web";
import {useState} from 'react';
import style from "./Button.js";

const Analysis = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const toggleTask = () => {
        if (isRunning) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            const id = setInterval(() => {
                console.log('Operation Prevented!');
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

            <View style={style.container}>
                <TouchableOpacity style={style.button} onPress={toggleTask}>
                <Text style={style.text}>{isRunning ? 'Stop' : 'Start'}</Text>
                </TouchableOpacity>
            </View>
        </div>
    );
}

export default Analysis;