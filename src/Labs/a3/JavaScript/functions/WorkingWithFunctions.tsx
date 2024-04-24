import ES5Functions from "./ES5Functions";
import ES6Functions from "./ES6Functions";
import ImpliedReturn from "./ImpliedReturn";
// import functionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import FunctionDestructing from "./FunctionDestructing";

function WorkingWithFunctions() {
    return(
       <div>
          <h1>Working With Functions</h1>
          <ES5Functions />
          <ES6Functions />
          <ImpliedReturn />
          {/* <functionParenthesisAndParameters /> */}
          <FunctionDestructing/>
       </div>
    );
 }

 export default WorkingWithFunctions;