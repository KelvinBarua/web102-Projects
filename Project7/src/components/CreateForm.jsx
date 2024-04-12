const CreateForm = ({crewmateName, setName, crewmateSpeed, setSpeed, crewmateColor, setColor, createCrewmate}) =>{
  return (
    <div className="crewmateModArea">
          <form id="create-form">
            <label for="name-field">Crewmate Name 🙍: </label>
            <input 
            id="name-field" 
            type="text"
            value={crewmateName}
            onChange={(e) => {setName(e.target.value)}}></input>
            <label for="speed-field">Crewmate Speed 🏃‍♂️: </label>
            <input 
            id="speed-field" 
            type="text"
            value={crewmateSpeed}
            onChange={(e) => {setSpeed(e.target.value)}}></input>
            <div className="color-select-area">
              <p className="ColorSelectTxt">Select Color 🎨:</p>
              <label>
                <input 
                  type="radio"
                  value="Red"
                  checked={crewmateColor=='Red'}
                  onChange={(e) => {setColor(e.target.value)}}
                />Red
              </label>
              <label>
                <input 
                  type="radio"
                  value="Green"
                  checked={crewmateColor=='Green'}
                  onChange={(e) => {setColor(e.target.value)}}
                />Green
              </label>
              <label>
                <input 
                  type="radio"
                  value="Blue"
                  checked={crewmateColor=='Blue'}
                  onChange={(e) => {setColor(e.target.value)}}
                />Blue
              </label>
            </div>
            <button onClick={createCrewmate}>Create Crewmate!</button>
          </form>
        </div>
  )
}

export default CreateForm;