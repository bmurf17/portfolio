import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { Box, styled } from "@mui/system";
import "./App.css";
import { ProjectList } from "./constants/Constants";
import { Link } from "react-router-dom";

const Img = styled("img")({
  marginLeft: 7,
  display: "block",
  width: 345,
  height: 200,
});

export default function ProjectPage() {
  return (
    <header className="App-header">
      <Box display="flex">
        <Typography variant="h2" color="primary" component="div" gutterBottom>
          Project
        </Typography>
      </Box>
      <Container maxWidth="lg">
        {ProjectList.map((project) => {
          return (
            <Paper
              style={{
                height: "100%",
                width: "100%",
                paddingBottom: "1rem",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <Img src={project.image} alt="Auto" />
                </Grid>
                <Grid item sm container>
                  <Grid item direction="column" spacing={2}>
                    <Grid item>
                      <Typography variant="h5" color="primary" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body1">
                        {project.description}
                      </Typography>
                      <Typography variant="body1">
                        {project.technolgies}
                      </Typography>
                      <Typography variant="body1">
                        {project.futureDevelopments}
                      </Typography>
                      <Link to={{ pathname: project.link }} target="_blank">
                        <Typography variant="body1">{project.link}</Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </Container>
    </header>
  );
}
