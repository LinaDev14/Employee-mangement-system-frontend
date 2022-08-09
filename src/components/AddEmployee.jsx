import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
    
            id: "",
            firstName:"",
            lastName: "",
            email: "",
            phoneNumber: "",
            country: ""
    });

    const navigate = useNavigate();


    const handleChange = (e) =>{

        const value = e.target.value;

        setEmployee({
            ...employee, [
                e.target.name
            ]: value
        });
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response) => {
            console.log(response)
            navigate("/employeeList")
        }).catch((error) => {
            console.log(error)
        })
    }


  return (
      <div className="container_employee">
            <div className="employee">
                    <div className="title_employee">
                          <h1>Add New Employee</h1>
                  </div>
                    <div className="label_name">
                        <label>First Name: </label>
                  <input
                      type="text" className="input_field"
                      name="firstName"
                      value={employee.firstName}
                      onChange={(e) => handleChange(e)}
                    
                      
                  />
                    </div>
                    <div className="label_name">
                        <label>Last Name: </label>
                  <input
                      type="text" className="input_field"
                      name="lastName"
                      value={employee.lastName}
                      onChange={(e) => handleChange(e)}
                  
                  />
                    </div>
                    <div className="label_name">
                        <label>Email: </label>
                  <input
                      type="email" className="input_field" 
                      name="email"
                      value={employee.email}
                      onChange={(e) => handleChange(e)}
                      
                  />
                    </div>
                    <div className="label_name">
                        <label>Number Phone: </label>
                  <input type="text" className="input_field"
                      name="phoneNumber"
                      value={employee.phoneNumber}
                      onChange={(e) => handleChange(e)}
                  />
              </div>
              
                    <div className="label_name">
                        <label>Country: </label>
                        <input 
                        type="text" className="input_field"
                      name="country"
                      value={employee.country}
                      onChange={(e) => handleChange(e)}
                  />
                    </div>

                    <div className="label_name">
                        <button className="save_employee"
                        onClick={saveEmployee}
                        >Save</button>
                        <button className="save_employee_clear">Clear</button>
                    </div>

                    
            </div>
      </div>
)
}

export {AddEmployee}