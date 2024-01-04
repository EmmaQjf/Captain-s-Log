const router = require('express').Router();
const Log = require('../models/Log')

//INDEX
router.get('/',async(req, res)=> {
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
router.get('/new', (req, res) => {
    res.render('New')
})

//DELETE

router.delete('/:id', async(req, res)=> {
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
router.put('/:id', async(req, res)=> {
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
router.post('/', async(req, res) => {
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

router.get('/:id/edit', async(req, res) => {
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

router.get('/:id', async(req, res) => {
    try {
        const foundLog = await Log.findOne({_id: req.params.id})
        res.render('Show', {
            log: foundLog
        })

    } catch(error) {
        res.status(400).send({message: error.message})
    }

})

module.exports = router