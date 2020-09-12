import React, { FunctionComponent } from "react";
import { Todo } from "../types";
import { Table, Button } from "semantic-ui-react";
import EditToDo from "./EditToDo";

type TodoListProps = {
  data: Todo[];
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, title: string, description: string, dueDate?: Date) => void;
};

const TodoList: FunctionComponent<TodoListProps> = ({ data, deleteTodo, updateTodo: updateTodoAction }) => {
  return (
    <>
      {
        <Table celled className="table">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Title</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Description</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Due Date</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((row) => {
              const { id, title, description, dueDate } = row || {};
              return (
                <Table.Row key={row.id}>
                  <Table.Cell textAlign="center">{title}</Table.Cell>
                  <Table.Cell textAlign="center">{description}</Table.Cell>
                  <Table.Cell textAlign="center">{dueDate ? new Date(dueDate).toLocaleString() : ""}</Table.Cell>
                  <Table.Cell textAlign="center">
                    <EditToDo id={id} title={title} description={description} dueDate={dueDate} editTodo={updateTodoAction} />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Button onClick={(e) => deleteTodo(id)} variant="contained" negative>
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      }
    </>
  );
};

export default TodoList;
