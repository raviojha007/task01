export const todoReducer = (state = { todoList: [] }, action) => {
  switch (action.type) {
    case "addTodo":
      const todo = action.payload;
      console.log(todo)
      return {
        ...state,
        todoList:[ ...state.todoList,todo],
      };
    case "deleteTodo":
      const todoName = action.payload;

      return {
        ...state,
        todoList: state.todoList.filter(
          (todoItem) => todoItem.firstName != todoName
        ),
      };

    default:
      return state;
  }
};
