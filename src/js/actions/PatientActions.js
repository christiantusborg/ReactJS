import dispatcher from "../dispatcher";

export function createPatient(text) {
  dispatcher.dispatch({
    type: "CREATE_Patient",
    text,
  });
}

export function deletePatient(id) {
  dispatcher.dispatch({
    type: "DELETE_Patient",
    id,
  });
}

export function reloadPatients() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_Patient"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_PatientS", patients: [
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
    ]});
  }, 1000);
}
