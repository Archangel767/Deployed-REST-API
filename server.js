/******************/
/* Import Modules */
/******************/
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()

const scenery = require('./scenery')

/*****************/
/* Define routes */
/*****************/

// List entry route
app.get('/api/scenery', (req, res) => {
  if (req.query.filter === 'random') {   

    randomScene = randomItem(scenery)
    res.send(randomScene)

  } else if (typeof scenery !== 'undefined' && Array.isArray(scenery)) {

    // Variable is an array!
    res.send(scenery)

  } else {

    res.status(404)
    res.send({error: 'File Not Found'})
    
  }

})

// Item route
app.get('/api/scenery/:id', (req, res) => {
  let scene

  if (typeof scenery !== 'undefined' && Array.isArray(scenery)) {
    scene = scenery.find(item => req.params.name === item.name) // Use Array.find() here
  } else {
    scene = null;
  }
  
  if (typeof scene === 'object' && scene !== null) {
    res.send(scene)
  } else {
    res.status(404)
    res.send({error: 'File Not Found'})
  }
})

/****************************/
/* Handle 404, start server */
/****************************/

// Handle 404 errors with middleware
app.use((req, res) => {

  // If path starts with `/api`, send JSON 404
  if (req.url.startsWith('/api')) {

    res.status(404)
    res.send({error: 'File Not Found'})

  } else {
  
    // else send HTML 404
    res.status(404)
    res.send('<h1>404: File Not Found</h1>')

  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});