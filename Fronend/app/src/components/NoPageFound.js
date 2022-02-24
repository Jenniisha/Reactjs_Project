import { PureComponent } from "react";
// import {Redirect} from "react-Router";
import { Link } from "react-router-dom";


// PureComponent  not having any state and it renders very fast
class NoPageFound extends PureComponent {
    render() {
        return (
           
                <div style={{color:"red"}}>
                <p>Sorry,the page you are looking does not exist!!!</p>
                <p>Contact the site admin</p>
                <br /><br />
                Go back to Home Page <Link to={"/"}>Home</Link>

            </div>
        )
    }
}

export default NoPageFound;

