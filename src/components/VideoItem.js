import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div className="videoItem">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
        </div>
    )
}

export default VideoItem
