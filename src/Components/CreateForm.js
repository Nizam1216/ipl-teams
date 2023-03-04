import React from 'react'
import './CreateForm.css'
import teams from '../utils/Json'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateForm = () => {
const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        teamCode: '',
        teamLogo: '',
        themeStartColor: '#000',
        themeEndColor: '#000',
        teamCoach: '',
        teamCaptain: '',
        championships: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const newTeam = { ...formData };
        teams.push(newTeam);
        alert("Team has been created Sucessfully")

        localStorage.setItem('formData', JSON.stringify(formData));
        navigate("/")
      };
    
  return (
    <div>
        <section>
                <form className="CreateTeamPage_CreationForm__RQTRw" onChange={handleInputChange}>
                    <h1 className="CreateTeamPage_Heading__QC1tN">Create Team</h1>
                    <div>
                        <p className="CreateTeamPage_Label__2iJCK">Team Name</p>
                        <input className="CreateTeamPage_InputField__2KT8x" type="text" name="name" required="" value={formData.name}/>
                    </div>
                    <div>
                        <p className="CreateTeamPage_Label__2iJCK">Team Code</p>
                        <input className="CreateTeamPage_InputField__2KT8x" type="text" name="teamCode" required="" value={formData.teamCode} />
                    </div>
                    <div>
                        <p className="CreateTeamPage_Label__2iJCK">Team Logo(URL)</p>
                        <input className="CreateTeamPage_InputField__2KT8x" type="url" name="teamLogo" required=""value={formData.teamLogo} />
                    </div>
                    <div className="CreateTeamPage_ThemePickerWrapper__1Tcuf">
                        <div>
                            <p className="CreateTeamPage_Label__2iJCK">Team Theme Start Color</p>
                            <input type="color" name="themeStartColor" required="" value={formData.themeStartColor} />
                        </div>
                        <div>
                            <p className="CreateTeamPage_Label__2iJCK">End Color</p>
                            <input type="color" name="themeEndColor" required="" value={formData.themeEndColor} />
                        </div>
                    </div>
                    <div>
                        <p className="CreateTeamPage_Label__2iJCK">Coach Name</p>
                        <input className="CreateTeamPage_InputField__2KT8x" type="text" name="teamCoach" required="" value={formData.teamCoach} />
                    </div>
                    <div>
                        <p className="CreateTeamPage_Label__2iJCK">Captain Name</p>
                        <input className="CreateTeamPage_InputField__2KT8x" type="text" name="teamCaptain" required="" value={formData.teamCaptain} />

                    </div>
                    <div>
                        <p className="CreateTeamPage_Label__2iJCK">Championship Years (Separated by comma)</p>
                        <input className="CreateTeamPage_InputField__2KT8x" type="text" name="championships" required="" value={formData.championships} />

                    </div>
                    <div className="CreateTeamPage_ButtonWrapper__1Bz0Z">
                        <button className="Button_Button__1hxBU " onClick={handleSubmit}>Create Team</button>
                    </div>
                </form>
            </section>
    </div>
  )
}

export default CreateForm
