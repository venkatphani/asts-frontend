import axios from "axios";
import { api_base_url } from "../config";
import { GET_ALL_TODOS_REQUEST, CREATE_TODO_REQUEST, UPDATE_TODO_REQUEST, DELETE_TODO_REQUEST, TodoState, TodoActionsTypes, Todo } from "../types";
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

export const getAllTodos: ActionCreator<ThunkAction<Promise<any>, TodoState, null, TodoActionsTypes>> = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    axios
      .get(`${api_base_url}/todo/`)
      .then((response) => {
        dispatch({
          type: GET_ALL_TODOS_REQUEST,
          payload: response.data.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const createTodo: ActionCreator<ThunkAction<Promise<any>, Todo, null, TodoActionsTypes>> = (title, description, dueDate) => {
  return async (dispatch: Dispatch): Promise<void> => {
    axios
      .post(`${api_base_url}/todo/`, { title, description, dueDate })
      .then((response) => {
        dispatch({
          type: CREATE_TODO_REQUEST,
          payload: response.data.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const updateTodo: ActionCreator<ThunkAction<Promise<any>, Todo, null, TodoActionsTypes>> = (id, title, description, dueDate) => {
  return async (dispatch: Dispatch): Promise<void> => {
    axios
      .put(`${api_base_url}/todo/`, { id: id.toString(), title, description, dueDate })
      .then((response) => {
        dispatch({
          type: UPDATE_TODO_REQUEST,
          payload: response.data.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deleteTodo: ActionCreator<ThunkAction<Promise<any>, Todo, null, TodoActionsTypes>> = (id) => {
  return async (dispatch: Dispatch): Promise<void> => {
    axios
      .delete(`${api_base_url}/todo/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_TODO_REQUEST,
          payload: response.data.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
