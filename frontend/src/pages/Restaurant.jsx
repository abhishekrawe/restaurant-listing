import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';


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

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5500/restaurant/"+id)
        window.location.reload();
    }catch(err) {
       console.log(err);
    }
  }

  return <div>
    <h1>Resturant</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {restaurant.map(restaurant => (
        <Card key={restaurant.id} style={{ width: '300px', margin: '10px' }}>
          {restaurant.picture && (
            <CardMedia
              component="img"
              height="200"
              image={restaurant.picture}
              alt="Restaurant Image"
            />
          )}
          <CardContent>
            <Typography variant="h5" component="div">
              {restaurant.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {restaurant.address}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {restaurant.contact}
            </Typography>
          </CardContent>
          <Button className="delete" onClick={() => handleDelete(restaurant.id)}>Delete</Button>
          <Button className="update"> <Link to={`/updatelist/${restaurant.id}`}>Update </Link></Button>
        </Card>
      ))}
    </div>
    <Button variant="contained">
      <Link to="/addlist" style={{ textDecoration: 'none', color: 'white' }}>
        Add New Restaurant
      </Link>
    </Button>
  </div>;
}

export default Restaurant;
