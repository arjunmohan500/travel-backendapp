const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { travelmodel } = require('./models/Travel')

const app = express()

app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://arjun:arjun2001@cluster0.jyq1ewu.mongodb.net/traveldb?retryWrites=true&w=majority&appName=Cluster0")

app.post('/add', (req, res) => {
    let input = req.body
    let travel = new travelmodel(input)
    travel.save()
    res.json({ "status": "success" })

})


app.get('/view', (req, res) => {
    travelmodel.find().then((data) => {
        res.json(data)
    }

    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.post('/search', (req, res) => {
    let input = req.body
    console.log(input)
    travelmodel.find(input).then((data) => {
        res.json(data)
    }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.listen(8081, () => {
    console.log("server started")
})