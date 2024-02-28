// Write your code here
import './index.css'
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchDetails} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails

    return (
      <li className={`match-card ${matchStatus}`}>
        <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p className="match-status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
