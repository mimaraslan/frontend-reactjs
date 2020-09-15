import React, {useState} from 'react'
const ListEmployeeComponent = () => {

  const [employees, setEmployess] = useState([]),

  return
  <div className="container">
    <h2 className="text-center">List Employess</h2>
    <table className="table table-bordered table-striped">
      <thead>
        <th> Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        {
          employees.map(
            employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{ employee.emailId}</td>
              </tr>
          )
        }
      </tbody>
    </table>
   </div>
    )

}

export default ListEmployeeComponent
