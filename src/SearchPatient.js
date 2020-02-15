import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Input} from 'antd'

class SearchPatient extends Component {
    constructor() {
        super()
        this.state = {
            searchStr: ''
        }
    }
onSearch = () => {
    if (this.state.searchStr.length > 0) {
        const filterPatient = this.props.patient.patients.filter(person => {
            if (
                person.patientid
                .includes(this.state.searchStr) ||
                person.firstname
                .toLowerCase()
                .includes(this.state.searchStr.toLowerCase()) ||
                person.lastname
                .toLowerCase()
                .includes(this.state.searchStr.toLowerCase()) ||
                person.doctor
                .toLowerCase()
                .includes(this.state.searchStr.toLowerCase()) ||
                person.insurance
                .toLowerCase()
                .includes(this.state.searchStr.toLowerCase())
            ) {
                return true
            } else {
                return false
            }
        })
        console.log('Filtered Patient', filterPatient)
        this.props.setSearchPatient(filterPatient)
    } else {
        this.props.setSearchPatient([])
    }
} 
    render() {
        const {searchStr} = this.state
        return(
            <div>
                <Input.Search 
                placeholder="Search Patients..."
                value={searchStr}
                onChange={e => this.setState({searchStr: e.target.value})}
                onSearch={() => this.onSearch()}
                />

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state:', state)
    return state
}

const mapDispatchToProps = dispatch => ({
    setSearchPatient(arr) {
        dispatch({
            type: 'SEARCH_LIST',
            payload: arr
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (SearchPatient)