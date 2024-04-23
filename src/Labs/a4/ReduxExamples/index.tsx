import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoForm from "./todos/TodoForm";

const ReduxExamples = () => {
    return (
        <div>
            <h2>Redux Examples</h2>
            <HelloRedux/>
            <CounterRedux/>
            <AddRedux/>
        </div>
    );
};

export default ReduxExamples;