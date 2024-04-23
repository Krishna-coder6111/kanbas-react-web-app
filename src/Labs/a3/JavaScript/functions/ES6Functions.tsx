function ES6Functions() {

    const subtract = (a: number, b: number) => {
        return a - b;
    }

    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);

    return (
        <>
            <h2>New ES6 Functions</h2>
            threeMinusOne = {threeMinusOne}<br/>
            subtract(3, 1) = {subtract(3, 1)}<br/>
        </>
    );
}

export default ES6Functions;