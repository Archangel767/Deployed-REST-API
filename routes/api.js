const express = require('express')
const router = express.Router()

/****************************/
/* Include API dependencies */
/****************************/

const scenery = require('./scenery')
const randomItem = require('./random-item')

/*********************/
/* Define API routes */
/*********************/

// List entry route
router.get('/scenery', (req, res) => {
  let randomCharacter = null; // for Random member filter
  let poisonedCharacter = null; // for Poisoned member filter

  if (req.query.filter === 'random') {   

    randomCharacter = randomItem(scenery)
    res.send(randomCharacter)

  } else if (req.query.filter === 'poisoned') {

    poisonedCharacter = scenery.filter(item => item.poisoned)
    res.send(poisonedCharacter)

  } else if (typeof scenery !== 'undefined' && Array.isArray(scenery)) {

    // Variable is an array!
    res.send(scenery)
    
  } else {
    
    console.log(scenery)

    res.status(404)
    res.send({error: 'File Not Found'})
    
  }

})

// Item route
router.get('/scenery/:name', (req, res) => {
  let character

  if (typeof scenery !== 'undefined' && Array.isArray(scenery)) {
    character = scenery.find(item => req.params.name === item.name) // Use Array.find() here
  } else {
    character = null;
  }
  
  if (typeof character === 'object' && character !== null) {
    res.send(character)
  } else {
    res.status(404)
    res.send({error: 'File Not Found'})
  }
})

module.exports = router

