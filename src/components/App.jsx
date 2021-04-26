import React,{ useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function App() {

  const [Mouse,SetMouse] = useState(true);

  function handleOver(){
    SetMouse(false);
  }

  function handleOut(){
    SetMouse(true);
  }

  const styleBtn = {
    backgroundColor: Mouse?"#03bfcb":"transparent",
    color: Mouse?"#231e39":"white"
  };

  return (
    <div className="card-container">
      <img
        className="round"
        src="https://randomuser.me/api/portraits/women/79.jpg"
        alt="user"
      />
      <h3>Name</h3>
      <h6>location</h6>
      <p>Joint Finance Secretary</p>
      <div className="buttons">
        <button className="profile" style={styleBtn} onMouseOver={handleOver} onMouseOut={handleOut}>View Profile</button>
      </div>
      <div className="skills">
        <h6>Handles</h6>
        <div>
            <a href="https://www.youtube.com/">
              <GitHubIcon style={{ fill: "white" }} />
            </a>
            <a href="https://www.youtube.com/">
              <InstagramIcon style={{ fill: "white" }} />
            </a>
            <a href="https://www.youtube.com/">
              <LinkedInIcon style={{ fill: "white" }} />
            </a>
        </div>
      </div>
    </div>
  );
}

export default App;
