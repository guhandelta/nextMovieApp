const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler() // for the app to handle requests to teh server, properly

const moviesData = require('./data.json')

app.prepare().then(() => { // prepare() -> preparing the app to run => compile the code from pages component

    const server = express(); // creating an express server
    server.use(bodyParser.json())//will parse the req & make it available in req.body obj -> this is done before all end points are exe

    server.get('/api/v1/movies', (req, res) => {
        return res.json(moviesData)
    })

    server.get('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params

        const movie = moviesData.find(m => m.id === id)

        return res.json(movie)
    })

    server.post('/api/v1/movies', (req, res) => {
        const movie = req.body
        console.log(JSON.stringify(movie))
        return res.json({ ...movie, createdTime: 'Today', author: 'Guhaprasaanth' })
    })

    server.delete('/api/v1/movies/:id', (req, res) => {
        const { id } = req.params
        return res.json({ message: `Deleteting the movie with the id: ${id}` })
    })

    server.get('/faq', (req, res) => {
        res.send(`<html><head></head><body><h1>Hello World!</h1></body></html>`)
    })

    server.get('*', (req, res) => {// Default route
        //handle reqs, by providing the page, that is being navigaated to
        return handle(req, res)
    })

    const PORT = process.env.PORT || 3000;

    // This is an API endpoint, as it accesses data of the appl to serve the req
    server.use(handle).listen(PORT, (err) => { // using handler to handle req to the server -> with the app listening on port PORT/3000
        // providing handler functionality to server middleware[server.use()] => which intercepts and handles all the GET req
        //server.get() -> matching & handling a specifc route, when req || server.use() -> bindingmiddleware to appl
        if (err) throw err;
        console.log('> Ready on Port ' + PORT)
    })
})
