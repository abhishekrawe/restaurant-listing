import React, { useState, useEffect } from "react";
import axios from 'axios'

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
          <h2>{restaurant.address}</h2>
          <h2>{restaurant.contact}</h2>
        </div>
      ))}
    </div>

  </div>;
}

export default Restaurant;
