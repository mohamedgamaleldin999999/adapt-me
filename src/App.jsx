/* eslint-disable no-undef */
const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "adopt me"),
    React.createElement(pet, {
      animal: "Dog",
      name: "sheetos",
      breed: "havens",
    }),
    React.createElement(pet),
    React.createElement(pet),
  ]);
};



const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App, {}, "sdsdsdsdsdsds"));
