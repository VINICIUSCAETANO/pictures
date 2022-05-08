import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID ImZ6FQkII0CtazperPTEYK0Gv9w4QSd7RmyKnU_Frus'
            }
        }).then(response => console.log(response))
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App;