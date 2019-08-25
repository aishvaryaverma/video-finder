import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div className="videoItem">
            <img src={video.snippet.thumbnails.medium.url} />
        </div>
    )
}

export default VideoItem
