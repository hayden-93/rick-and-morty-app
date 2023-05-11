import ReactDom from "react-dom/client";

function App() {
  return <h1>Rick and Morty</h1>;
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
