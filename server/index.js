const express =  require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"root",
    database:"property.rent",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req,res)=>{
    const{name} = req.body;
    const{surname} = req.body;
    const{email} = req.body;
    const{sex} = req.body;
    const{location} = req.body;
    const{price} = req.body;
    const{radius} = req.body;
    const{sharedrooms} = req.body;
    const{beds} = req.body;
    const{beths} = req.body;
    
    //alert(req.body.form);

    let SQL = "INSERT INTO property (name, surname, email, sex, location, price, radius, sharedrooms, beds, beths) VALUES (?,?,?,?,?,?,?,?,?,?)";
    db.query(SQL, [name, surname, email,sex, location, price, radius, sharedrooms, beds, beths], (err,result) => {
        console.log(err);
    });
});


app.listen(3001, ()=>{
    console.log("rodando servidor");
});