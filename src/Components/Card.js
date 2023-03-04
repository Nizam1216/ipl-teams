import React from 'react'
import './Card.css'
import teams from '../utils/Json'
import { Link } from 'react-router-dom'
const Card = (props) => {
    
  return (
    <div className='homepage'>

       {teams.map((team,index)=>{
return( <Link to={`/blog/${team.id}`}
key={team.id+index} 
className='team-card'
style={{
    backgroundImage: team.background,
   
  }}
  

>
<img className='card-img'  src={team.img} alt={team.name} />
</Link>)
      
       })
     
       }

    </div>
  )
}

export default Card
