import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createServer } from 'http'
import { Server } from 'socket.io'
import routes from './routes/index.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFoundHandler } from './middleware/notFoundHandler.js'
import { initSocket } from './socket/index.js'

// Load environment variables from .env file
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const httpServer = createServer(app)

// Initialize Socket.io
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
})
initSocket(io)

// Middleware
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Serve static files
app.use('/static', express.static(join(__dirname, 'public')))

// Routes
app.use('/api', routes)

// 404 Handler
app.use(notFoundHandler)

// Error Handler
app.use(errorHandler)

// Start the server
const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})