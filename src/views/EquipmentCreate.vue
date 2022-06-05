<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <form @submit.prevent="createEquipment">

            <div class="form-group">
              <label for="exampleInputPassword1">Серийный номер</label>
              <input type="text" v-model="form.serial_number" class="form-control" id="exampleInputPassword1">
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Описание</label>
              <textarea class="form-control" v-model="form.description" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>

            <router-link :to="{name: 'equipment'}">
              <button type="button" class="btn btn-success ml-2">Назад</button>
            </router-link>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "EquipmentCreate",

  data(){
    return {
      form: {}
    }
  },

  methods: {
    createEquipment(){
      console.log('create new equipment');
    },
    getEquipmentTypes(){
      this.axios.get('/api/equipment-type?limit=1000').then(res => {
        console.log(res)
      })
    }
  },

  mounted() {
    this.getEquipmentTypes()
  }
}
</script>

<style scoped>

</style>