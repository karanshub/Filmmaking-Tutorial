import React from "react";
import ReactPlayer from 'react-player';
import "./Tutorial.css";

import video1 from "../Videoplayer/Cinematic_Composition.mp4";
import video2 from "../Videoplayer/Filmmaking_Basics.mp4";
import video3 from "../Videoplayer/Beginners_Cinematography.mp4";
import video4 from "../Videoplayer/Beginners_video.mp4";
import video5 from "../Videoplayer/Solo_Filmmaking.mp4";
import video6 from "../Videoplayer/Videography_Basics.mp4";
import video7 from "../Videoplayer/Camera_composition.mp4";
import video8 from "../Videoplayer/Camera_Angles.mp4";
import video9 from "../Videoplayer/One_camera.mp4";
import video10 from "../Videoplayer/Smartphone_camera.mp4";
import video11 from "../Videoplayer/Camera_movement.mp4";

import { useState } from 'react';

function Tutorial() {
    const [searchQuery, setSearchQuery] = useState("");

    const videos = [
        { url: video1, title: "Cinematic Composition",description: "Learn about cinematic composition techniques." },
        { url: video2, title: "Filmmaking Basics",description: "Discover the fundamental concepts of filmmaking." },
        { url: video3, title: "Beginners Cinematography",description: "Introduction to cinematography for beginners."  },
        { url: video4, title: "Video Production", description: "Guidance for beginners in video production." },
        { url: video5, title: "Solo Filmmaking",description: "Tips and tricks for solo filmmaking projects."},
        { url: video6, title: "Videography Basics",description: "Learn basic things and ideas about videography."},
        { url: video7, title: "Camera Composition",description: "Learn about camera composition techniques." },
        { url: video8, title: "Camera Angles",description: "12 Camera Angles that can enhance your films." },
        { url: video9, title: "Single Camera Shot",description: "How to shoot a scene with one camera."},
        { url: video10, title: "Phone Camera", description: "Shot a camera scene using smartphone." },
        { url: video11, title: "Camera movement",description: "The guide for different camera movements."}
    ];

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

   
    return (
       
        <div className="tutorial">
            <div className="input-container">
            <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            </div>

            <div className="video-list">
            {filteredVideos.map((video, index) => (
                <div key={index} className="video-container" >
                       <ReactPlayer
                        light={true}
                        controls={true}
                        url={video.url}
                        width="320px"
                        height="180px"
                    />
                    <div className="video-info">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    </div>
                 
                </div>
            ))}
            </div>

           
        </div>
    
    );
}

export default Tutorial;
