import { Typography, CardActions, CardContent, Button } from "@mui/material";

import { StyledCard } from "./ExperienceCard.style";

export default function ProjectCard(props) {
  const { company, date, title, department, responsibilities, projects, website } = props;

  return (
    <StyledCard variant="outlined">
      <CardContent>
        <Typography gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {company}
        </Typography>
        <Typography gutterBottom>
          {department}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {date}
        </Typography>
        <br />
        <Typography>
          <u>Responsibilities</u>
        </Typography>
        <Typography variant="body2" component="div">
          {responsibilities.map((item, i) => (
            <p key={i}>• {item.responsibility}</p>
          ))}
        </Typography>
        <Typography>
          <u>Projects</u>
        </Typography>
        <Typography variant="body2" component="div">
          {projects.map((item, i) => (
            <p key={i}>• {item.project}</p>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        {(website === null || website === "") ? null :
          <Button
            variant="contained"
            color="primary"
            size="small"
            target="_blank"
            href={`${website}`}
          >
            Website
          </Button>
        }
      </CardActions>
    </StyledCard>
  );
}
