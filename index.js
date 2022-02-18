const express = require('express');
const bodyParser=require('body-parser')
require('./db/dbConnection');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

//Import Routes
const photosRoute=require('./rooter/photos');
app.use('/photos',photosRoute);

app.get('/',(req,res) => {
res.json({'mesaj':'açıldı'});
});

app.listen(3000,() =>  {
console.log("çalıştı")
});