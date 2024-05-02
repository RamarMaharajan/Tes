const employees = [
    { id: 1, name: "RAM", age: 27, designation: "Developer"},
    { id: 2, name: "SITA", age: 28, designation: "Tester"},
    { id: 3, name: "JACK", age: 30, designation: "UI/UX"},
    { id: 4, name: "RAM", age: 27, designation: "Manager"},
    { id: 5, name: "JOHN", age: 29, designation: "TeamLead"},
    { id: 6, name: "JACK", age: 25, designation: "Devops"},
];

console.log(employees.filter((emp) => emp.id !=4));