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

  get(id){
    return axios.get(`cars/${id}`)
  }

  edit(id, car){
    return axios.put(`cars/${id}`, car)
  }
}


const carsService = new CarsService();
export default carsService;
