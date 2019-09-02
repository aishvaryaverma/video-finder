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

    componentDidMount() {
        // this.formSubmit('buildings');
    }

    formSubmit = async term => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0]
        });
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onTermSubmit={this.formSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={ this.state.videos } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
