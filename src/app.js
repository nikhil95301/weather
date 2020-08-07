const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')



app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) =>{
    res.render('index',{
        title:'Weather ',
        name:'Andrew Mead'
    })
})
app.get('/about',(req,res) =>{
    res.render('about',{
        title: 'About me',
        name:'Andrew '
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        helpText: 'This is some helpful text',
    title:'Help',
    name: 'Andrew'
    })
})





app.get('/weather',(req,res) =>{
    res.send({
        forecast: 'It is snowing ',
        location: 'Philadelphia'
    })
})
app.get('/help/*',(req,res) =>{
    res.render('404',{
        title: '404',
        name: "andrew Mead",
        errorMessage: 'Help article not found'
    })
})
app.get('*',(req,res) =>{
    res.render('404',{
        title: '404',
        name : 'Andrew Mead',
        errorMessage : 'Page not found'
    })
})


app.listen(3000,() =>{
    console.log('server is up on port 3000')
})
console.log('hello')