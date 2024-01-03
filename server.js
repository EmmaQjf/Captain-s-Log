require("dotenv").config()
const express = require("express")
const jsxEngine = require("jsx-view-engine")
const mongoose = require("mongoose")
const Log = require('./models/Log')

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
app.get('/logs',async(req, res)=> {
    try {
        const foundLogs = await Log.find({})
        res.render('Index', {
            logs: foundLogs
        })

    } catch(error) {
        res.status(400).send({message: error.message})
    }
    
})

//NEW
app.get('/logs/new', (req, res) => {
    res.render('New')
})

//DELETE

//UPDATE

//CREATE
app.post('/logs', async(req, res) => {
    if(req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    // try {
        const createdLog = await Log.create(req.body);
        res.redirect(`/logs/${createdLog._id}`)
    // } catch (error) {
    //     res.status(400).send({message: error.message})
    // }
        
})

//EDIT

//SHOW

app.get('/logs/:id', async(req, res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})
        res.render('Show', {
            log: foundLog
        })

    } catch(error) {
        res.status(400).send({message: error.message})
    }

})

app.listen(PORT, () => {
    console.log(`the port at ${PORT} is connected`)
})