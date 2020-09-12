import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createTodo, deleteTodo, updateTodo, getAllTodos } from "../../actions";
import { AppState } from "../../store";
import { Todo } from "../../types";
import TodoList from "../../containers/TodoList";
import CreateTodo from "../../containers/CreateTodo";
import { Grid } from "semantic-ui-react";

type HomeProps = {
  data: Todo[];
  getAllTodos: () => void;
  deleteTodo: (id: number) => void;
  updateTodo: () => void;
  createTodo: () => void;
};
class Home extends PureComponent<HomeProps> {
  componentDidMount() {
    const { getAllTodos: getAllTodosAction } = this.props;
    getAllTodosAction();
  }
  render() {
    const { data, createTodo: createTodoAction, deleteTodo: deleteTodoAction, updateTodo: updateTodoAction } = this.props;
    return (
      <Grid container verticalAlign="middle" className="aligned middle">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <CreateTodo createTodo={createTodoAction} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          {data.length > 0 ? (
            <Grid.Column>
              <TodoList data={data} deleteTodo={deleteTodoAction} updateTodo={updateTodoAction} />
            </Grid.Column>
          ) : (
              <Grid.Column textAlign="center">
                <h3>There are no Todos to display</h3>{" "}
              </Grid.Column>
            )}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const { todo } = state;
  const { data } = todo;
  return { data };
};

export default connect(mapStateToProps, { createTodo, getAllTodos, deleteTodo, updateTodo })(Home);
