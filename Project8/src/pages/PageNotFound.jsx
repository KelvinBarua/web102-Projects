import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <h1>404 Error: Page Not Found</h1>
      <Link to="/"><button>Go Back Home</button></Link>
    </div>
  )
}

export default PageNotFound;