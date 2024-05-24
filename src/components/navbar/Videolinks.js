import React from "react";
import "./Videolinks.css";
import ReactPlayer from 'react-player'

function Videolinks() {
    return (
      <>
      <div className="links">
        <div className="videos">
        <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=KVBc2Pg81rw&pp=ygURZmlsbW1ha2luZyB2aWRlb3M%3D"} 
         height="180px" width="320px"/>
         <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=7TeEIBxSed0&pp=ygUaZGlyZWN0b3JzIGFib3V0IGZpbG1tYWtpbmc%3D"} 
         height="180px" width="320px"/>
         <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=zZJi_78XUVg&pp=ygUaZGlyZWN0b3JzIGFib3V0IGZpbG1tYWtpbmc%3D"} 
         height="180px" width="320px"/>
         <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=0CaDZamA2ok&pp=ygUaZGlyZWN0b3JzIGFib3V0IGZpbG1tYWtpbmc%3D"} 
         height="180px" width="320px"/>
         <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=NyZR59tMSt4&pp=ygUaZGlyZWN0b3JzIGFib3V0IGZpbG1tYWtpbmc%3D"} 
         height="180px" width="320px"/>
      </div>
      </div>
      <div className="video">
        <div className="video-links">
         <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=Vz8KWaiIRgg&pp=ygUaZGlyZWN0b3JzIGFib3V0IGZpbG1tYWtpbmc%3D"} 
         height="180px" width="320px"/>
         <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=9tpJkxUW6tI&pp=ygUaZGlyZWN0b3JzIGFib3V0IGZpbG1tYWtpbmc%3D"} 
         height="180px" width="320px"/>
         <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=FayaIgL9QMo&pp=ygUaZGlyZWN0b3JzIGFib3V0IGZpbG1tYWtpbmc%3D"} 
         height="180px" width="320px"/>
         <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=MYlgj1hwcYw&pp=ygUaZGlyZWN0b3JzIGFib3V0IGZpbG1tYWtpbmc%3D"} 
         height="180px" width="320px"/>
         <ReactPlayer light={true} //will apply the light play button on video
         controls={true} url={"https://www.youtube.com/watch?v=6V1Sm0WCtHU&pp=ygUaZGlyZWN0b3JzIGFib3V0IGZpbG1tYWtpbmc%3D"} 
         height="180px" width="320px"/>
      </div>
      </div>
      </>
    );
  }
  
  export default Videolinks;
  