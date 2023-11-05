import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
      await axios.put("http://localhost:5500/restaurant/" +  bookId , restaurant)
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Update the current Restaurant </h1>
      <input type="text" placeholder="name" onChange={handleChange} name="name" />
      <input type="text" placeholder="address" onChange={handleChange} name="address" />
      <input type="text" placeholder="contact" onChange={handleChange} name="contact" />
      <input type="text" placeholder="picture" onChange={handleChange} name="picture" />
      <button onClick={handleClick}>Update </button>
    </div>
  )
}

export default UpdateList;
