var express= require('express')
var path=require('path')
var  item=require('./route/frontlink')
var  item1=require('./route/backlink')
require('ejs')
const { auth } = require('express-openid-connect');
const client= require("mongodb").MongoClient

var app=express()

// const config = {
//   authRequired: true,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:3000',
//   clientID: 'nhxilmGqq56NYHHPfMGqGjy0szDFChPl',
//   issuerBaseURL: 'https://dev-musy3u01sxeq7da5.us.auth0.com'
// };


// app.use(express.static(path.join(__dirname, '/public')))
// app.set('view engine', 'ejs')
// app.set('views', './views')
// app.use('/', item)
// // app.use(auth(config));
// app.use('/', item1)
const url="mongodb://127.0.0.1:27017/"
async function con(){
  await client.connect(url, function(err, res){
    if(err) throw err;
    console.log("connection was successful")
  })
}

con()

app.listen(3000, function(){
    console.log("App running at port 3000")
})