import "./App.scss";
import User from "./components/User";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import FormationsExperiences from "./components/FormationsExperiences";

function App() {
  return (
    <div id="app">
      <div className="grid__container">
        <div className="sidebar">
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profile />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
