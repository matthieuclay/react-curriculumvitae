import "./App.scss";
import User from "./components/User";
import Skills from "./components/Skills";

function App() {
  return (
    <div id="app">
      <div className="grid__container">
        <div className="sidebar">
          <User />
          <Skills />
        </div>
        <div className="main">main</div>
      </div>
    </div>
  );
}

export default App;
