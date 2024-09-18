const employees = [{name: "Amy",shifts:[{Day:"Monday",Hours:6},{Day:"Thursday",Hours:4},{Day:"Saturday",Hours:8}]},
    {name: "Bruce",shifts:[{Day:"Friday",Hours:8},{Day:"Saturday",Hours:8},{Day:"Sunday",Hours:6}]},
    {name: "Charlie",shifts:[{Day:"Tuesday",Hours:6},{Day:"Thursday",Hours:4},{Day:"Saturday",Hours:8}]},
    {name: "Daniel",shifts:[{Day:"Wednesday",Hours:6},{Day:"Thursday",Hours:4},{Day:"Sunday",Hours:6}]}]//creation of giant data set

function displayEmployeeShifts(x){
    let employeeName = x.name;
    let values = x.shifts;
    console.log(`${employeeName} works`);
    values.forEach(shift=>{console.log(`${shift.Day} for ${shift.Hours} hours`)//iterates over each shift and displays the time and day
    });
    return;
}
displayEmployeeShifts(employees[0]);

function assignedShift(x,y,z){
    let returnedName = employees.find(employee=>employee.name===x);
    let index = employees.findIndex(employee=>employee.name===x);//returns index of the employee
    let neededShifts = returnedName.shifts; //returns array of just the shifts for the given employee
    if (neededShifts.some(shift=>shift.Day===y)){
        console.log("Employee already works that day");//checks for shifts that day
    }
    else{
        let newShift = {Day:y,Hours:z};
        return employees[index].shifts.push(newShift);//adds the newshift to the shifts
    }
    return;
}
assignedShift("Charlie","Thursday",6);

function calculateTotalHours(x){
    let employeeFinder = employees.find(employee=>employee.name===x);
    let shiftsCurrent = employeeFinder.shifts;
    let sum = shiftsCurrent.reduce((x,y)=>x+y.Hours,0);//sums the hours worked
    console.log(sum);
    return;
}
calculateTotalHours("Daniel");

function listAvailableEMployees(x){
    for (let i = 0; i < employees.length; i++) {
        let arr = employees[i].shifts;
        if (arr.some(shift=>shift.Day===x)){//use some to see if any day matches
            return;
        }
        else{
            console.log(employees[i].name);//return name if employee does not have shift
        }
    }
    return;
}
listAvailableEMployees("Wednesday");



