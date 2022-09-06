import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function PokemonCard({name, img, types}) {

  let bg;

  const typeHandler = () => {
    if (types[1]) {
    return `${types[0].type.name} | ${types[1].type.name}`
    }
    return types[0].type.name
  }

  const bgType = () => {
    if (types[0].type.name == "fire") {
      bg = '#A52A2A'
    }
    if (types[0].type.name == "grass") {
      bg = '#228B22'
    }
    if (types[0].type.name == "water") {
      bg = '#4682B4'
    }
    if (types[0].type.name == "electric") {
      bg = '#FFD700'
    }
  }
  bgType()

  return (
    <Card sx={{ maxWidth: 345, backgroundImage:bg}}>
      <CardMedia
        component="img"
        alt="pokemon-image"
        height="200"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name[0].toUpperCase() + name.substring(1)}
        </Typography>

        <Typography gutterBottom variant="h6" component="div" fontSize="0.8em" fontWeight="600">
          {typeHandler().toUpperCase()}
        </Typography>

      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}
