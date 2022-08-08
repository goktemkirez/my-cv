import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

import { StyledCardMedia } from './ProjectCard.style';

export default function ProjectCard(props) {
  const { name, img, description, codeUrl, liveUrl } = props;

  return (
    <>
      <Card sx={{ maxWidth: 500, backgroundColor: '#24292F', color: '#D7DFE6' }}>
        <StyledCardMedia
          component="img"
          height="100%"
          image={img}
          alt="no image"
          sx={{ backgroundRepeat: "no-repeat", objectFit: "contain", padding: '10px', maxHeight: '400px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          {(codeUrl === null || codeUrl === "") ? null :
            <Button size="small" variant="contained" color="success" target="_blank" href={codeUrl}>
              Code
            </Button>
          }
          {(liveUrl === null || liveUrl === "") ? null :
            <Button size="small" variant="contained" color="primary" target="_blank" href={`${liveUrl}`} >
              Live
            </Button>
          }
        </CardActions>
      </Card>
    </>
  );
}
