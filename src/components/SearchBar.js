import React, { Component } from 'react';

export class SearchBar extends Component {
    state ={
        term: ''
    }

    onInputChange = e => this.setState({ [e.target.name]: e.target.value })

    onFormSubmit = async e => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment searchBar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="input">Search Videos</label>
                        <input
                            type="text"
                            id="input"
                            name="term"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
