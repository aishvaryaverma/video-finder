import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    const { thumbnails: {medium: { url }}, title, description} = video.snippet;
    
    return (
        <div className="item" onClick={() => onVideoSelect(video)}>
            <img src={url} alt={description} className="ui image" />
            <div className="content">
                <div className="header">{title}</div>
            </div>

        </div>
    )
}

export default VideoItem
