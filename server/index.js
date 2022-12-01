const express =  require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"root",
    database:"property.rent",
});




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
    
    

    let SQL = "INSERT INTO property (name, surname, email, sex, location, price, radius, sharedrooms, beds, beths) VALUES (?,?,?,?,?,?,?,?,?,?)";
    db.query(SQL, [name, surname, email,sex, location, price, radius, sharedrooms, beds, beths], (err,result) => {
        console.log(err);
    });
    
});

app.get('/users', function (req, res) {
    
    db.getConnection(function (err, connection) {
    
    connection.query('SELECT * FROM property', function (error, results, fields) {
      
      res.send(results)
    });
  });
});





//app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));


app.listen(3000, ()=>{
    console.log("rodando servidor");
});