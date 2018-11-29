<template>
  <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Max Speed</th>
            <th scope="col">Doors</th>
            <th scope="col">Automatic</th>
            <th scope="col">Engine</th>
            <th scope="col">Edit Car</th>
            <th scope="col">Delete This Car</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="(car, index) in cars" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.maxSpeed }}</td>
          <td>{{ car.numberOfDoors }}</td>
          <td>{{ car.isAutomatic }}</td>
          <td>{{ car.engine }}</td>
          <td>
            <router-link :to="{ name: 'edit-car', params: {id: car.id} }" class="btn btn-primary">Edit</router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click='removeCar(car.id)'>Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import carsService from '../services/CarsService'

export default {
  created(){
    carsService.getAll()
    .then(response => {
      this.cars = response.data
    });
  },

  data(){
    return {
      cars: [],
    }
  },

  methods: {
    removeCar(id){
      let answer = prompt(`ARE YOU SURE?
        yes / no`, 'yes')
      if (answer == 'yes') {
        carsService.delete(id)
      }
      else {
        next()
      }

    }
  }
}
</script>

<style lang="css">
</style>
