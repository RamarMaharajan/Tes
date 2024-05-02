// let promiseObj = new Promise((resolve, reject) => {
//     console.log("Getting the name from DataBase.");
//     setTimeout(() => {
//         resolve("Ramar Maharajan");
//         reject("No Data!!");
//     },2000);
// });

// promiseObj.then(
//     (val) => {
//         console.log(`Name received from DataBase = ${val}.`);
//     },
//     (err) => {
//         console.log(`Error occured = ${err}!!`);
//     }
// );


function checkPositive(number) {
    return new Promise((resolve,reject) => {
        if(number >0) {
            resolve(`Sucess: The number $(number) is positive.`);
        } else {
            reject (`Error: The number $(number) is negative.`);
        }
    });
}

checkPositive(50).then((val) => {
    console.log(val);
})
.catch((err) => {
    console.log(err);
});

checkPositive(-50).then((val) => {
    console.log(val);
})
.catch((err) => {
    console.log(err);
});