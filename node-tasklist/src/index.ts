import express, { request } from 'express'

const app = express()

app.use(express)

app.get('/', (request, response) => {
  return response.json({
    message: 'OK',
  })
})

app.listen(3333, 'OKOKOK')
