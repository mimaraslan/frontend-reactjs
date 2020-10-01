import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import {Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [emailId, setEmailId] = useState('')
const navigate = useNavigate()
const saveEmployee = (e) => {
  e.preventDefault();
  const employee = {firstName, lastName, emailId}
  EmployeeService.createEmployee(employee).then((response)=>{
    console.log(response.data)
    navigate('/employees')
  }).catch(error => {
    console.log(error)
  })
}

  return (
    <div>
      <br/><br/>
      <div className="container">
          <div className="row">
            <div className="card col-md-6 ofset-md-3 ofset-md-3 ">
              <h2 className="text-center">Add Employee</h2>
              <div className="card-body">
                <form>
                  <div className="form-group mb-2">
                    <label className="form-label">First Name:</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="form-control"
                      value={firstName}
                      onChange={(e)=> setFirstName(e.target.value)}
                      >
                    </input>
                  </div>
                  <div className="form-group mb-2">
                    <label className="form-label">Last Name:</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="form-control"
                      value={lastName}
                      onChange={(e)=> setLastName(e.target.value)}
                      >
                    </input>
                  </div>
                  <div className="form-group mb-2">
                    <label className="form-label">Email Id:</label>
                    <input
                      type="text"
                      placeholder="Enter email id"
                      className="form-control"
                      value={emailId}
                      onChange={(e)=> setEmailId(e.target.value)}
                      >
                    </input>
                  </div>
                  <button className="btn btn-success" onClick={(e) => saveEmployee(e)}> Submit</button>
                  <Link to ="/employees" className="btn btn-danger">Cancel</Link>               
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent