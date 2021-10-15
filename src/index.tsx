import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import ExperiencePage from "./ExperiencePage";
import ProjectPage from "./ProjectPage";
import EducationPage from "./EducationPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Box display="flex" justifyContent="flex-end">
        <AppBar position="static">
          <Toolbar>
            <Box display="flex">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: 12,
                }}
              >
                <Typography variant="h5" color="inherit">
                  Home
                </Typography>
              </Link>
              <Link
                to="/experience"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: 12,
                }}
              >
                <Typography variant="h5" color="inherit">
                  Experience
                </Typography>
              </Link>
              <Link
                to="/projects"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: 12,
                }}
              >
                <Typography variant="h5" color="inherit">
                  Projects
                </Typography>
              </Link>{" "}
              <Link
                to="/education"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: 12,
                }}
              >
                <Typography variant="h5" color="inherit">
                  Education
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Switch>
        <Route path="/experience">
          <ExperiencePage />
        </Route>
        <Route path="/projects">
          <ProjectPage />
        </Route>
        <Route path="/education">
          <EducationPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
