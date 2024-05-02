function testArrowFunctions() {
    const numbers =[1,2,3,4,5];
    const squareNumbers = number.map((number) => number * number);
    const evenNumbers = number.filter((number) => number % 2 === 0);
    const sumNumbers = number.reduce((total, number) => total + number);
    document.getElementById("arrowOutput").innerHTML =`
    <strong>Original Numbers:</strong> ${numbers.join(",")}<br>
    <strong>Original Numbers(map):</strong> ${squareNumbers.join(",")}<br>
    <strong>Original Numbers(filter):</strong> ${evenNumbers.join(",")}<br>
    <strong>Original Numbers(reduce):</strong> ${sumNumbers}<br>
    `;
}