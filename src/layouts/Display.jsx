import React from "react";
import axios from "axios";
import { showDisplay } from "../services/registerTeam";

const Display = () => {
  const [displayData, setDisplayData] = React.useState("");

  React.useEffect(() => {
    setInterval(() => {
      getData();
      console.log(displayData);
    }, 500);
  }, [displayData]);

  function getData() {
    axios
      .get(
        "http://buzzerapp-env.eba-nsd6mmjj.ap-south-1.elasticbeanstalk.com/api/admin"
      )
      .then(
        (res) => {
          setDisplayData(res.data);
        },
        (err) => {
          setDisplayData("");
          console.log("NAME NOT FETCHED");
        }
      );
  }

  return (
    <>
      <h1>Display</h1>
      <div>
        <span>Team: </span>
        {displayData}
      </div>
    </>
  );
};

export default Display;
