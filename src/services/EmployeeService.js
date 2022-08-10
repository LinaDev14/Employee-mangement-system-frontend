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

}


export default new EmployeeService();