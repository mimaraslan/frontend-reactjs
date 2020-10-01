import axios from "axios"; 

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8082/api/v1/employees"

class EmployeeServies{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
    }

}

export default new EmployeeServies();
