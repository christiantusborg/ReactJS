import React from "react";

import Patient from "../components/Patient";
import * as PatientActions from "../actions/PatientActions";
import PatientStore from "../stores/PatientStore";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getPatient = this.getPatient.bind(this);
    this.state = {
      patients: PatientStore.getAll(),
    };
  }

  componentWillMount() {
    PatientStore.on("change", this.getPatient);
  }

  componentWillUnmount() {
    PatientStore.removeListener("change", this.getPatient);
  }

  getPatient() {
    this.setState({
      patients: PatientStore.getAll(),
    });
  }

  reloadPatients() {
    PatientActions.reloadPatients();
  }

  render() {
    const { patients } = this.state;

    const PatientComponents = patients.map((patient) => {
        return <Patient key={patient.id} {...patient}/>;
    });

    return (
      <div>
        <button onClick={this.reloadPatients.bind(this)}>Reload!</button>
        <h1>Patient's</h1>
        <ul>{PatientComponents}</ul>
      </div>
    );
  }
}
