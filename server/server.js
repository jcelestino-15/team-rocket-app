const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://teamrocket:blast0ff@cluster0.gvgcv.mongodb.net/TeamRocketDB?retryWrites=true&w=majority'


app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  // connect to db
MongoClient.connect(connectionString, {useUnifiedTopology: true})
  .then(client => {
      console.log('Connected to the db')
      const db = client.db('TeamRocketDB')
      const questionsCollection = db.collection('questions')
    
      //Middlewares
      app.set('view engine', 'ejs')
      app.use(bodyParser.urlencoded({ extended: true}))
      app.use(bodyParser.json())
      app.use(express.static('public'))

      //Routes

      app.get ('/',(req,res)=>{
        db.collection('questions').find().toArray()
          .then(result => {
            res.render('index.ejs', { questions:results})
              console.log(results)
          })
          .catch(error => console.error(error))

      })

      app.post ('/sendQuestion', (req, res)=>{

        // write the request to the the collections
        questionsCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/')
            console.log(result)
        })
        .catch(error => console.error(error))
    
      })

    //listen

    app.listen(3000, function() {
        console.log ('listening on port 3000')
        })

})
.catch(console.error)




