import axios from "axios";

const BASE_URL =
  "http://buzzerapp-env.eba-nsd6mmjj.ap-south-1.elasticbeanstalk.com/api";

export const teamRegistration = async (body) => {
  const response = await axios
    .post(BASE_URL + "/player/add", body)
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);

  return response;
};

// on Buzzer Click
export const onBuzzerClick = async (teamId) => {
  const response = await axios
    .post(BASE_URL + "/player/pressBuzzer/" + teamId)
    .then((res) => res)
    .catch((error) => {
      console.log(error.response.status);
      if (error.response.status === 888) {
        alert("Buzzer Already Pressed !");
      }
    });

  console.log("Buzzer Pressed successfully");
};

//getdisplay
export const showDisplay = () => {
  axios
    .get(BASE_URL + "/admin")
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);
};

export const resetBuzzer = async () => {
  await axios
    .get(BASE_URL + "/player/resetBuzzer/")
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);

  return true;
};

export const resetData = async () => {
  await axios
    .get(BASE_URL + "/player/resetData/")
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);

  return true;
};
