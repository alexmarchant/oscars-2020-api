import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.sendStatus(200)
})

const port = 3001
app.listen(port, () => console.log(`Listening on port ${port}!`))