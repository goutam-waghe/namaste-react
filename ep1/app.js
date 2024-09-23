const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hellow guys"),
    React.createElement("h1", { id: "heading" }, "goutam here"),
  ]) ,
React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "How are you"),
    React.createElement("h1", { id: "heading" }, "im under the water"),
  ])]
);

//this will create js object of h1 tag
const heading = React.createElement(
  "h1",
  { id: "heading", className: "bagr" },
  "Learning React"
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

//this render method convert that object in html in DOM
root.render(parent);
