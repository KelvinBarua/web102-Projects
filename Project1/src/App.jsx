import './App.css';
import SOP_Logo from './components/SOP_Logo';
import WorkoutCards from './components/WorkoutCards';


const App = () => {

  return (
    <div className="App">
      <h1 id="MainHeading">STRENGTH OF SPARTA</h1>
      <SOP_Logo />
      <h2>Top 3 Workout Splits <br></br>(Beginners Edition)</h2>
      <div className = "WorkoutCardsSect">
        <WorkoutCards Split="Push/Pull/Legs" />
        <WorkoutCards Split = "Full Body"/>
        <WorkoutCards Split = "Upper/Lower"/>
      </div>
    </div>
  )
}

export default App