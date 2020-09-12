export interface Todo {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

export interface TodoState {
  data: Todo[];
}

export const CREATE_TODO_REQUEST = "@todo/CREATE_TODO_REQUEST";
export const UPDATE_TODO_REQUEST = "@todo/UPDATE_TODO_REQUEST";
export const DELETE_TODO_REQUEST = "@todo/DELETE_TODO_REQUEST";
export const GET_ALL_TODOS_REQUEST = "@todo/GET_ALL_TODOS_REQUEST";

interface CreateTodoRequest {
  type: typeof CREATE_TODO_REQUEST;
  payload: Todo;
}

interface UpdateTodoRequest {
  type: typeof UPDATE_TODO_REQUEST;
  payload: Todo;
}

interface DeleteTodoRequest {
  type: typeof DELETE_TODO_REQUEST;
  payload: Todo;
}

interface GetAllTodosRequest {
  type: typeof GET_ALL_TODOS_REQUEST;
  payload: Todo[];
}

export type TodoActionsTypes = CreateTodoRequest | UpdateTodoRequest | DeleteTodoRequest | GetAllTodosRequest;
