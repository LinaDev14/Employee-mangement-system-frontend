/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {

      const navigate = useNavigate();

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

                              <tbody>
                                    <tr>
                                          <td className="text-left px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">Lina Maria</div>
                                          </td>

                                          <td className="text-left px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">Guerrero Lopez</div>
                                          </td>

                                          <td className="text-left px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">holamundo@gmail.com</div>
                                          </td>

                                          <td className="text-left px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">3125648569</div>
                                          </td>

                                          <td className="text-left px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">Colombia</div>
                                          </td>

                                          <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
                                                <a href="#" className="text-red-600 hover:text-red-800">Delete</a>
                                                
                                          </td>

                                    </tr>
                              </tbody>
                        
                        </table>
                  </div>
            </div>
      )
}

export {EmployeeList}