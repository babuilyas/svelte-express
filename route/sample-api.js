import express from 'express'
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('Homepage for API')
});

// define the about route
router.get('/books', (req, res) => {
  res.status(400).send('Not implemented');
});

export { router } 