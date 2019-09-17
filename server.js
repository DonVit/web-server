const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

// Create a new instance of express
const app = express()

app.use(express.urlencoded())

app.use(serveStatic(path.join(__dirname, 'public')))

// Tell our app to listen on port 8080
app.listen(8080, function(err) {
  if (err) {
    throw err
  }

  // eslint-disable-next-line no-console
  console.log('Server started on port 8080')
})
