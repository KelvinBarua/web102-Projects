import { Link, useLocation } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function StatsPage() {
  let {state} = useLocation();
  return (
    <div className="stats-page-main-container">
      <LineChart width={1250} height={600} data={state.data}>
        <YAxis tickCount={state.data.length} dataKey="prices" stroke="black" label={{value: "Price ($)", fill: "white", angle: -90, position: 'insideLeft'} } />
        <XAxis stroke="black" />
        <Line type="monotone" dataKey="prices" stroke="black" />
        <Tooltip color="black"/>
      </LineChart>

      <Link to="/"><button className="statsPageHomeBtn">Go Back Home</button></Link>
    </div>
  )
}

export default StatsPage;