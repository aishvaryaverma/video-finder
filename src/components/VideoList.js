import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoList = videos.map(video => <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />)

    return <div className="ui relaxed divided list videoList">{videoList}</div>
}

export default VideoList
