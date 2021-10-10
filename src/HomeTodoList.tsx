import * as React from "react";
import { Box, LinearProgress, Paper } from "@mui/material";
import { Container, Typography } from "@material-ui/core";
import "./App.css";

export function HomeTodoList() {
  const [progress, setProgress] = React.useState(0);
  return (
    <Container maxWidth="lg">
      <Paper style={{ height: "100%", width: "100%" }}>
        <div>
          <header className="Todolist-header">
            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Typography variant="h5">Goals List</Typography>
            </Box>
          </header>
        </div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", m: 2 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="textSecondary">
              0/0
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
