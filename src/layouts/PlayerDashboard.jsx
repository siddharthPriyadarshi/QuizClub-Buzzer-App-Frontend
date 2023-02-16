import React from 'react'
import "../styles/PlayerDashboard.css";
import { onBuzzerClick } from '../services/registerTeam'

const PlayerDashboard = ({ teamName, teamId }) => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('buzzer clicked')

    onBuzzerClick(teamId)
    console.log('buzzer pressed successfully')
  }
  return (
    <div className='player-dashboard'>
      <h1>{teamName}</h1>
      <button type="submit" style={{ padding: '2rem' }} onClick={handleSubmit} className='buzzer'>
        Buzzer
      </button>
    </div>
  )
}

export default PlayerDashboard
