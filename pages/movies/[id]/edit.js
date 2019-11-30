import React, { Component } from 'react'
import MovieCreateForm from '../../../components/MovieCreateForm'
import { getMovieById } from '../../../actions'

class EditMovie extends Component {

    // Need to get the query param, which available in/from the server
    static getInitialProps({ query }) {
        return { query }
    }

    state = {
        movie: {} //empty obj
    }

    componentDidMount() {
        // Fetching the data from the props
        const { id } = this.props.query 
        getMovieById(id).then(movie => {
            this.setState({ movie }) // setting the movie data to the state
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Edit Movie</h1>
                {JSON.stringify(this.state.movie)}
                <MovieCreateForm />
            </div>
        )
    }
}

export default EditMovie;