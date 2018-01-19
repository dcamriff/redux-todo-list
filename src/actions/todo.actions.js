export function addTodo (todoTask) {
  return {
    type: 'ADD_TODO',
    todo: {
      id: 0,
      task: todoTask,
      completed: false
    }
  }
}
