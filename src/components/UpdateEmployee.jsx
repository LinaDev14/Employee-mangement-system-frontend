import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

      const {id} = useParams();
      const navigate = useNavigate();

      const [employee, setEmployee] = useState({
    
            id: id,
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            country: ""
      });

      const handleChange = (e) =>{

            const value = e.target.value;
    
            setEmployee({
                ...employee, [
                    e.target.name
                ]: value
            });
      }
      
      useEffect(() => {
            const fetchData = async () => {
            
                  try {
                        const response = await EmployeeService.getEmployeeById(id);
                        setEmployee(response.data)
                  } catch (error) {
                        console.log(error)
                  }
            };

            fetchData();
      
      
      }, [])
      

      const updateEmployee = (e) => {

            e.preventDefault();

            EmployeeService.updateEmployee(employee, id)
                  .then((response) => {
                        navigate("/employeeList")
                  }).catch((error) => {
                        console.log(error)
                  })
      }

  return (
      <div className="container_employee">
      <div className="employee">
              <div className="title_employee">
                    <h1>Update Employee</h1>
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
                  onClick={updateEmployee}
                  >Edit</button>
            <button
                 onClick={() => navigate("/employeeList")}             
                className="save_employee_clear">Cancel</button>
              </div>

              
      </div>
</div>
  )
}

export {UpdateEmployee}