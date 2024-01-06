const router = require('express').Router();
const FoodLog = require('../models/FoodLog')

//INDEX
router.get('/',async(req, res)=> {
    try {
        const foundFoodLogs = await FoodLog.find({})

        res.render('foodLog/foodIndex', {
            logs: foundFoodLogs 
        })

    } catch(error) {
        res.status(400).send({message: error.message})
    }
    
})

//NEW
router.get('/new', (req, res) => {
    res.render('foodLog/FoodNew')
})

//DELETE

router.delete('/:id', async(req, res)=> {
    try {
         await FoodLog.findOneAndDelete({_id: req.params.id})
         //do not remember the syntax of then...
         .then(() => {
            res.redirect("/foodlogs")
         } )
    } catch(error) {
        res.status(400).send({message: error.message})
    }
})

//UPDATE
router.put('/:id', async(req, res)=> {
    //forgot to do the checkbox change the value from on to true
    if(req.body.foodIsFrozen === "on"){
        req.body.foodIsFrozen = true
    } else {
        req.body.foodIsFrozen = false
    }
    try {
        await FoodLog.findOneAndUpdate({_id: req.params.id},
            //forget the syntax of the findoneandupdate
            req.body, {new: true})
        .then(() => {
            //was not sure the correct structure of the ${req.params.id}
            // be sure to use the backtick when use the ${}
            res.redirect(`/foodlogs/${req.params.id}`)
      })
    } catch(error) {
        res.status(400).send({message: error.message})
    }
})

//CREATE
router.post('/', async(req, res) => {
    if(req.body.foodIsFrozen === "on"){
        req.body.foodIsFrozen = true
    } else {
        req.body.foodIsFrozen = false
    }
    // try {
        const createdFoodLog = await FoodLog.create(req.body);
        res.redirect(`/foodlogs/${createdFoodLog._id}`)
    // } catch (error) {
    //     res.status(400).send({message: error.message})
    // }
        
})

//EDIT

router.get('/:id/edit', async(req, res) => {
    try {
        const foundFoodLog = await FoodLog.findOne({_id: req.params.id})
        //  res.send(foundLog)
        res.render('foodLog/foodEdit', {
            log: foundFoodLog
        })

    } catch(error) {
        res.status(400).send({message: error.message})
    }


})

//SHOW

router.get('/:id', async(req, res) => {
    try {
        const foundFoodLog = await FoodLog.findOne({_id: req.params.id})
        res.render('foodLog/foodShow', {
            log: foundFoodLog
        })

    } catch(error) {
        res.status(400).send({message: error.message})
    }

})

module.exports = router