import axios from 'axios'

class CarsService {
  constructor(){
    axios.defaults.baseURL = 'http://localhost:3000/api/'

  }
  getAll(){
    return axios.get('cars')

  }

  add(newCar){
    axios.post('cars', newCar)

  }
}


const carsService = new CarsService();
export default carsService;
