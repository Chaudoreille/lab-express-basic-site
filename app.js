/** 
 * Requires
 */

const express = require("express")
const hbs = require("hbs")
/**
 * Create app object
 */

const app = express()

/**
 * Setup
 */

app.use(express.static(`${__dirname}/public`))
app.set("view engine", "hbs")
hbs.registerPartials(`${__dirname}/views/partials`)

/**
 * Routing
 */
app.get('/', (req, res) =>{
    res.render("Home", {title: "Home"})
})

app.get('/about', (req, res) => {
    res.render("About", {title: "About"})
})

app.get('/works', (req, res) => {
    res.render("Works", {title: "Works"})
})

app.get('/gallery', (req, res) => {
    const galleryImages = [
        {
            src: "https://cdn.britannica.com/06/202006-050-64C85CC7/Neil-deGrasse-Tyson-2018.jpg",
            alt: "Neil deGrass Tyson in a suit",
        },
    ]
    res.render("Gallery", {title: "Gallery", gallery: galleryImages})
})

app.get("*", (req, res) =>{
    res.status = 404;
    res.send()
})

/**
 * Add port listening
 */
const listeningPort = 3000
app.listen(listeningPort, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log(`http://127.0.0.1:${listeningPort}`)
    }
})
