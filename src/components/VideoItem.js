import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    const { thumbnails: {medium: { url }}, title, description} = video.snippet;
    
    return (
<<<<<<< HEAD
        <div className="item" onClick={() => onVideoSelect(video)}>
            <img src={url} alt={description} className="ui image" />
            <div className="content">
                <div className="header">{title}</div>
            </div>
=======
        <div className="videoItem">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
>>>>>>> 5c26ee0ede2a3c16066866d7eb9b58bbf8b34284
        </div>
    )
}

export default VideoItem
