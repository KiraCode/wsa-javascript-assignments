function Person(firstName, age, phoneNumber) {
  this.firstName = firstName;
  this.age = age;
  this.phoneNumber = phoneNumber;
}

Person.prototype.lastName = "A H";

const person = new Person("Rohan", 24, 9123456789);
document.writeln(`Input : <br/> FirstName: ${person.firstName} <br/>
      Age: ${person.age}<br/>
      PhoneNumber: ${person.phoneNumber} <br> <br> <hr>`);

console.log(person);
document.writeln(`Output : <br> FirstName: ${person.firstName} <br/>
      LastName: ${person.lastName}<br/>
      Age: ${person.age}<br/>
      PhoneNumber: ${person.phoneNumber}`);
