// setInterval(() =>{
//     console.log("Hello from setIntervel log!!");
// } 1000);


// const functionOne =( ) => {
//     console.log("Hey, this is Function One!");
//     functionTwo();
//     console.log("Hey, this is Function One Part 2!!");
// };
// const interval=functionTwo = () => {
//     setInterval(() => console.log("Hey this is Function Two!!"), 1000);
// };
// functionOne();


const getUserName =(name) => {
    setTimeout(() => {
        return{ user:name};
    }, 3000);
};
const user = getUserName("GUVI");
console.log(user);