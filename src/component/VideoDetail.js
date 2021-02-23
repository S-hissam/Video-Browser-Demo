import React from 'react'



const VideoDetail = ({ video }) => {
    if (!video){
        return <div> Loading... </div>
    }
    const SrcVideo = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="ui segment">
            <div className=" ui embed"> 
                <iframe src={SrcVideo} rel="0" controls="0" showinfo="0"/>
                
            </div>
            <div className="ui header"> {video.snippet.title} </div>
            <p>{ video.snippet.description}</p>
        </div>

    );
};

export default VideoDetail;