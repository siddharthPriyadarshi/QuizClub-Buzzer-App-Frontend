import React from 'react'
import axios from 'axios'
import { showDisplay } from '../services/registerTeam'

const Display = () => {
  const [displayData, setDisplayData] = React.useState('')

  React.useEffect(() => {
    setInterval(() => {
      getData()
      console.log(displayData)
    }, 500)
  }, [displayData])

  function getData() {
    axios
      .get(
        'https://683c-2409-40e2-f-920a-a559-cb75-9e1-66e9.in.ngrok.io/api/admin',
      )
      .then(
        (res) => {
          setDisplayData(res.data)
        },
        (err) => {
          setDisplayData('')
          console.log('NAME NOT FETCHED')
        },
      )
  }

  return (
    <>
      <h1>Display</h1>
      <div>
        <span>Team: </span>
        {displayData}
      </div>
    </>
  )
}

export default Display
