import Assignment3 from "./a3";
import {Link} from "react-router-dom";
function Labs() {
 return(
  <div>
   <Link to="/Labs/a3">A3</Link> |
   <Link to="/Kanbas">Kanbas</Link> |
   <Link to="/hello">Hello</Link> |
   <Assignment3/>
  </div>
 )
}
  export default Labs;
  