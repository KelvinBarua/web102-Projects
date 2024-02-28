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
        <WorkoutCards Split="Push/Pull/Legs" desc="A 3 or 6-day split that trains your body in three individual functions. A push day training chest/shoulders and triceps, a pull day training back and biceps, and finally a leg day. Allows you to train lagging body parts and large room for variety. Ideal for bodybuilding and strength."/>
        <WorkoutCards Split = "Full Body"/>
        <WorkoutCards Split = "Upper/Lower"/>
      </div>
    </div>
  )
}

export default App