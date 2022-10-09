import React from "react";
import "./Cards.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cards = () => {
  return (
    <>
      <div className="homeheading">Explore the amazing cards</div>

      <div className="cards">
        <div className="cardbox">
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://images.pexels.com/photos/219906/pexels-photo-219906.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="cardbox">
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://images.pexels.com/photos/219906/pexels-photo-219906.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="cardbox">
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://images.pexels.com/photos/219906/pexels-photo-219906.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="cardbox">
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://images.pexels.com/photos/219906/pexels-photo-219906.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="cardbox">
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://images.pexels.com/photos/219906/pexels-photo-219906.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="cardbox">
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              height="140"
              image={`https://images.pexels.com/photos/219906/pexels-photo-219906.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Cards;
