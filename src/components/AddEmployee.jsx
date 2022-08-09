import React from 'react'

const AddEmployee = () => {
  return (
      <div className="container_employee">
            <div className="employee">
                    <div className="title_employee">
                          <h1>Add New Employee</h1>
                  </div>
                    <div className="label_name">
                        <label>First Name: </label>
                        <input type="text" className="input_field"/>
                    </div>
            </div>
      </div>
)
}

export {AddEmployee}