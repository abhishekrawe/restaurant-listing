import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const fetchAllRestaurantList = async () => {
      try {
        const res = await axios.get("http://localhost:5500/restaurant")
        //console.log(res)
        setRestaurant(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllRestaurantList()
  }, [])

  return <div>
    <h1>Resturant</h1>
    <div className="restaurant">
      {restaurant.map(restaurant => (
        <div className="restaurant" key={restaurant.id}>
          {restaurant.picture && <img src={restaurant.picture} alt="" />}
          <h2>{restaurant.name}</h2>
          <p>{restaurant.address}</p>
          <h5>{restaurant.contact}</h5>
          <h5>{restaurant.picture}</h5>
        </div>
      ))}
    </div>
    <button>
      <Link to="/addList"> Add New Restaurant </Link>
    </button>
  </div>;
}

export default Restaurant;
