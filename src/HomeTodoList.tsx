import * as React from "react";
import { Box, LinearProgress, Paper } from "@mui/material";
import { Container, List, ListItem, Typography } from "@material-ui/core";
import "./App.css";
import { CheckListItem } from "./CheckListItem";
import { Todo, TodoList } from "./constants/Constants";
import { useState } from "react";

export function HomeTodoList() {
  const [todos, setTodos] = useState(TodoList);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  var doneItem = 0;
  TodoList.map((todo) => {
    if (todo.complete) {
      doneItem++;
    }
  });

  return (
    <Container maxWidth="lg">
      <Paper style={{ height: "100%", width: "100%" }}>
        <div>
          <header className="Todolist-header">
            <Box sx={{ alignItems: "center", display: "flex" }} marginY="6px">
              <Typography variant="h5">Goals List</Typography>
            </Box>
          </header>
        </div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", m: 2 }}>
            <LinearProgress
              variant="determinate"
              value={(doneItem / TodoList.length) * 100}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="textSecondary">
              {doneItem} / {TodoList.length}
            </Typography>
          </Box>
        </Box>
        <List>
          {TodoList.map((Todo) => {
            return (
              <ListItem key={Todo.text}>
                <CheckListItem todo={Todo} toggleTodo={toggleTodo} />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Container>
  );
}
