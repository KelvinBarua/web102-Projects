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
        <WorkoutCards Split="Push/Pull/Legs" desc="A 3 or 6-day split that trains your body in three individual functions. A push day training chest/shoulders and triceps, a pull day training back and biceps, and finally a leg day. Allows you to train lagging body parts and large room for variety. Ideal for bodybuilding and strength." src={Images.imgTwo} link="https://www.youtube.com/watch?v=TJHZI3McmE4&t=60s"/>
        
        <WorkoutCards Split = "Full Body" desc="Train all muscle groups equally on any given training day. Bigger emphasis on compound movements like the barbell bench press, barbell squat, and deadlifts. Great for learning the basic compound movements and finding your groove. Excellent beginner option, can be ran for 3 days or more." src={Images.imgOne} link="https://www.youtube.com/watch?v=5JmWguyvu7Y"/>

        <WorkoutCards Split = "Upper/Lower" desc="Train the upper region of the body in one day and the lower region (leg day) the other. Upper body days consist of exercsies for the chest, shoulders, back, and all the muscles in the arm. Leg day follows a standard leg day procedure. Perfect alternative to push/pull/legs if short on time/weekly frequency." src={Images.imgThree} link="https://www.youtube.com/watch?v=eWPj3ikAExk"/>
      </div>

      <br></br>
      <h2>The Big 5 Compound Lifts + Form Tips</h2>
      <div className="FormTips">
        <WorkoutCards Split="Barbell Bench Press" desc="The barbell bench press, often regarded as the king of upper body exercises, is the most popular compound lift. It builds your chest, shoulders, and triceps. It is also the most accessible since barbells and benches are commonplace in most gyms." src={Images.BB_BenchPress} desc_id="BenchDesc" link="https://www.youtube.com/shorts/0cXAp6WhSj4"/>

        <WorkoutCards Split="Barbell Deadlift" desc="While the barbell bench press is the most popular and regarded as the king of upper body workouts, the deadlift is no less. In fact, the deadlift has been regarded as THE whole body lift. It builds your back, your entire lower body, and builds a killer core. It is also the compound movement where you can lift the heaviest. That also makes it the most risky though, so proper form and core bracing is a must." src={Images.BB_Deadlift} desc_id="DeadliftDesc" link="https://www.youtube.com/shorts/8np3vKDBJfc"/>

        <WorkoutCards Split="Barbell Squat" desc="The squat is the main compound movement to build the entire musculature of your lower body. Your quads, glutes, hamstrings, and a bit of calves are all hit with this exercise. It is also a very good core builder granted that you brace properly and use proper breathing. Similar to the deadlift and bench press, it is also a very accessible exercise since every commercial gym as a squat/power rack." src={Images.BB_Squat} link="https://www.youtube.com/shorts/iZTxa8NJH2g" desc_id="SquatDesc"/>

        <WorkoutCards Split="Barbell Bent-Over Row" desc="The barbell bent-over row is a strength-building exercise that targets the back muscles, primarily the latissimus dorsi, rhomboids, and trapezius, as well as engaging the biceps and core for stability. This exercise is highly accessible, requiring only a barbell and weights, making it suitable for gym-goers of all levels to effectively enhance upper body strength." src={Images.BB_BentRow} link="https://www.youtube.com/shorts/Nqh7q3zDCoQ"/>

        <WorkoutCards Split="Barbell Overhead Press" src={Images.BB_OverheadPress} desc="The barbell military press, also known as the overhead press, is a fundamental upper body exercise that primarily strengthens the shoulders (deltoids), triceps, and upper back. It is easily accessible, requiring just a barbell and weights, and is a key movement for beginners to intermediate individuals looking to build shoulder strength and improve their overall upper body muscularity." desc_id="OHPDesc" link="https://www.youtube.com/shorts/zSU7T1zZagQ"/>
      </div>

      <br></br>
      <h2>Extras</h2>
      <div className="Extras">
        <WorkoutCards desc_id="StrengthLevel" Split= "Strength Level" desc="Strength level is a great tool to calculate your performance levels on the main compound lifts as well as any other lift. Use this tool carefully as wrongfully calculating your one-rep max can lead to injury. Make sure you properly train in the gym before using this calculator. This calculator will give you an idea of where you are at as a gym-goer (beginner, intermediate, etc..)" src={Images.strong_guy} link="https://strengthlevel.com/"/>

        <WorkoutCards desc_id="TDEE" Split="TDEE Calculator" desc="The TDEE Calculator will help you determine your maintanenace calorlies based on simple metrics. Knowing your maintenace calcories is important so that you can determine how many calcories you should be eating to lose weight, gain weight, or maintain what you currently have. Generally speaking, gaining strenght is much easier and effective while eating a surplus." src={Images.calculator} link="https://tdeecalculator.net/"/>
      </div>
    </div>
  )
}

export default App