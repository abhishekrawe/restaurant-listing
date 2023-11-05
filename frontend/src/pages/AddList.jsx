import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Card, CardContent } from "@mui/material";
import axios from "axios";

function AddList() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    contact: "",
    picture: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRestaurant((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5500/restaurant", restaurant);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card variant="outlined" sx={{ maxWidth: 400 , paddingBottom: '25px' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <h1>Add Restaurant List</h1>
          <TextField
            fullWidth
            variant="outlined"
            label="Name"
            onChange={handleChange}
            name="name"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Contact number"
            onChange={handleChange}
            name="contact"
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Write your Full Address"
            onChange={handleChange}
            multiline
            rows={4}
            name="address"
          />
          <TextField
            fullWidth
            variant="standard"
            label="Paste the Image link here"
            onChange={handleChange}
            name="picture"
          />
        </CardContent>
        <Button variant="contained" size="medium" onClick={handleClick}>
          Add Restaurant
        </Button>
      </Card>
    </div>
  );
}

export default AddList;
