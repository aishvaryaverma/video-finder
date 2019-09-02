import React from 'react';

const VideoDetails = ({ video }) => {
    if(!video) return <div>Loading...</div>;

    return (
        <>
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} width="500" frameBorder="0" title={video.snippet.title}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </>
    );
}

export default VideoDetails
