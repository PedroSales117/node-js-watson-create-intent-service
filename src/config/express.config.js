import express from 'express'

export const app = express()
export const router = express.Router()

const PORT = 8080

app.use(express.json())
app.use(express.static('public'))

app.listen(PORT, () => console.log(`listening http://localhost:${PORT}`));
