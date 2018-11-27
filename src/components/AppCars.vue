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
  }
}
</script>

<style lang="css">
</style>
