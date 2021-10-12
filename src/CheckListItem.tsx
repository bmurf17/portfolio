import * as React from "react";
import { Todo, ToggleTodo } from "./constants/Constants";
import { Box, Typography, Checkbox } from "@material-ui/core";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export function CheckListItem(props: Props) {
  console.log("Here " + props);
  return (
    <Box sx={{ alignItems: "center", display: "flex" }}>
      <Checkbox
        checked={props.todo.complete}
        color="primary"
        onClick={() => {
          props.toggleTodo(props.todo);
        }}
      />
      <Typography style={{ margin: 5 }} variant="h6">
        {props.todo.text}
      </Typography>
    </Box>
  );
}
