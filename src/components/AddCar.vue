<template>
  <div class="jumbotron">
    <form @submit.prevent="addNewCar">
      <div class="form-group">
        <p v-if="errors.length">
          <ul>
            <li v-for="error in errors" class="p-3 mb-2 bg-danger text-white rounded">{{ error }}</li>
          </ul>
        </p>
        <label for="exampleInputPassword1">Brand</label>
        <input v-model="newCar.brand" type="text" class="form-control" placeholder="Brand" minlength="2" required>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Model</label>
        <input v-model="newCar.model" type="text" class="form-control" placeholder="Model" min="2" required>
      </div>
      <div class="form-group form-check">
        <label>Year of Production</label>
        <select v-model="newCar.year" required class="form-control">
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
  </div>
</template>

<script>
import carsService from '../services/CarsService'

export default {
  created(){
    if (this.$route.params.id) {
      carsService.get(this.$route.params.id)
      .then(response => {
        this.newCar = response.data
      })
      .catch(e => {
        console.log(e.response.data);
      })
    }

  },

  data(){
    return{
      years: Array(29).fill(1990).map((n,index)=> n+index),
      newCar : {
        isAutomatic:false,
        brand: null,
      },
      errors: [],
    }
  },

  methods:{
    addNewCar(e){
      this.errors = []

      if (this.newCar.brand.length < 2) {
        return this.errors.push('Name of Brand cant be less than 2 letters')
      } else if (this.newCar.model.length < 2) {
        return this.errors.push('Name of Model cant be less than 2 letters')
      }
      e.preventDefault();

      if (this.$route.params.id) {
        carsService.edit(this.$route.params.id, this.newCar)
        .then(response => {
          if (response.status == 200) {
            this.newCar = {}
            this.$router.push({path: '/cars'})
          }
        })
      } else {
        carsService.add(this.newCar).then(() => {
          this.newCar = {};
          this.$router.push({path: '/cars'})
        })
      }
    },

    preview(){
      alert( JSON.stringify(this.newCar))
    },

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
