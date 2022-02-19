const express = require('express');
const bodyParser=require('body-parser')
require('./db/dbConnection');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

//Import Routes
const photosRoute=require('./rooter/photos');
app.use('/photos',photosRoute);
const drawingsRoute=require('./rooter/drawings');
app.use('/drawings',drawingsRoute);

app.get('/',(req,res) => {
res.json({'mesaj':'açıldı'});
});

app.listen(3000,() =>  {
console.log("çalıştı")
});