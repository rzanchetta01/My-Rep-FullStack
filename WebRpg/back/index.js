const express = require('express')
const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
var cors = require('cors')
const app = express()

const item = mongoose.model('api_rpg',{
    nome : String,
    descricao : String
})

app.use(
    express.urlencoded({
        extended: true
    }),
    cors(),
    express.json()
)

app.get('/api', async (req, res) =>{
    try {
        const data = await item.find()
        res.status(200).json(data)
    } catch (error){console.log(error)}
    
})

//mongodb+srv://admin:<password>@apirpg.zmnvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://admin:aiJ9uIFNBJeOfL0O@apirpg.zmnvg.mongodb.net/api_rpg?retryWrites=true&w=majority
//admin
//aiJ9uIFNBJeOfL0O

mongoose
.connect('mongodb+srv://admin:aiJ9uIFNBJeOfL0O@apirpg.zmnvg.mongodb.net/bdCloud?retryWrites=true&w=majority')
.then(
    console.log('api online'),
    app.listen(3001)
).catch(err => console.log(err))

