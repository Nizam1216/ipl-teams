import React from 'react'
import ShowSearch from '../Components/ShowSearch'
import CreateForm from '../Components/CreateForm'
const CreateTeam = ({list,search}) => {
    return (
        <div>
           
           {list === null && <CreateForm />}
      {list !== null && <ShowSearch search={search} list={list} />}
      {!search && list.length === 0 && <CreateForm /> }

          
        </div>
    )
}

export default CreateTeam
