/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import EmployeeService from '../services/EmployeeService';

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
            <div className="container_list">
                  <div className="container_button">
                        <button
                              onClick={() => navigate("/addEmployee")}
                              className="add_employee uppercase tracking-wider py-3 px-4">
                              Add Employee
                        </button>
                  </div>

                  <div className='border_bottom'>

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
                                          {employees.map((employee) => {
                                                <tr key={employee.id}>
                                                      <td className="text-left px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">employee.firstName</div>
                                                      </td>

                                                      <td className="text-left px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">employee.lastName</div>
                                                      </td>

                                                      <td className="text-left px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">employee.email</div>
                                                      </td>

                                                      <td className="text-left px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">employee.phoneNumber</div>
                                                      </td>

                                                      <td className="text-left px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">employee.country</div>
                                                      </td>

                                                      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                                                            <a href="#" className="text-red-600 hover:text-red-800">Delete</a>
                                                
                                                      </td>

                                                </tr>
                                          })}
                              </tbody>
                                          
                              )}
                        </table>
                  </div>
            </div>
      )
}

export {EmployeeList}