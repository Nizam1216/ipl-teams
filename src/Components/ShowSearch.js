import React from 'react'

const ShowSearch = ({ search, list }) => {
  return (
    <div>
   
      {list && list.length > 0 ? (
        <div 
        className="TeamDetailPage_PlayersGrid__3nPdR"
        style={{marginTop:"100px"}}
        >
          {list.map((item) => (
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
                  </div>
                  <div>
                    <p className="PlayerCard_StatValue__1qB-f">{item.wickets}</p>
                    <h4 className="PlayerCard_StatLabel__3EO5Y">Wickets</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  )
}

export default ShowSearch;