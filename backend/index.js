import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass123",
  database: "test",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Welcome To My Backend");
});

app.get("/restaurant", (req, res) => {
  const q = "SELECT * FROM restaurant";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/restaurant", (req, res) => {
  const q =
    "INSERT INTO restaurant (`name`,`address`, `contact`, `picture`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.address,
    req.body.contact,
    req.body.picture,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Resturant has created succefully🎉");
  });
});


app.delete("/restaurant/:id" , (req, res) => {
  const restaurantId = req.params.id;
  const q = "DELTE FROM restaurant WHERE id = ?";

  db.query(q, [restaurantId], (err, data) => {
     if (err) return res.json(err);
     return res.json("Restaurant has Deleted succefully🎉");
  })
})


app.put("/restaurant/:id", (req, res) => {
  const restaurantId = req.params.id;
  const q = "UPDATE restaurant SET `name` = ?, `address` = ?, `contact` = ?, `picture` = ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.address,
    req.body.contact,
    req.body.picture,
  ];

  db.query(q, [...values,restaurantId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Restaurant has been Updated succefully🎉");
  });
});

app.listen(5500, () => {
  console.log("Welcome To My Backend");
});
