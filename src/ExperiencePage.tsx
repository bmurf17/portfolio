import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import "./App.css";
import { ExperienceList } from "./constants/Constants";

const Img = styled("img")({
  marginLeft: 5,
  display: "block",
  width: 75,
  height: 75,
  borderRadius: 150 / 2,
});

export default function ExperiencePage() {
  return (
    <header className="App-header">
      <Box display="flex">
        <Typography variant="h2" color="primary" component="div" gutterBottom>
          Experience
        </Typography>
      </Box>
      <Container maxWidth="lg">
        {ExperienceList.map((experienceItem) => {
          return (
            <Paper style={{ height: "100%", width: "100%" }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Img src={experienceItem.image} alt="Auto" />
                </Grid>
                <Grid item sm container>
                  <Grid item direction="column" spacing={2}>
                    <Grid item>
                      <Typography variant="h5" color="primary" component="div">
                        {experienceItem.company}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {experienceItem.jobTitle}
                      </Typography>
                      <Typography variant="body1">
                        Technologies: {experienceItem.technologies}
                      </Typography>
                      <Typography variant="body1">
                        {experienceItem.description}
                      </Typography>
                      <Typography variant="body1">
                        {experienceItem.dates}
                      </Typography>
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
