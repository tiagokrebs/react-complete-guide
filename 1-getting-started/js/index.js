function Person(props) {
  return (
    React.createElement("div", { className: "person" },
      React.createElement("h1", null, props.name),
      React.createElement("p", null, "Your Age: ", props.age)));


}

var app =
React.createElement("div", null,
  React.createElement(Person, { name: "Max", age: "28" }),
  React.createElement(Person, { name: "Manu", age: "29" }));



ReactDOM.render(app, document.querySelector('#app'));