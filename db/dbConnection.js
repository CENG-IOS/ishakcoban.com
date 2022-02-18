const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ishakcoban',{useUnifiedTopology: true, useNewUrlParser: true})
.then(()=>console.log("bağlandı"))
.catch(()=>"başarısız bağlantı");
