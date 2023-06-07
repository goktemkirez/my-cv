import { Typography, CardActions, CardContent, Button } from "@mui/material";

import { StyledCard } from "./ExperienceCard.style";

export default function ProjectCard(props) {
  const { company, date, title, department, responsibilities, projects, website } = props;

  return (
    <StyledCard variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          {company}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {department}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {date}
        </Typography>
        <br />
        {responsibilities?.length > 0 &&
        <Typography>
          <u>Responsibilities</u>
        </Typography>
        }
        <Typography variant="body2" component="div">
          {responsibilities.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}
        </Typography>
        {projects?.length > 0 &&
        <Typography>
           <u>Projects</u>
        </Typography>
        }
        <Typography variant="body2" component="div">
          {projects.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        {(website === null || website === "") ? null :
          <Button
            variant="outlined"
            color="info"
            size="small"
            target="_blank"
            href={`${website}`}
            sx={{textTransform: "capitalize"}}
          >
            Company Website
          </Button>
        }
      </CardActions>
    </StyledCard>
  );
}
