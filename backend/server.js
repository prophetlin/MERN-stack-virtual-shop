import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connnectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// import products from './data/products.js'

import productRoutes from './route/productRoutes.js'
dotenv.config()

connnectDB()

const app = express()

// app.use((req, res, next) => {
//   console.log('Hello')
//   next()
// })

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)
// app.get('/api/products', (req, res) => {
//   res.json(products)
// })

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id)
//   res.json(product)
// })

// const notFound = (req, res, next) => {
//   const error = new Error(`Not Found - ${req.originalUrl}`)
//   res.status(404)
//   next(error)
// }

// const errorHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode
//   res.status(statusCode)
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//   })
// }

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold,
  ),
)
