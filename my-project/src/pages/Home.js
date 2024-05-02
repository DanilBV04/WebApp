import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Home</h1>
            <p>
                Welcome to the world of AI!
            </p>
            <h2>What is Tensorflow?</h2>
            <paragraph>
            Tensorflow is a widely used tool to analyze images,
            videos, and other data. It is a machine learning tool
            that is used to analyze data and provide insights.
          </paragraph>
          <aside>
            This is where another explanation will go
          </aside>
          <h2>How does it work?</h2>
          <paragraph>
            Process
            The process of using Tensorflow is simple. You upload
            the data you want to analyze, and Tensorflow will provide
            you with the insights you need. It is a powerful tool that
            can help you analyze data quickly and easily.
            For this project, it analyzes images and provides us, viewers,
            with the insights in a form of score evaluation and graphs. 
          </paragraph>
          <aside>
            This is where the animation and stuff like that will go.
          </aside>
          <paragraph>
            This is the last paragraph for this page.
          </paragraph>
          <aside>
            Another addition will go here.
          </aside>
        </div>
    );
}

export default Home;