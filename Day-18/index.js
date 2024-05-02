const getStates=(callback) => {
    setTimeout(() => {
        let state = "TamilNadu";
        console.log(state);
        callback();
    },2000);
};

const getCities=(callback) => {
    setTimeout(() => {
        let state = "Chennai";
        console.log(city);
        callback();
    },2000);
};

const done =() => {
console.log("Done!");
};
const getAddress = () => {
    getStates().then(state) => {
        return getCities();
    },
    (err) => {
        console.log(err);
    }
}
.then(() => {
    return done();
});

