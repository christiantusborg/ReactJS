import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class PatientStore extends EventEmitter {
  constructor() {
    super()
    this.patients = [
      {

        id: 113464613,
        name : "H.C. Andersen", 
        email: "hc@andersen.dk", 
        birthday: "10/10/2010",
        phone: "12345678"
      },
      {
        id: 235684679,
        name : "H.C. Prdersen", 
        email: "hc@pedersen.dk", 
        birthday: "10/10/2010",
        phone: "12345678"
      },
    ];
  }

  createPatient(name,email,birthday,phone) {
    const id = Date.now();

    this.patients.push({
      id,
      name,
      email,
      birthday,
      phone
    });

    this.emit("change");
  }

  getAll() {
    return this.patients;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_Patient": {
        this.createPatient(action.text);
        break;
      }
      case "RECEIVE_PatientS": {
        this.patients = action.patients;
        this.emit("change");
        break;
      }
    }
  }

}

const patientStore = new PatientStore;
dispatcher.register(patientStore.handleActions.bind(patientStore));

export default patientStore;
