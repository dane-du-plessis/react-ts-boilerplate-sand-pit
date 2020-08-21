import { types, getSnapshot, onSnapshot } from "mobx-state-tree";
import * as React from "react";
import {
  string,
  Instance,
  SnapshotIn,
  SnapshotOut,
} from "mobx-state-tree/dist/internal";
import { values } from "mobx";

const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
    user: types.maybe(types.reference(types.late(() => User)))
  })
  .actions((self) => ({
    setName(newName: string) {
      self.name = newName;
    },
    toggle() {
      self.done = !self.done;
    },
    setUser(user: any) {
        if (user === "") {
          // When selected value is empty, set as undefined
          self.user = undefined;
        } else {
          self.user = user;
        }
      }
  }));

const User = types.model({
  id: types.identifier,
  name: types.optional(types.string, ""),
});

const RootStore = types
  .model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {}),
  })
  .views((self) => ({
    get pendingCount() {
      return values(self.todos).filter((todo: any) => !todo?.done).length
    },
    get completedCount() {
      return values(self.todos).filter((todo: any) => todo?.done).length
    },
    getTodosWhereDoneIs(done: boolean) {
      return values(self.todos).filter((todo: any) => todo?.done === done)
    }
  }))
  .actions((self) => ({
    addTodo(id: string, name: string) {
      self.todos.set(id, Todo.create({ name }));
    },
  }));

const store = RootStore.create({
  users: {
    "1": {
      id: "1",
      name: "mweststrate"
    },
    "2": {
        id: "2",
        name: "mattiamanzati"
    },
    "3": {
        id: "3",
        name: "johndoe"
    }
  },
  todos: {},
});

onSnapshot(store, (snapshot) => console.log(snapshot));

// const joe = User.create();
// const eat = Todo.create();

// console.log("Joe:", getSnapshot(joe));
// console.log("Eat TODO:", getSnapshot(eat));

// store.addTodo("1", "Eat Pudding");
// store.todos.get("1")?.toggle();

export interface ITodo extends Instance<typeof Todo> {} // => { title: string; setTitle: (v: string) => void }
export interface ITodoSnapshotIn extends SnapshotIn<typeof Todo> {} // => { title?: string }
export interface ITodoSnapshotOut extends SnapshotOut<typeof Todo> {} // => { title: string }

export default store;
