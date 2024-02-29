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

      <br></br>
      <h2>The Big 5 Compound Lifts + Form Tips</h2>
      <div className="FormTips">
        <WorkoutCards Split="Barbell Bench Press" desc="The barbell bench press, often regarded as the king of upper body exercises, is the most popular compound lift. It builds your chest, shoulders, and triceps. It is also the most accessible since barbells and benches are commonplace in most gyms. "src={Images.BB_BenchPress}/>

        <WorkoutCards Split="Barbell Deadlift" desc="While the barbell bench press is the most popular and regarded as the king of upper body workouts, the deadlift is no less. In fact, the deadlift has been regarded as THE whole body lift. It builds your back, your entire lower body, and builds a killer core. It is also the compound movement where you can lift the heaviest. That also makes it the most risky though, so proper form and core bracing is a must." src={Images.BB_Deadlift}/>

        <WorkoutCards Split="Barbell Squat" src={Images.BB_Squat}/>

        <WorkoutCards Split="Barbell Bent-Over Row" src={Images.BB_BentRow}/>

        <WorkoutCards Split="Barbell Overhead Press" src={Images.BB_OverheadPress}/>
      </div>

      <br></br>
      <h2>Extras</h2>
      <div className="Extras">
        <WorkoutCards id="StrengthLevel" Split="Strength Level" desc="Strength level is a great tool to calculate your performance levels on the main compound lifts as well as any other lift. Use this tool carefully as wrongfully calculating your one-rep max can lead to injury. Make sure you properly train in the gym before using this calculator. This calculator will give you an idea of where you are at as a gym-goer (beginner, intermediate, etc..)" src={Images.strong_guy}/>

        <WorkoutCards id="TDEE" Split="TDEE Calculator" desc="The TDEE Calculator will help you determine your maintanenace calorlies based on simple metrics. Knowing your maintenace calcories is important so that you can determine how many calcories you should be eating to lose weight, gain weight, or maintain what you currently have. Generally speaking, gaining strenght is much easier and effective while eating a surplus." src={Images.calculator}/>
      </div>
    </div>
  )
}

export default App