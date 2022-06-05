<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <form @submit.prevent="updateEquipment">
            <div class="form-group">
              <label for="exampleInputEmail1">ID</label>
              <input type="text" v-model="form.id" class="form-control" id="exampleInputEmail1" disabled>
            </div>

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
  name: "EquipmentEdit",

  data(){
    return {
      form: {
        id: '',
        serial_number: '',
        description: '',
        type_id: '',
      },
    }
  },

  methods: {
    getEquipmentById(){
      this.axios.get('/api/equipment/' + this.$route.params.id).then((res) => {
        let data = res.data.data.equipment;

        this.form.id = data.id
        this.form.serial_number = data.serial_number
        this.form.description = data.description
        this.form.type_id = data.type_id
      })
    },
    updateEquipment(){
      this.axios.put('/api/equipment/' + this.$route.params.id, this.form).then((res) => {
        if (res.data.success === false) {
          this.$swal.fire(
              'Ошибка!',
              res.data.message,
              'error'
          )
          return
        }
        this.$router.push({path: "/equipment"});
      })
    }
  },

  mounted() {
    this.getEquipmentById();
  }
}
</script>

<style scoped>

</style>