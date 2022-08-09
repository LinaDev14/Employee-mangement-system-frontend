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
                    <div className="label_name">
                        <label>Last Name: </label>
                        <input type="text" className="input_field"/>
                    </div>
                    <div className="label_name">
                        <label>Email: </label>
                        <input type="email" className="input_field"/>
                    </div>
                    <div className="label_name">
                        <label>Number Phone: </label>
                        <input type="number" className="input_field"/>
                    </div>
                    <div className="label_name">
                        <label>Country: </label>
                        <input type="text" className="input_field"/>
                    </div>

                    <div className="label_name">
                        <button className="save_employee">Save</button>
                        <button className="save_employee_clear">Clear</button>
                    </div>

                    
            </div>
      </div>
)
}

export {AddEmployee}