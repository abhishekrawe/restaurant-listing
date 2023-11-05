import express from  "express"
import mysql from "mysql"


const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"pass123",
    database:"test"
})

app.get("/", (req,res)=> {
   res.json("Welcome To My Backend");
})

app.get("/restaurant", (req, res) => {
  const q = "SELECT * FROM restaurant";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(5500, () => {
    console.log("Welcome To My Backend");
})
