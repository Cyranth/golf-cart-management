import express, { Application } from 'express'
import { configMiddleware } from '@/middleware'

export const app: Application = express()

app.use(configMiddleware)

app.get('/', (_req, res) => {
  res.send('Hello World!')
})
