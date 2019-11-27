import App from 'next/app'
import Head from "next/head";
import { Navbar, Footer } from "../components";

class MovieApp extends App {

    static async getInitialProps(appContext) { // appContext is the custom name given here for the context obj that getInitialProps-
        //- receives from Next.js, which allows to prefill the page with Component props, before page load
        const appProps = await App.getInitialProps(appContext)
        return { ...appProps } // appProps: ...appProps, if not destructurized here and returned as {appProps}, then it will received as-
        //- appProps in the render() and passed to the Component as {appProps.pageProps}
    }

    render() {
        const { Component, pageProps } = this.props // appProps will be received here as pageProps
        return (
            <div className="">
                <Head>
                    <title>Home</title>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <script
                        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"
                    ></script>
                    <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossOrigin="anonymous"
                    ></script>
                    <script
                        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossOrigin="anonymous"
                    ></script>
                </Head>
                <Navbar />
                <div className="base-page">
                    <Component {...pageProps} />
                </div>
                <Footer />
                <style jsx>
                    {`
                        .base-page {
                            padding-top: 75px;
                        }
                    `}
                </style>
            </div>
        )
    }
}
export default MovieApp;