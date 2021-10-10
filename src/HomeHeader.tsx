import React from "react";
import "./App.css";
import BussinessPicture from "./Business Picture.png";
import { Grid, Box, IconButton, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { LinkedIn, GitHub } from "@material-ui/icons";
import { HomeTodoList } from "./HomeTodoList";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  width: 150,
  height: 150,
  borderRadius: 150 / 2,
});

function HomeHeader() {
  return (
    <div>
      <header className="App-header">
        <Box style={{ padding: 2, maxWidth: "100%" }}>
          <Grid container spacing={2}>
            <Grid item>
              <Img src={BussinessPicture} alt="avatar" />
            </Grid>
            <Grid item sm container>
              <Grid item xs direction="column" spacing={2}>
                <Grid item>
                  <Typography variant="h2" component="div">
                    Brendan Murphy
                  </Typography>
                  <Box display="flex">
                    <Typography variant="h4" gutterBottom>
                      Software Developer
                    </Typography>
                    <Box display="flex" marginX="20px">
                      <Link
                        to={{
                          pathname: "https://github.com/bmurf17",
                        }}
                        target="_blank"
                      >
                        <IconButton size="small" className="svg_icons">
                          <GitHub />
                        </IconButton>
                      </Link>
                    </Box>
                    <Box display="flex" marginX="20px">
                      <Link
                        to={{
                          pathname:
                            "https://www.linkedin.com/in/brendanmurphy17/",
                        }}
                        target="_blank"
                      >
                        <IconButton
                          style={{ color: "ec6917" }}
                          size="small"
                          className="svg_icons"
                        >
                          <LinkedIn />
                        </IconButton>
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid item container></Grid>
            </Grid>
          </Grid>
        </Box>
        <HomeTodoList />
      </header>
    </div>
  );
}

export default HomeHeader;
