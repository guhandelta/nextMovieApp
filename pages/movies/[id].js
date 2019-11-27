//This folder will hold all the pages for the movies and since id will be changing for every movie, a static name can't be given,-
//- but with the dynamic routing, offerred by Next.js, the name of the page should be enclosed by [], to inform Next.js as, this-
//- page will be dynamic
import { useRouter } from 'next/router'
import { getMovieById } from '../../actions'

const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query // this var is given as id, as per the file name
    const { movie } = props
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>{movie.genre}</p>
                <p className="lead">
                    {movie.longDesc}
                </p>
            </div>
        </div>
    )
}

Movie.getInitialProps = async ({ query }) => { //context obj from Next.js
    const movie = await getMovieById(query.id)
    return { movie }
}

export default Movie;