import React, { Component } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

export class App extends Component {
    state = {
        videos: []
    }

    formSubmit = async term =>{
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: res.data.items });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onTermSubmit={this.formSubmit} />
                <VideoList videos={ this.state.videos } />
            </div>
        )
    }
}

export default App
