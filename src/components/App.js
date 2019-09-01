import React, { Component } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

// Styles added
import './app.css';

export class App extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    formSubmit = async term =>{
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: res.data.items });
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onTermSubmit={this.formSubmit} />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={ this.state.videos } />
            </div>
        )
    }
}

export default App
