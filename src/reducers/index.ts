import { Reducer } from "redux";

import { TodoState, TodoActionsTypes, CREATE_TODO_REQUEST, UPDATE_TODO_REQUEST, DELETE_TODO_REQUEST, GET_ALL_TODOS_REQUEST } from "../types";

const initialState: TodoState = {
  data: [],
};

export const todoReducer: Reducer<TodoState, TodoActionsTypes> = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO_REQUEST:
      const allTodos = [...state.data, action.payload];
      return {
        ...state,
        data: allTodos,
      };
    case UPDATE_TODO_REQUEST: {
      const finalData = state.data.map((todo) => (todo.id === action.payload.id ? action.payload : todo));

      return {
        ...state,
        data: finalData,
      };
    }
    case DELETE_TODO_REQUEST: {
      const finalData = state.data.filter((todo) => todo.id !== action.payload.id);

      return { ...state, data: finalData };
    }
    case GET_ALL_TODOS_REQUEST: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
