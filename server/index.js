const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler() // for the app to handle requests to teh server, properly

app.prepare().then(() => { // prepare() -> preparing the app to run => compile the code from pages component

    const server = express(); // creating an express server

    server.get('*', (req, res) => {// Default route
        //handle reqs, by providing the page, that is being navigaated to
        return handle(req, res)
    })

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, (err) => { // using handler to handle req to the server -> with the app listening on port PORT/3000
        // providing handler functionality to server middleware[server.use()] => which intercepts and handles all the GET req
        //server.get() -> matching & handling a specifc route, when req || server.use() -> bindingmiddleware to appl
        if (err) throw err;
        console.log('> Ready on Port ' + PORT)
    })
})