import ReactDom from "react-dom/client";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <List />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
