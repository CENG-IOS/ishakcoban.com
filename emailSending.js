const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({

    service: 'hotmail',
    auth:{
        user: "gtnw2134@outlook.com",
        pass: "Efsane2134"
    }

})

const options = {
    from: "gtnw2134@outlook.com",
    to: "ishakcoban99@outlook.com",
    subject: "Sending email with node",
    text: "eeeeeeeeeeeeeeeeeeeeeeee"
}

transporter.sendMail(options,function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Sent" + info.response)
})