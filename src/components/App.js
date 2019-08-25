import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

export class App extends Component {
    formSubmit = async term =>{
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        console.log(res)
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onTermSubmit={this.formSubmit} />
            </div>
        )
    }
}

export default App
