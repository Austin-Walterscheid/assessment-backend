const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getFate } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get("/api/fortune", getFortune)
app.get("/api/fate", getFate)

app.put('/api/compliments/:newCompliments', (req, res) => {
    let existingCompliments = req.params.newCompliments
    let newCompliments = req.body.newCompliments
    for (let i = 0; i < getCompliment.length; i++) {
        if (getCompliment[i].username === existingCompliments) {
            getCompliment[i].compliments = newCompliments
            res.status(200).send("Compliments updated")
            return
        }
    }
    res.status(400).send("Compliments not found")
})


const deleteFate = () => {
    app.delete('/api/fate/:Heaven', (req, res) => {
        let existingFate = req.params.fates
        for (let i = 0; i < getFate.length; i++) {
            if (getFate[i].fates === existingFate) {
                fates.splice(i, 1)
                res.status(200).send('fate deleted.')
                return
            }
        }
        res.status(400).send("fate not found")
    })
}

app.post('/api/dragons', (req, res) => {
    console.log(req.body)
    let name = req.body.name
    let  type= req.body.type
    let size = req.body.size
    res.status(200).send(`Hello ${name}! you are a ${type} and are classified as a ${size} dragon!`)
  })




app.listen(4000, () => console.log("Server running on 4000"));






