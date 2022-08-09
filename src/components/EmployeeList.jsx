/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';
import { Employee } from './Employee';

const EmployeeList = () => {

      const navigate = useNavigate();

      const [loading, setLoading] = useState(true);
      const [employees, setEmployees] = useState(null);

      useEffect(() => {
            const fetchData = async() => {

                  setLoading(true);

                  try {
                        const response = await EmployeeService.getEmployees();

                        setEmployees(response.data)

                  }catch(error){
                        console.log(error)
                  }

                  setLoading(false);
            };

            fetchData();
      }, [])
      

      return (
            <div className="container mx-auto my-8">
                  <div className="container_button">
                        <button
                              onClick={() => navigate("/addEmployee")}
                              className="add_employee uppercase tracking-wider py-3 px-4">
                              Add Employee
                        </button>
                  </div>

                  <div className='flex shadow border-b'>

                        <table className="min-w-full">

                              <thead className="bg-gray-100">
                                    <tr>
                                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-4">First Name</th>
                                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-4">Last Name</th>
                                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-4">Email</th>
                                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-4">Phone Number</th>
                                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-4">Country</th>
                                          <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-4">Actions</th>
                                    </tr>
                              </thead>
                              {!loading && (
                                    <tbody className="bg-white">
                                          {employees.map((employee) => (
                                               <Employee  employee={employee} key={employee.id}/>
                                          ))}
                              </tbody>
                                          
                              )}
                        </table>
                  </div>
            </div>
      )
}

export {EmployeeList}