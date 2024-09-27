import React from "react";
import ReactDOM from "react-dom/client";
//it create object
//react Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "its not me is you"
);

// console.log(heading);
//jsx ( transpiled before it reaches the js) - parcel- babel
const jsxHeading = (
  <>
    <h1 className="aaa" id="jsx">
      this is jsx element
    </h1>
    <a href="google.com">Link</a>
  </>
);
const Ammount = 100000;
const Title = () => <h1>HELLO GUYS !</h1>;
console.log(jsxHeading);
//react component

//first letter of component should be capital
const HeadingComponent = () => {
  return (
    <>
      <Title />
      {Title()}
      <h1>{Ammount}</h1>
      {jsxHeading}
      <h1>This react component</h1>;
    </>
  );
};

//it create root ReactDOM is bride btw browser and react
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<HeadingComponent />);
