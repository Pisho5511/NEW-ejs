const PORT = process.env.PORT||3000;
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/css', express.static(__dirname + 'public/img'))

app.get('/', (req,res)=> {
    res.render('home')
})

app.get('/about', (req,res)=> {
    res.render('about')
})





app.get('/', (req,res) =>{
    res.render('index')
})







app.listen(PORT, () => {
    console.log(`serer running on port ${PORT}`)
})