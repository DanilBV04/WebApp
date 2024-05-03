import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Home</h1>
            <paragraph>
            This project is about developing an efficient and user-friendly
            image analysis algorithm, that will help improve the already existing
            traffic sign analysis systems. This will not only help the drivers
            be more at ease while driving, but will also significantly reduce
            the risks of endangering the life of the driver and the passengers, 
            as well as everyone and everything around the vehicle. 
          </paragraph>
          <aside>
            This is where another explanation will go
          </aside>
          <paragraph>
            Wah
          </paragraph>
          <aside>
          Wah
          </aside>
          <paragraph>
          The process of using Tensorflow is simple. First, the data is thoroughly
            selected to be used for this project, as the more accurate and reliable
            the data is, the better analysis can the algorithm perform. Next is when
            the true magic happens. The data is fed into the algorithm, which then
            processes the data and provides us with the results. These results can be 
            in any form, a graph, an evaluation metric number etc. The important thing 
            we look for is a very high accuracy rate number, as the higher it is the 
            better the overall algorithm build is. 
          </paragraph>
          <aside>
            Another addition will go here.
          </aside>
        </div>
    );
}

export default Home;