// Write your code here

import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, id, imageUrl} = teamData

    return (
      <Link to={`team-matches/${id}`} className="link">
        <li className="team-item">
          <img src={imageUrl} alt={name} className="logo" />
          <p>{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
