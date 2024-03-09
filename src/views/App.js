import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import ListTodoFake from "./TodosFake/ListTodoFake";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import NavFake from "./NavFake/NavFake";
import Home from "./Example/Home";
import HomeFake from "./Example/HomeFake";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
/**
 *  2 components: class components / function components (function, arrow)
 * JSX
 */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Todo">
              <ListTodo />
            </Route>
            npm
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
