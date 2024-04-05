import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import Navbar from "../components/navbar";

function infoPage() {
  const params = useParams();
  let { state } = useLocation(); //lets us pass data between this page and ComicData for a respectice comic.

  return (
    <body className="info-page-body">
      <div className="info-page-container">
        <Navbar />
        <div className="info-container">
          <h1>{state.title}</h1>
          <img className="infoPageComicIMG" src={state.comic_cover} />
          <h3>Comic Price: ${state.price}</h3>
          <p>Comic Description: {state.description}</p>
          <Link to="/"><button>Go Back Home</button></Link>
        </div>
        
      </div>
    </body>
  )
}

export default infoPage;