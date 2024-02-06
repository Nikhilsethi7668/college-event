
import './Navbar.css'
import { NavLink } from 'react-router-dom';

function CollapsibleExample() {
  return (

    <div className="Navbar">
      <div className="college">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aXKcidZMuikmuvOr57Vi4iUDZdiHHeVL8ITtqIcSVg&s" alt="loading" />
        <h3>IMSEC Events</h3>
      </div>
      <NavLink to="/"><h3>Home</h3></NavLink>
      <NavLink to="/about"><h3>About IMSEC</h3></NavLink>
      <div className="button">
        <NavLink to="/login"><h3>Sign-Out</h3></NavLink>
      </div>
    </div>

  );
}

export default CollapsibleExample;
