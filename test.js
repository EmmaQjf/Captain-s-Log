require("dotenv").config()
const express = require("express")
const jsxEngine = require("jsx-view-engine")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const Log = require('./models/Log')

const app = express()
const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log("Connected to mongoDB")
})

//middleware 
// do not remember the syntax 
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'));

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

app.delete('/logs/:id', async(req, res)=> {
    try {
         await Log.findOneAndDelete({_id: req.params.id})
         //do not remember the syntax of then...
         .then(() => {
            res.redirect("/logs")
         } )
    } catch(error) {
        res.status(400).send({message: error.message})
    }
})

//UPDATE
app.put('/logs/:id', async(req, res)=> {
    //forgot to do the checkbox change the value from on to true
    if(req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try {
        await Log.findOneAndUpdate({_id: req.params.id},
            //forget the syntax of the findoneandupdate
            req.body, {new: true})
        .then(() => {
            //was not sure the correct structure of the ${req.params.id}
            // be sure to use the backtick when use the ${}
            res.redirect(`/logs/${req.params.id}`)
      })
    } catch(error) {
        res.status(400).send({message: error.message})
    }
})

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

app.get('/logs/:id/edit', async(req, res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})
        //  res.send(foundLog)
        res.render('Edit', {
            log: foundLog
        })

    } catch(error) {
        res.status(400).send({message: error.message})
    }


})

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