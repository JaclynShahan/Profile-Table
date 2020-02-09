import React, {Component} from 'react'
import {Icon} from 'antd'


class PatientTable extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    deletePatient() {

    }
    render() {
        const patientRows = this.props.patientList.map((person, indexPoint) => {
            return (
                <tr key={indexPoint}>
                <td><button onClick={() => this.props.deletePatient(person.id)}><Icon type="delete"/></button></td>
                <td><button onClick={() => this.props.editPatient()}><Icon type="edit"/></button></td>
                <td>{person.patient_id}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.doctor}</td>
                <td>{person.insurance}</td>
                <td>{person.amount_owed}</td>
                </tr>
            )
        })
        return(
            <table>
                <tbody>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Patient ID:</th>
                    <th>First Name:</th>
                    <th>Last Name:</th>
                    <th>Doctor:</th>
                    <th>Insurance:</th>
                    <th>Amount Owed:</th>
                    <th>Charges</th>
                    <th>Exercises</th>
                    {patientRows}
                </tbody>
            </table>
        )
    }
}

export default PatientTable