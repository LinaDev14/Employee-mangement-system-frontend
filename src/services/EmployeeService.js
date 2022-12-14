import axios from "axios"

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService { 

      // post
      saveEmployee(employee) {
            return axios.post(EMPLOYEE_API_BASE_URL, employee);
      }

      // get
      getEmployees() {
            return axios.get(EMPLOYEE_API_BASE_URL)
      }

      // delete
      deleteEmployee(id){
            return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
      }

      // get by id
      getEmployeeById(id){
            return axios.get(EMPLOYEE_API_BASE_URL + "/" + id)
      }

      // update
      updateEmployee(employee, id){
            return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee)
      }

}


export default new EmployeeService();