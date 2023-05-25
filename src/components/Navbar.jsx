import { Link } from "react-router-dom"


function Navbar() {
  return (
<nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
         <Link style={{color: "white"}}>LAB-WIKICOUNTRIES</Link>
        </div>
      </nav>

  )

}

export default Navbar