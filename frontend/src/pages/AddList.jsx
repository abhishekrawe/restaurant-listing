import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddList() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    address: "",
    contact: "",
    picture: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setRestaurant(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  console.log(restaurant);

  const handleClick = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5500/restaurant", restaurant)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Add New Restaurant to the List</h1>
      <input type="text" placeholder="name" onChange={handleChange} name="name" />
      <input type="text" placeholder="address" onChange={handleChange} name="address" />
      <input type="text" placeholder="contact" onChange={handleChange} name="contact" />
      <input type="text" placeholder="picture" onChange={handleChange} name="picture" />
      <button onClick={handleClick}>Add Restaurant</button>
    </div>
  )
}

export default AddList;
