import React from 'react';
import './Navhome.css';
import ReactPlayer from 'react-player'

import image1 from "./images/martin.png";
import image2 from "./images/satyajitray.png"
import image3 from "./images/alfred-hitchcock.png"
import image4 from "./images/Steven_spilberg.png"


function Navhome() {
  return (
    <div className="home-content">
      <div className="content">
        <h2>Journey to the filmmaking</h2>
        <div className="martin-logo">
          <img src={image1} alt="martin.png" />
            <div className="description">
              <p>“My father took me to see this film in 1950, when I was eight years old. And I’ve never forgotten it. I wouldn’t know how to begin to explain what this film has meant to me over the years. It’s about the joy and exuberance of film-making itself. It’s one of the true miracles of film history. What keeps nourishing me over the years is the spell the film casts, how it weaves the mystery of the obsession of creativity, of the creative drive. It all comes down to that wonderful exchange early in the film when Anton Walbrook 
                confronts Moira Shearer at a cocktail party.‘Why do you want to dance?’ he asks, and she answers, ‘Why do you want to live?’ The look on his face is extraordinary.’ Over the years, I’ve thought a lot about that exchange. It expresses so much about the burning need for art –the mystery of the passion to create. It’s not that you want to do it, it’s that you have to do it. You have no choice.
                 You have to live it and it comes with a price. But what a time paying it.</p>
                <p style={{ marginTop: '15px' }}>[on, The Red Shoes (1948)]”</p>
                <p style={{marginRight:'55px' , float : "right"}}><i><b>-Martin Scorcese</b></i></p>
           </div>
        </div>
      </div>
    
      <div className="content2">
        <div className="sr-logo">
          <img src={image2} alt="satyajitray.png" />
          <div className="sr-description">
            <p>"What is attempted in these film is of course a synthesis. But it can be seen by someone who has his feet in both cultures. Someone who will bring to bear on the films involvement
               and detachment in equal measure." </p>
            <p style={{marginTop:'15px',float:"left"}}><i><b>-Satyajit Ray</b></i></p>
          </div>
        </div>
      </div>
      <div className="content3">
        <h1>What Is Meant By Cinema And Filmmaking????</h1>
          <ReactPlayer light={true} //will apply the light play button on video
          controls={true} url={"https://www.youtube.com/watch?v=nZWceRO94dM&pp=ygUkd2h5IHNob3VsZCB3ZSBsZWFybiBhYm91dCBmaWxtbWFraW5n"}
          height="500px" width="750px"/>
       
      </div>
      <div className="content4">
        <a href="https://en.wikipedia.org/wiki/Alfred_Hitchcock">
        <img src={image3} alt="alfred-hitchcock.png" 
        style={{height:'225px', width:'400px'}} />
        </a>
      </div>
      <div className="content5">
        <a href="https://nofilmschool.com/Steven-Spielberg-Quotes">
        <img src={image4} alt="alfred-hitchcock.png" 
        style={{height:'225px', width:'400px'}} />
        </a>
      </div>
      
    </div>

  
  );
}

export default Navhome;
