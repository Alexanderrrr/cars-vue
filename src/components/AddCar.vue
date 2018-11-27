<template>
  <div>
    <form @submit.prevent="addNewCar">
      <div class="form-group">
        <label for="exampleInputPassword1">Brand</label>
        <input v-model="newCar.brand" type="text" class="form-control" placeholder="Brand" min="2" required>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Model</label>
        <input v-model="newCar.model" type="text" class="form-control" placeholder="Model" min="2" required>
      </div>
      <div class="form-group form-check">
        <label>Year of Production</label>
        <select v-model="newCar.year" required>
          <option v-for="(year, index) in years" :key="index">{{ year }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Max Speed</label>
        <input v-model="newCar.maxSpeed" type="numbers" class="form-control" placeholder="Max Speed">
      </div>
      <div class="form-group">
        <label>Number Of Doors</label>
        <input v-model="newCar.numberOfDoors" type="number" class="form-control" placeholder="Number of doors" required>
      </div>
      <div class="form-group">
        <label>Is Automatic</label>
        <input v-model="newCar.isAutomatic" type="checkbox" class="form-control">
      </div>
      <div class="form-group">
        <label>Engine</label>
          <select v-model="newCar.engine" required>
            <option>Diesel</option>
            <option>Petrol</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button class="btn btn-default" type="reset" value="Reset">Reset</button>
    </form>
    <button @click="preview" class="btn btn-primary">Preview</button>


  </div>
</template>

<script>
import carsService from '../services/CarsService'

export default {

  data(){
    return{
      years: Array(29).fill(1990).map((n,index)=> n+index),

      newCar : {
        isAutomatic:false
      }

    }
  },

  methods:{
    addNewCar(){
      carsService.add(this.newCar)
      this.newCar = {};
      this.$router.push({path: '/cars'})

    },

    preview(){
      alert( JSON.stringify(this.newCar))
    }
  }
}
</script>

<style lang="css">
</style>
