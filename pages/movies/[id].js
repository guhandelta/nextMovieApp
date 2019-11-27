//This folder will hold all the pages for the movies and since id will be changing for every movie, a static name can't be given,-
//- but with the dynamic routing, offerred by Next.js, the name of the page should be enclosed by [], to inform Next.js as, this-
//- page will be dynamic
import { useRouter } from 'next/router'

const Movie = () => {
    const router = useRouter()
    const { id } = router.query // this var is given as id, as per the file name
    return (
        <div className="container">
            <h1>Movie with id: {id}</h1>
        </div>
    )
}
export default Movie;