import React from "react";

import { teamRegistration } from "../services/registerTeam";

import PlayerDashboard from "./PlayerDashboard";
import "../styles/PlayerHome.css";
import Navbar from "./Navbar";

const PlayerHome = () => {
  const [teamName, setTeamName] = React.useState('');
  const [style, setStyle] = React.useState({});
  const [teamData, setTeamData] = React.useState(null);


  React.useEffect(()=>{

  }, [style])

  const onSubmit = async (e) => {
    e.preventDefault();
    if (teamName == null || teamName == "") {
      alert("Enter name");
      return;
    }
    setStyle({
      display : "none"
    })


    console.log("clicked /add", teamName);

    const body = {
      name: teamName
    };

    const data = await teamRegistration(body);
    console.log("data", data);
    setTeamData(data);

    localStorage.setItem("teamId", teamData.id.toString());

  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="heading">QUIZANNA</div>
        <div className="regd-form">
          <div style={style} className="regd-section">
            <input
              className="home-input"
              placeholder="Enter name"
              onChange={(event) => {
                setTeamName(event.target.value);
              }}
            />
            <button type="submit" onClick={onSubmit} className="submit-button">
              Join Game
            </button>
          </div>
          {teamData?.id ? (
            <PlayerDashboard teamName={teamData.name} teamId={teamData.id} />
          ) : null}
          {/* <PlayerDashboard teamName="some team" teamId="123" /> */}
        </div>
      </div>
      {/* <Navbar/> */}
    </div>
  );
};

export default PlayerHome;
