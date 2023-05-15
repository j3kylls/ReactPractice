import React from 'react'
import ReactPlayer from 'react-player'
import { useState, useEffect } from 'react';


const videoUrls = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://www.youtube.com/watch?v=2ZIpFytCSVc",
  "https://www.youtube.com/watch?v=KMU0tzLwhbE",
];

export default function () {
  const [urlIndex, setUrlIndex] = useState(0);
  useEffect(() => {
    setUrlIndex(Math.floor(Math.random() * videoUrls.length));
  }, []);
  return (
    <>

    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        border: "10px solid 6fe87f",
      }}>
    <h1 style={{ color: '#6fe87f' , fontWeight: 'bold'}}>Today's Recommended Workout</h1>
    <ReactPlayer controls width='720px' height='360px' url={videoUrls[urlIndex]}/> 
    </div>
    </>
  )
}
