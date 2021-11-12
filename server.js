
// Required modules to import
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const express = require('express');
const Scene = require('./models/scene');
const app = express()

// Connect to Mongoose

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });


/*****************/
/* Define routes */
/*****************/


// List entry route
app.get('/gallery', (req, res) => {
  // 3. Define `scene` array of objects using our model
  let scene = null
  Scene.find((err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    }
    else {
      scene = data
      console.log(data)
    if (typeof scene !== 'undefined' && Array.isArray(scene)) {
        res.send(scene)
    } else {    
        res.status(404)
        res.send({error: 'File Not Found'})      
    }}
  })
})

// Item route
app.get('/gallery/:title', (req, res) => {
  let character
  Scene.findOne({title: req.params.title}, function(err, data) {
    if(err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      character = data
      console.log(character)
      if (typeof character === 'object' && character !== null) {
        res.send(character)
      } else {
        res.status(404)
        res.send({error: 'File Not Found'})
      }
    }
  });
})

/****************************/
/* Handle 404, start server */
/****************************/

// Handle 404 errors with middleware
app.use(function(req, res) {

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