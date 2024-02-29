import './App.css';
import SOP_Logo from './components/SOP_Logo';
import WorkoutCards from './components/WorkoutCards';
import Images from './components/Images';

const App = () => {

  return (
    <div className="App">
      <h1 id="MainHeading">STRENGTH OF SPARTA</h1>
      <h2>Strong Bodies, Strong Lives</h2>
      <SOP_Logo />
      <h2>Top 3 Workout Splits <br></br>(Beginners Edition)</h2>
      <div className = "WorkoutCardsSect">
        <WorkoutCards Split="Push/Pull/Legs" desc="A 3 or 6-day split that trains your body in three individual functions. A push day training chest/shoulders and triceps, a pull day training back and biceps, and finally a leg day. Allows you to train lagging body parts and large room for variety. Ideal for bodybuilding and strength." src={Images.imgOne}/>
        
        <WorkoutCards Split = "Full Body" desc="Train all muscle groups equally on any given training day. Bigger emphasis on compound movements like the barbell bench press, barbell squat, and deadlifts. Great for learning the basic compound movements and finding your groove. Excellent beginner option, can be ran for 3 days or more." src={Images.imgTwo}/>

        <WorkoutCards Split = "Upper/Lower" desc="Train the upper region of the body in one day and the lower region (leg day) the other. Upper body days consist of exercsies for the chest, shoulders, back, and all the muscles in the arm. Leg day follows a standard leg day procedure. Perfect alternative to push/pull/legs if short on time/weekly frequency." src={Images.imgThree}/>
      </div>

      <h2>The Big 5 Compound Lifts + Form Tips</h2>
      <div className="FormTips">
        <WorkoutCards Split="Barbell Bench Press" src={Images.BB_BenchPress}/>
        <WorkoutCards Split="Barbell Deadlift" src={Images.BB_Deadlift}/>
        <WorkoutCards Split="Barbell Squat" src={Images.BB_Squat}/>
        <WorkoutCards Split="Barbell Bent-Over Row" src={Images.BB_BentRow}/>
        <WorkoutCards Split="Barbell Overhead Press" src={Images.BB_OverheadPress}/>

        
      </div>
    </div>
  )
}

export default App