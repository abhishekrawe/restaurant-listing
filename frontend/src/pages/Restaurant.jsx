import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Card, CardContent, CardMedia, Typography, Button, Stack } from '@mui/material';


function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

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
      await axios.delete("http://localhost:5500/restaurant/" + id)
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return <div>
    <h1>Restaurant Listing Platform</h1>
    <Button
      variant="contained"
      style={{ position: 'absolute', top: 40, right: 150 }}
      component={Link}
      to="/addlist"
    >
      Add New Restaurant
    </Button>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {restaurant.map(restaurant => (
        <Card
          sx={{ maxWidth: 345 }}
          key={restaurant.id}
          style={{
            width: '300px',
            margin: '10px',
            transition: 'transform 0.3s',
            transform: hoveredCard === restaurant.id ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={() => setHoveredCard(restaurant.id)}
          onMouseLeave={() => setHoveredCard(null)}>
          {restaurant.picture && (
            <CardMedia
              component="img"
              height="200"
              image={restaurant.picture}
              alt="Restaurant Image"
            />
          )}
          <CardContent>
            <Typography variant="h5" gutterBottom component="div">
              {restaurant.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {restaurant.address}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {restaurant.contact}
            </Typography>
          </CardContent>
          <Stack spacing={2} direction="row" alignItems="center" justifyContent="center" sx={{ paddingBottom: '20px' }}>
            <Button variant="outlined" startIcon={<DeleteIcon />} className="delete" onClick={() => handleDelete(restaurant.id)}>Delete</Button>
            <Button variant="outlined" startIcon={<BorderColorIcon />} className="update"> <Link to={`/updatelist/${restaurant.id}`} style={{ textDecoration: 'none' }}>Update </Link></Button>
          </Stack>
        </Card>
      ))}
    </div>
  </div>;
}

export default Restaurant;
