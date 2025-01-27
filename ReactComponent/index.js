import react from "react";
import reactDOM from "react-dom/client";

const Title = () => <h1>React component</h1>;  // react function componet

const footer = <footer>Copyright by Lav Palve</footer>


const HeadingComponet = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()} {/* this is also valid */}
      <div>
        <h2> There are 2 types of react component </h2>
        <ul>
          <li> Class component </li>
          <li> Function component </li>
        </ul>
      </div>
      {footer /* {} : any javascript code written in this and is excuted  */}{" "}
    </div>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponet />);
