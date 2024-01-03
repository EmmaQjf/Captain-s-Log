require("dotenv").config()
const express = require("express")
const jsxEngine = require("jsx-view-engine")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log("Connected to mongoDB")
})

//middleware 
app.use(express.urlencoded({extended: true}))

//set up view engine 
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())



//INDEX

//NEW
app.get('/logs', (req, res) => {
    res.render('New')
})

//DELETE

//UPDATE

//CREATE
// app.post('/logs', async(req, res) => {
//     if(req.)

// })

//EDIT

//SHOW

app.listen(PORT, () => {
    console.log(`the port at ${PORT} is connected`)
})