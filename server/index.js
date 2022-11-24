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

    let SQL = "INSERT INTO property (name, surname, email) VALUES (?,?,?)";
    db.query(SQL, [name, surname, email], (err,result) => {
        console.log(err);
    });
});


app.listen(3001, ()=>{
    console.log("rodando servidor");
});