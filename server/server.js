const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const MongoClient = require('mongodb').MongoClient
const Question = require('../server/questions') 
require('dotenv').config();

const connectionString = process.env.DB_URL

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

app.post ('/sendResponse', (req, res)=>{

  // connect to db
  MongoClient.connect(connectionString, {useUnifiedTopology: true})
  .then(client => {
      console.log('Connected to the db')
      const db = client.db('TeamRocketDB')
      const responsesCollection = db.collection('student-response')

  // write the request to the the collections
  responsesCollection.insertOne(req.body)
  .then(result => {
      res.redirect('/')
      console.log(result)
  })
  .catch(error => console.error(error))
  })
})
    
app.get('/questionsFromProfessor', (req, res) => {

  //  api --> /questionsFromProfessor?token=jessie
  console.log("Get /questionsFromProfessor")
  console.log("******"+req.query.token)
  MongoClient.connect(connectionString, {useUnifiedTopology: true})
  .then(client => {
      console.log('Connected to the db')
      const db = client.db('TeamRocketDB')
      const questionsCollection = db.collection('questions')
      
  questionsCollection.findOne({token: req.query.token}, function(err, result) {
      if (result == null) {
        res.statusCode = 204
      };
      res.send(result);
    });
  });
})


