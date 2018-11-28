<template>
  <div class="jumbotron">
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
        <input v-model="newCar.maxSpeed" type="number" class="form-control" placeholder="Max Speed">
      </div>
      <div class="form-group">
        <label>Number Of Doors</label>
        <input v-model="newCar.numberOfDoors" type="number" class="form-control" placeholder="Number of doors" required>
      </div>
      <div class="form-group">
        <label>Is Automatic</label>
        <input v-model="newCar.isAutomatic" type="checkbox">
      </div>
      <div class="form-group">
        <label>Engine</label>
          <select v-model="newCar.engine" required>
            <option default>Diesel</option>
            <option>Petrol</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </select>
      </div>
      <button type="submit" class="btn btn-primary" id="submitBtn">Submit</button>
      <button class="btn btn-default" type="reset" value="Reset">Reset</button>
    </form>
    <button @click="preview" class="btn btn-primary" id="previewBtn">Preview</button><br>
    <button @click="editThisCar" class="btn btn-primary">Edit</button><br>
  </div>
</template>

<script>
import carsService from '../services/CarsService'

export default {
  created(){
    return carsService.get(this.$route.params.id)
    .then(response => {
      this.newCar = response.data
    })
    .catch(e => {
      console.log(e.response.data);
    })
  },

  data(){
    return{
      years: Array(29).fill(1990).map((n,index)=> n+index),
      newCar : {
        isAutomatic:false
      },
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
    },

    editThisCar(){
      carsService.edit(this.$route.params.id, this.newCar)
      this.newCar = {}
      this.$router.push({path: '/cars'})

    }
  }
}
</script>

<style lang="css">
  form{
    width: 400px;
    margin: auto;
  }

  #previewBtn{
    margin-top: 10px;
    width: 200px
  }
  #submitBtn{
    margin-right: 35px
  }
</style>
