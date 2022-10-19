import { createIntentRouter } from './routes/create-intent.js'
import { app } from './config/express.config.js'

app.use('/createIntent', createIntentRouter)
