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
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
            <p>Some Random Text</p>
        </div>
    )
}

Movie.getInitialProps = async () => {
    const movie = await  getMovieById('2')
    return { movie }
}

export default Movie;