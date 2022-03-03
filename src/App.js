import "./App.scss";
import User from "./components/User";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import FormationsExperiences from "./components/FormationsExperiences";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <div id="app">
      <div className="grid__container">
        <div className="sidebar">
          <div className="actions">
            <DarkMode />
          </div>
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
