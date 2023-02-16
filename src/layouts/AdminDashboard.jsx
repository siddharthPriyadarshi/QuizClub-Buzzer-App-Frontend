import React from "react";
import "../styles/AdminDashboard.css";
import { resetBuzzer, resetData } from "../services/registerTeam";

const AdminDashboard = () => {
  const clickResetBuzzer = async () => {
    console.log("clicked reset buzzer");
    const ifclicked = await resetBuzzer();
    if (ifclicked) {
      console.log("buzzer reset");
    } else {
      console.log("buzzer not reset");
    }
  };

  const clickResetGame = async (e) => {
    e.preventDefault();
    console.log("clicked reset game");
    const ifclicked = await resetData();
    if (ifclicked) {
      console.log("game reset");
    } else {
      console.log("game not reset");
    }
  };
  return (
    <div className="admin-container">
      <div className="heading" style={{ height: "20%" }}>
        Quizannia
      </div>
      <div className="button-container">
        <button className="buzzer" onClick={clickResetBuzzer}>
          Reset Buzzer
        </button>
        <button
          className="buzzer"
          style={{ backgroundColor: "red" }}
          onClick={clickResetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
