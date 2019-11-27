import React from "react";
import Link from 'next/link'

class Movielist extends React.Component {

  shorten = (text, maxlength) => {
    if (text && text.length > maxlength) {
      return text.substr(0, maxlength) + '...'
    }
    return text
  }

  renderMovies(movies) {

    return (
      movies.map(movie => (

        <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            <Link href='movies/[id]' as={`/movies/${movie.id}`}>
              <a>
                <img
                  className="card-img-top"
                  src={movie.image}
                  alt={movie.name}
                />
              </a>
            </Link>
            <div className="card-body">
              <h4 className="card-title">
                <Link href='movies/[id]' as={`/movies/${movie.id}`}>
                  <a>
                    {movie.name}
                  </a>
                </Link>
              </h4>
              <h5>{movie.releaseYear}</h5>
              <p className="card-text">
                {this.shorten(movie.description, 100)}
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{movie.rating}</small>
            </div>
          </div>
        </div>
      ))
    )

  }

  render() {
    const { movies } = this.props;

    return (
      <React.Fragment>
        {this.renderMovies(movies)}
      </React.Fragment>
    )
  }
}
export default Movielist;
