import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ES5Functions from "./functions/ES5Functions";
import ES6Functions from "./functions/ES6Functions";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import JsonStringify from "./json/JsonStringify";
import House from "./json/House";
import Destructing from "./json/Destructing";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./string/TemplateLiterals";


function JavaScript() {
    console.log("Hello World!");
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants />
          <VariableTypes />
          <BooleanVariables />
          <IfElse />
          <TernaryOperator />
          <WorkingWithFunctions />
          <WorkingWithArrays />
          <JsonStringify />
          <House />
          <Destructing />
          <Spreading />
          <TemplateLiterals />
       </div>
    );
 }
 export default JavaScript