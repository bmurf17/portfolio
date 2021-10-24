import {
  Box,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
} from "@material-ui/core";
import { EducationList } from "./constants/Constants";
import "./App.css";

const Img = styled("img")({
  marginLeft: 7,
  display: "block",
  width: 75,
  height: 75,
});

export default function EducationPage() {
  return (
    <header className="App-header">
      <Box display="flex">
        <Typography variant="h2" color="primary" component="div" gutterBottom>
          Education
        </Typography>
      </Box>
      <Container maxWidth="lg">
        {EducationList.map((education) => {
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
                  <Img src={education.image} alt="Auto" />
                </Grid>
                <Grid item sm container>
                  <Grid item direction="column" spacing={2}>
                    <Grid item>
                      <Typography variant="h5" color="primary" component="div">
                        {education.school}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {education.study}
                      </Typography>
                      <Typography variant="body1">{education.date}</Typography>
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
