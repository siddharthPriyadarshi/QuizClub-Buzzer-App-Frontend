import axios from 'axios'

const BASE_URL =
  'https://683c-2409-40e2-f-920a-a559-cb75-9e1-66e9.in.ngrok.io/api'

export const teamRegistration = async (body) => {
  const response = await axios
    .post(BASE_URL + '/player/add', body)
    .then((res) => {
      return res.data
    })
    .catch((error) => error)

  return response
}

// on Buzzer Click
export const onBuzzerClick = async (teamId) => {
  const response = await axios
    .post(BASE_URL + '/player/pressBuzzer/' + teamId)
    .then((res) => res)
    .catch((error) => {
      console.log(error.response.status)
      if (error.response.status === 888) {
        alert('Buzzer Already Pressed !')
      }
    })

  console.log('Buzzer Pressed successfully')
}

//getdisplay
export const showDisplay = () => {
  axios
    .get(BASE_URL + '/admin')
    .then((res) => {
      return res.data
    })
    .catch((error) => error)
}
