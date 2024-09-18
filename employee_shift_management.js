const employees = [{name: "Amy",shifts:[{Day:"Monday",Hours:6},{Day:"Thursday",Hours:4},{Day:"Saturday",Hours:8}]},
    {name: "Bruce",shifts:[{Day:"Friday",Hours:8},{Day:"Saturday",Hours:8},{Day:"Sunday",Hours:6}]},
    {name: "Charlie",shifts:[{Day:"Tuesday",Hours:6},{Day:"Thursday",Hours:4},{Day:"Saturday",Hours:8}]},
    {name: "Daniel",shifts:[{Day:"Wednesday",Hours:6},{Day:"Thursday",Hours:4},{Day:"Sunday",Hours:6}]}]//creation of giant data set

function displayEmployeeShifts(x){
    let employeeName = x.name;
    let values = Object.values(x.shifts);
    console.log(`${employeeName} works`);
    values.forEach(shift=>{console.log(`${shift.Day} for ${shift.Hours} hours`)
    });
    return;
}
displayEmployeeShifts(employees[0]);