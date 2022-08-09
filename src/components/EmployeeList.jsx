import React from 'react'

const EmployeeList = () => {
      return (
            <div className="container_list">
                  <div className="container_button">
                        <button className="add_employee uppercase tracking-wider py-3 px-4">Add Employee</button>
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
                                          <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-4">Actions</th>
                                    </tr>
                        
                              </thead>
                        
                        </table>
                  </div>
            </div>
      )
}

export {EmployeeList}