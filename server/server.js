const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://teamrocket:blast0ff@cluster0.gvgcv.mongodb.net/TeamRocketDB?retryWrites=true&w=majority'

app.use(express.urlencoded({ extended: true}))
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

app.listen(3000, function() {
console.log ('listening on port 3000')
})

app.get ('/',(req,res)=>{
  MongoClient.connect(connectionString, {useUnifiedTopology: true})
  .then(client => {
      console.log('Connected to the db')
      const db = client.db("TeamRocketDB")
      const questionsCollection = db.collection('questions')

  questionsCollection.find().toArray().then(results => {
    res.render('index.ejs', {questions: results});
  })
  .catch((error) => {
    res.redirect('/');
  });
});
});

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
        res.redirect('/')
        console.log(result)
    })
    .catch(error => console.error(error))
    })
    

})




