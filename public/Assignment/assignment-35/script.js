let Employee = {
  name: "raghunath",

  empId: "001",

  empSalray: "10000",

  deptName: "WSA",
};

document.write(`a) Employee Details : <br> 
      name : ${Employee.name} <br> 
      empId : ${Employee.empId} <br>
      empSalray : ${Employee.empSalray} <br> 
      deptName : ${Employee.deptName} <br> <br>`);

document.write(
  `b) Length of the Employee object : ${
    Object.keys(Employee).length
  } <br> <br> `
);
delete Employee.deptName;
document.write(`c) deptName deleted`);
console.log(Employee);
