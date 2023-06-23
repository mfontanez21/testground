class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

class Surgeon{
  constructor(name, department){
    this.name = name
    this.deparment = department
  }

  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}


const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular")

const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics")

console.log(surgeonRomero.name)
surgeonRomero.takeVacationDays(3)
console.log(surgeonRomero.remainingVacationDays)

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  static generatePassword(){
    const randomNumber = Math.floor(Math.random()*10000)
    return randomNumber
  }
  get certifications() {
    return this._certifications
  }

  addCertification(newCertification){
    this._certifications.push(newCertification)
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification("Genetics")
console.log(nurseOlynyk.certifications)

