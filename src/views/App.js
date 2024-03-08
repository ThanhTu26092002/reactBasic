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
          {/* <Nav />
          <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <ListTodoFake /> */}
          {/* <MyComponent /> */}
          {/* <ListTodo /> */}
          {/* <HomeFake /> */}
          {/* <Home /> */}
          {/* <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch> */}
          <NavFake />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ListTodoFake /> */}
          {/* <MyComponent /> */}
          {/* <ListTodo /> */}
          {/* <HomeFake /> */}
          {/* <Home /> */}
          <Switch>
            <Route path="/abc" exact>
              <HomeFake />
            </Route>
            <Route path="/todofake">
              <ListTodoFake />
            </Route>
            <Route path="/aboutfake">
              <MyComponent />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
