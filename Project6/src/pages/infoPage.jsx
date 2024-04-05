import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Navbar from "../components/navbar";

function infoPage() {
  const params = useParams();
  return (
    <body className="info-page-body">
      <div className="info-page-container">
        <Navbar />
        <div className="info-container">
          <h1>{params.pageId}</h1>
          <p>Comic Info Goes Here: </p>
          <Link to="/"><button>Go Back Home</button></Link>
        </div>
      </div>
    </body>
  )
}

export default infoPage;