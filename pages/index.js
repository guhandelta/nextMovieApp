import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Sidenav, Carousel, Movielist, Footer } from "../components";
import { getMovies, getCategories } from '../actions'


const Home = (props) => { // The data from getInitialProps will be available in the props of the component
  const { images, categories } = props
  debugger
  return (
    <div>

      <Navbar />

      <div className="base-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidenav
                categories={categories}
                appName={"Movie DB"}
              />
            </div>
            <div className="col-lg-9">
              <Carousel images={images} />
              <div className="row">
                <Movielist movies={props.movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async () => { // async -> as this fn() will be receiving and dealing with promises
  console.log('Console log from home getInitialProps')
  const movies = await getMovies(); // returns res.body -> Promise and the data can be extracted from a promise using await
  const categories = await getCategories();
  const images = movies.map(movie => ({
    id: `img-${movie.id}`,
    url: movie.cover,
    name: movie.name
  }));
  return {
    movies, //movies: movies
    images,
    categories
  }
}

// class Home extends React.Component {

//   static async getInitialProps() {// Static fn() are not tied to any class, so it may be called with the class and obj is not requried
//     // with this fn(), the page sent to the browser will be prefilled with the data
//     const movies = await getMovies();

//     return { // Data returned by getInitialProps() are available in the props of the component
//       movies // => movies:movies
//     }
//   }

//   // constructor(props) { // with getInitialProps, the state, with movies are error Message, no longer is true
//   //   super(props)
//   //   this.state = {
//   //     movies: [],
//   //     errorMessage: ''
//   //   }
//   // }
//   // Called only once, when the component is mounted/ added into the DOM tree
//   // async componentDidMount() {
//   //   const movies = await getMovies()
//   //   this.setState({ movies })
//   // }

//   // Called only on the clientside
//   // componentDidMount() { // getMovies(), returns a promise and this is an alternative for not using async/await
//   //   getMovies().then((movies) => {
//   //     this.setState({ movies })
//   //   })
//   //     .catch((error) => { // Settng the error message to the state
//   //       this.setState({ errorMessage: error })
//   //     })
//   // }
//   render() {

//     const { movies } = this.props;

//     return (
//       <div>
//         <Head>
//           <title>Home</title>
//           <link
//             rel="stylesheet"
//             href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//             integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//             crossOrigin="anonymous"
//           />
//           <script
//             src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//             integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//             crossOrigin="anonymous"
//           ></script>
//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//             integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//             crossOrigin="anonymous"
//           ></script>
//           <script
//             src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//             integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//             crossOrigin="anonymous"
//           ></script>
//         </Head>

//         <Navbar />

//         <div className="home-page">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-3">
//                 <Sidenav
//                   appName={"Movie DB"}
//                 />
//               </div>
//               <div className="col-lg-9">
//                 <Carousel />
//                 <div className="row">
//                   <Movielist movies={movies} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//         <style jsx>
//           {`
//             .home-page {
//               padding-top: 75px;
//             }
//           `}
//         </style>
//       </div>
//     );
//   }
// };
export default Home;
