const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://teamrocket:blast0ff@cluster0.gvgcv.mongodb.net/TeamRocketDB?retryWrites=true&w=majority'

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.listen(3000, function() {
console.log ('listening on port 3000')
})

app.get ('/',(req,res)=>{
res.sendFile(__dirname+'/index.html')
})

app.post ('/sendQuestion', (req, res)=>{

    // connect to db
    MongoClient.connect(connectionString, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to the db')
        const db = client.db('TeamRocketDB')
        const questionsCollection = db.collection('questions')

    // write the request to the the collections
    questionsCollection.insertOne(req.body)
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error))
    })
    
    res.redirect('/')

})