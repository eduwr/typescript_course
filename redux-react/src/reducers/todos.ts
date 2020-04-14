import { Todo, ActionTypes, Action } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FetchTodos:
      return action.payload;
    case ActionTypes.DeleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
