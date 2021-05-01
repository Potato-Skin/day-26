import React from "react";
import logo from "./logo.svg"; // const logo = require("./logo.svg")
import "./App.css";

function Mufasa() {
  return <button>CLICK ME</button>;
}

function Navbar(props) {
  console.log("props:", props);
  return <div>Hello {props.user.firstName}</div>;
}

function Footer(props) {
  console.log("props: ", props);
  return (
    <footer>
      Hello {props.user.firstName} {props.user.lastName}
    </footer>
  );
}

class KitchenSink extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        This is the kitchen sink
        <div>First kind: {this.props.type}</div>
      </div>
    );
  }
}

function App() {
  const user = {
    firstName: "Tadej",
    lastName: "Udovic",
  };

  return (
    <div className="App">
      <Navbar name="Andre" user={user} />
      <KitchenSink
        type="string"
        age={15}
        mufasa={["gizem", "brittney", "tadej", "tom", "ola"]}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Mufasa></Mufasa> */}
        <Mufasa />
      </header>
      <Footer captainUnderpants="André de Albuquerque" user={user} />
    </div>
  );
}

export default App;
