import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import TodoList from "./pages/TodoList";

// TODO how to type the props?
const App = observer((props: any) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">users</Link>
            </li>
            <li>
              <Link to="/todolist">Todo List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users">
            {" "}
            <Users />
          </Route>
          <Route path="/about">
            {" "}
            <About />
          </Route>
          <Route path="/TodoList">
            {" "}
            <TodoList todos={props.store}></TodoList>
          </Route>
          <Route path="/">
            {" "}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
});

export default App;
