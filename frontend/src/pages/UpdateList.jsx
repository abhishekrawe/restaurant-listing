import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextField, Button, Card, CardContent } from "@mui/material";


function UpdateList() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    contact: "",
    picture: ""
  })

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setRestaurant(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  console.log(restaurant);

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.put("http://localhost:5500/restaurant/" + bookId, restaurant)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card variant="outlined" sx={{ maxWidth: 400, paddingBottom: '25px' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <h1>Update Restaurant List</h1>
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="name"
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Contact number"
              onChange={handleChange}
              name="contact"
              type="text"
              placeholder="contact"
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Write your Full Address"
              onChange={handleChange}
              placeholder="address"
              type="text"
              multiline
              rows={4}
              name="address"
            />
            <TextField
              fullWidth
              variant="standard"
              placeholder="text"
              label="Paste the Image link here"
              onChange={handleChange}
              name="picture"
            />
          </CardContent>
          <Button variant="contained" size="medium" onClick={handleClick}>
            Update
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default UpdateList;
