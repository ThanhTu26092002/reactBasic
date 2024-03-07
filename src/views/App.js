import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import DitMe from "./Todos/ditMe";

/**
 *  2 components: class components / function components (function, arrow)
 * JSX
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple ToDo App</p>
        {/* <DitMe /> */}
        {/* <MyComponent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
