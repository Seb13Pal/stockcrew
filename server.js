import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import 'dotenv/config';


const app = express();
const db = process.env.BDD_URL;
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./assets'))
app.use( express.static('./node_modules/bootstrap/dist/css'));
app.use(express.static('./node_modules/bootstrap/dist/js'));
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected to localhost 3000');
    }
})

mongoose.connect(db, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to database mongodb");
    }
})

app.get('/',(req,res)=>{
    let users = ["tom","abou", "seb"]
    res.render('pages/login.twig',{
      users: users  
    })
})



