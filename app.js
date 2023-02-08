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
            alt: "Neil deGrass Tyson in a suit, looking good",
        },
        {
            src:"https://3.bp.blogspot.com/-jeTseRMwjJY/UyCn2KxGXwI/AAAAAAAAbxU/mKDj8HJXol0/s1600/neil-degrasse-tyson.jpg",
            alt: "Neil deGrass Tyson body language",
        },
        {
            src:"https://www.thewrap.com/wp-content/uploads/2015/08/neil-degrasse-tyson.jpg",
            alt: "Neil deGrass Tyson on national geographics engaged in explanation",
        },
        {
            src:"https://startalkmedia.com/wp-content/uploads/2019/08/More-Science-in-Pop-Fiction_Neil-deGrasse-Tyson-Charles-Liu-and-Chuck-Nice_Credit_StarTalk_1400x975.jpg",
            alt: "Neil deGrass Tyson on StarTalk",
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
