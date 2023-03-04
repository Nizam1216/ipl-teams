import React from 'react'
import './Carddetails.css'
import teams from '../utils/Json';
import members from '../utils/members';
import { useParams } from 'react-router-dom'
const Carddetails = ({ setsearch }) => {
    const { id } = useParams();
    const teamdetails = teams.find((item) => item.id === id) || {};
    const membersdetails = members.filter((i) => i.id === id) || {};

    return (

        <div className='team-details-main-container'>
            <div className='team-details-team-card'>
                <div
                    className='team-details-team-image'
                    style={{
                        backgroundImage: teamdetails.background,

                    }}
                >
                    <img className='mainimage' src={teamdetails.img} alt={teamdetails.name} />
                </div>

                <div className='team-details-detailswrapper'>
                    <h1 className='team-details-detailswrapper-h1'>{teamdetails.name}</h1>
                    <div className='team-details-stats-wrapper'>
                        <h4 className="TeamDetailPage_StatsLabel__M-rGm">Championships : </h4>
                        <p className="TeamDetailPage_StatsValue__jCcwk"> {teamdetails.Championships}</p>
                    </div>
                    <div className="TeamDetailPage_StatsWrapper__2gWPZ">
                        <h4 className="TeamDetailPage_StatsLabel__M-rGm">Coach: </h4>
                        <p className="TeamDetailPage_StatsValue__jCcwk">{teamdetails.Coach}</p>
                    </div>
                    <div className="TeamDetailPage_StatsWrapper__2gWPZ">
                        <h4 className="TeamDetailPage_StatsLabel__M-rGm">Captain: </h4>
                        <p className="TeamDetailPage_StatsValue__jCcwk">{teamdetails.Captain}</p></div>
                </div>
            </div>


            <h3 className="TeamDetailPage_MainHeading__1A_Be">Players List</h3>




            <div className="TeamDetailPage_PlayersGrid__3nPdR">

                {membersdetails.map((item) => (
                    <div key={item.name} className="PlayerCard_PlayerCard__3V5lN">
                        <div className="PlayerCard_PlayerImageWrapper__IxBc_"  >
                            <img className="PlayerCard_PlayerImage__2NQPh" src={item.img} alt={item.name} />
                        </div>
                        <div className="PlayerCard_PlayerDataWrapper__1pwlj">
                            <h3 className="PlayerCard_PlayerName__V5GIx">{item.name}</h3>
                            <div className="PlayerCard_PlayerStatsWrapper__38xmh">
                                <div>
                                    <p className="PlayerCard_StatValue__1qB-f">{item.matches}</p>
                                    <h4 className="PlayerCard_StatLabel__3EO5Y">Matches</h4>
                                </div>
                                <div>
                                    <p className="PlayerCard_StatValue__1qB-f">{item.runs}</p>
                                    <h4 className="PlayerCard_StatLabel__3EO5Y">Runs</h4>
                                </div><div><p className="PlayerCard_StatValue__1qB-f">{item.wickets}</p>
                                    <h4 className="PlayerCard_StatLabel__3EO5Y">Wickets</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}

export default Carddetails
