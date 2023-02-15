import React from 'react'

import { teamRegistration } from '../services/registerTeam'

import PlayerDashboard from './PlayerDashboard'

const PlayerHome = () => {
  const [teamName, setTeamName] = React.useState({})
  const [teamData, setTeamData] = React.useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log('clicked /add', teamName)

    const body = {
      name: teamName,
    }

    const data = await teamRegistration(body)
    console.log('data', data)
    setTeamData(data)

    localStorage.setItem('teamId', teamData.id.toString())

    const ele = document.getElementsByClassName('regd-section')
    ele[0].style.display = 'none'
  }

  return (
    <>
      <div>Quizzania</div>
      <div className="regd-form">
        <div className="regd-section">
          <input
            placeholder="Enter name"
            onChange={(event) => {
              setTeamName(event.target.value)
            }}
          />
          <button type="submit" onClick={onSubmit}>
            Join Game
          </button>
        </div>
        {teamData?.id ? (
          <PlayerDashboard teamName={teamData.name} teamId={teamData.id} />
        ) : null}
      </div>
    </>
  )
}

export default PlayerHome
