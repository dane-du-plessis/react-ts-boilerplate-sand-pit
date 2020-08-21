import React from "react";
import { observer } from "mobx-react";
import { ITodo } from "../../models/TodoStore";
import { values } from "mobx";

let id = 1;
const randomId = () => id++;
interface TodoProps {
  todos: ITodo;
}

const TodoCounterView = observer((props: any) => (
  <div>
      {props.store.pendingCount} pending, {props.store.completedCount} completed
  </div>
))

// TODO figure out how to do types with mobx, shouldn't be writing '| any' anywhere!
const TodoList = observer((props: TodoProps | any) => {
  console.log(values(props.todos))

  return (
    <div>
      <h1>Todo List</h1>
      <TodoCounterView store={props.todos}/>
      <button onClick={(e) => props.todos.addTodo(randomId(), "New Task")}>
        Add Task
      </button>
      <h2>You've got these things to do:</h2>
      {values(props.todos.todos).map(todo => (
        <div>
          <input type="checkbox" onChange={e => todo.toggle()}/>
          <input type="text" value={todo.name} onChange={e => todo.setName(e.target.value)} />
        </div>
      ))}
    </div>
  );
});

export default TodoList;
