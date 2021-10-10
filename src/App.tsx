import React from "react";
import "./App.css";
import BussinessPicture from "./Business Picture.png";
import { Grid, Box, IconButton, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { LinkedIn, GitHub } from "@material-ui/icons";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: 150,
  height: 150,
  borderRadius: 150 / 2,
});

function App() {
  return (
    <div>
      <header className="App-header">
        <Box style={{ padding: 2, maxWidth: "100%" }}>
          <Grid container spacing={2}>
            <Grid item>
              <Img src={BussinessPicture} alt="avatar" />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="h2" component="div">
                    Brendan Murphy
                  </Typography>
                  <Box display="flex" alignSelf="center" justifySelf="center">
                    <Typography variant="h4" gutterBottom>
                      Software Developer
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid item>
                <Link
                  to={{
                    pathname: "https://github.com/bmurf17",
                  }}
                  target="_blank"
                >
                  <IconButton size="medium" className="svg_icons">
                    <GitHub />
                  </IconButton>
                </Link>

                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/brendanmurphy17/",
                  }}
                  target="_blank"
                >
                  <IconButton style={{ color: "ec6917" }} className="svg_icons">
                    <LinkedIn />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </header>
    </div>
  );
}

export default App;
