import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function infoPage() {
  const params = useParams();
  return (
    <div>
      <h1>{params.pageId}</h1>
      <p>Comic Info Goes Here: </p>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  )
}

export default infoPage;