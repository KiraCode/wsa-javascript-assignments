class Doc {
  constructor(name, exp) {
    this.name = name;
    this.exp = exp;
  }
}

class Doctor extends Doc {
  constructor(docName, docExperience) {
    super(docName, docExperience);
  }
}

class Nurse extends Doc {
  constructor(nurseName, nurseExperience) {
    super(nurseName, nurseExperience);
  }
}

const doctor = new Doctor("Dr.John", "22yrs");
const nurse = new Nurse("Marry", "6yrs");

class Hospital {
  constructor(patientName) {
    this.patientName = patientName;
    this.docName = doctor.name;
    this.docExperience = doctor.experience;
    this.nurseName = nurse.name;
    this.nurseExperience = nurse.experience;
  }
}

const hospital = new Hospital("William");

document.writeln(`DocName: ${hospital.docName} <br/>
DocExperience: ${hospital.docExperience} <br/>
NurseName: ${hospital.nurseName} <br/>
NurseExperience: ${hospital.nurseExperience} <br/>
PatientName: ${hospital.patientName} <br/>`);
