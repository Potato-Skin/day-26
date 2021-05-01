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
  return (
    <footer>
      Hello {props.user.firstName} {props.user.lastName}
    </footer>
  );
}

class KitchenSink extends React.Component {
  render() {
    this.props.func();
    console.log(this.props);
    return (
      <div>
        This is the kitchen sink
        <div>First kind: {this.props.type}</div>
        <this.props.Component />
      </div>
    );
  }
}

function NotPregnantAnymore(props) {
  console.log("props:  in the non abortion component", props);
  return <h1>{props.children}</h1>;
}

function MyButton(props) {
  const { color = "white", background } = props;
  return (
    <div
      style={{
        padding: "2rem 5rem",
        background: props.background,
        width: "40%",
        borderRadius: "50%",
        color: color,
      }}
    >
      {props.children}
    </div>
  );
}

function CanDrink(props) {
  if (!props.age || props.age < 18) {
    return <div>Opps, youre not allowed to drink</div>;
  }
  return <div>Living la vida drunka</div>;
}

function App() {
  const user = {
    firstName: "Tadej",
    lastName: "Udovic",
  };

  function doSomething() {
    console.log("DONE SOMETHING, CHACHING");
  }

  return (
    <div className="App">
      <CanDrink />
      <CanDrink age={88} />
      <CanDrink age={17} />
      <MyButton color="white" background="red">
        My humps
      </MyButton>
      <MyButton background="green">My humps</MyButton>
      <NotPregnantAnymore>Buenos dias, Luis</NotPregnantAnymore>
      <NotPregnantAnymore>Buenos dias, Brittney</NotPregnantAnymore>
      <Navbar name="Andre" user={user} />
      <KitchenSink
        type="string"
        age={15}
        mufasa={["gizem", "brittney", "tadej", "tom", "ola"]}
        func={doSomething}
        Component={Mufasa}
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
