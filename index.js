const express = require('express');
require('./db/dbConnection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
res.json({'mesaj':'açıldı'});
});

app.listen(3000,() =>  {
console.log("çalıştı")
});