const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.json('Hello from my sample app!')
})

app.listen(PORT, (err) => {
	console.log(`Started on :${PORT}`)
})
