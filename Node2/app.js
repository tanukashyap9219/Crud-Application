const express = require('express')
const app = express()
const PORT = 5000
const route = require("./routes/route")
const cors  = require('cors')
app.use(express.json())
app.use(cors())
app.use(route)

// app.get("/", (req, res) => {
//     res.send("I am from aap.js")
// })

app.listen(PORT, () => {
    console.log(`Server is running... at ${"http://localhost:5000"}`)
})