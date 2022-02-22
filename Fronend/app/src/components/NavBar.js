import { NavLink } from "react-router-dom";
import '../Styles/NavBar.css'

const NavBar = () => {
  return (

    <div style={{ border: "5px solid skyblue" }}>
      <NavLink activeClassName="active" style={{ margin: "20px" }} to="/">Home</NavLink>
      <NavLink activeClassName="active" style={{ margin: "20px" }} to="/doctors/search/speciality/">SEARCH</NavLink>
      <NavLink activeClassName="active" style={{ margin: "20px" }} to="/doctors/add">ADD</NavLink>


    </div>


  )
}

export default NavBar;
