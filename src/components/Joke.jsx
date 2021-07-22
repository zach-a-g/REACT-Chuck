// Add the { Component } to the import line so that you dont have to call react.component anywhere in the code
import React, { Component } from 'react';

// Don't have to call the render method in a component method, but you do in a class based
class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke:'',
            isLoading: false
        }
    }

    componentDidMount() {
        console.log("COMPONENT MOUNTED! WE HAVE A DOM NODE NOW!")
    }


    _fetchJoke = () => {
        this.setState({
                isLoading: true  
            }, async () => {
            const response = await fetch(
                'https://api.chucknorris.io/jokes/random?category=dev'
            ).then(response => response.json());
            this.setState({
                joke: response.value,
                isLoading: false
                });
            }
        );
    };

    render() {
        const { joke, isLoading } = this.state;
        return (
            <>
                <h2>{!!isLoading? "Loading..." : joke}</h2>
                <button type="button" onClick={this._fetchJoke}>Get a Joke</button>
            </>
        )
    }
}

export default Joke;
