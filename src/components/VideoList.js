import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const videoList = videos.map((video, i) => <VideoItem key={i} video={video} />)

    return <div className="videoList">{videoList}</div>
}

export default VideoList
