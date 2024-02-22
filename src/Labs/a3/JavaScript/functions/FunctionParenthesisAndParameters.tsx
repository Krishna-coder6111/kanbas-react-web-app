function functionParenthesisAndParameters() {
    const square = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    console.log(twoSquared);
    console.log(threePlusOne);

    return (
        <>
            <h3>Function Parenthesis and Parameters</h3>
            twoSquared = {twoSquared}<br/>
            threePlusOne = {threePlusOne}<br/>
        </>
    );
}

export default functionParenthesisAndParameters;