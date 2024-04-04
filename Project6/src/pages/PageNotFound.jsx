import { Link } from "react-router-dom";

function NotFound() {
  return (
    <body className="NotFoundPageBody">
      <div>
        <h1>404 Error: Page Not Found</h1>
        <Link to='/'><button>Home</button></Link>
      </div>
    </body>
  )
}

export default NotFound;