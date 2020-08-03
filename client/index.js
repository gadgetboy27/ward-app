import React from 'react'
import ReactDOM from 'react-dom'

class Patient {
  constructor(id, name, location, notes) {
    this.id = id
    this.name = name
    this.location = location
    this.notes = notes
  }
}

class UI {
  static displayPatient(){
    const storedPatients = [
      {
        id: 1,
        name: 'john',
        location: 'room 3',
        notes: 'Has problem with arm'
      },
      {
        id: 2,
        name: 'jill',
        location: 'room 10',
        notes: 'Has problem with stomach'
      }
    ]

    const patients = storedPatients

    patients.forEach((patient) => UI.addPatientToList(patient))
  }

  static addPatientToList(patient) {
    const list = document.querySelector('#user-list')

    const row = document.createElement('tr')

    row.innerHTML = `
        <td>${patient.id}</td>
        <td>${patient.name}</td>
        <td>${patient.location}</td>
        <td>${patient.notes}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        <td><a href="#" class="btn btn-info btn-sm edit">+</a></td>
    `
    list.appendChild(row)
  }
}
