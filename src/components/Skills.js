import React from "react";
import "./Skills.scss";
import Skill from "./Skill";
import Interests from "./Interests";

function Skills() {
  return (
    <div id="skills">
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="4" />
        <Skill title="JS" rating="3" />
        <Skill title="ANGULAR" rating="3" />
        <Skill title="VUE" rating="3" />
        <Skill title="REACT" rating="1" />
        <Skill title="NODE" rating="1" />
        <Skill title="JAVA" rating="3" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Anglais" rating="3" />
      </div>
      <Interests />
    </div>
  );
}

export default Skills;
