import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers";
import { TodoState } from "./types";

// Create an interface for the application state
export interface AppState {
  todo: TodoState;
}

const reducers = combineReducers<AppState>({
  todo: todoReducer,
});

export const store: Store<AppState, any> = createStore(reducers, applyMiddleware(thunk));
