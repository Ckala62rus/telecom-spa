<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <div class="form-group mt-4" v-for="(input,k) in inputs" :key="k">
            <label>Серийный номер</label>
            <input type="text" class="form-control" v-model="input.serial_number">

            <label>Примечание</label>
            <input type="text" class="form-control" v-model="input.description">
            <span>
                <button class="btn btn-success" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">Remove</button>
                <button class="btn btn-success" @click="add(k)" v-show="k == inputs.length-1">Add fields</button>
              </span>
          </div>

          <form @submit.prevent="createEquipment">

            <label>Тип оборудования</label>
            <div class="form-group">
              <el-select v-model="value" placeholder="Select">
                <el-option
                    v-for="type in equipment_types"
                    :key="type.id"
                    :label="type.name_type"
                    :value="type.id">
                </el-option>
              </el-select>
            </div>

            <button type="submit" class="btn btn-primary">Добавить</button>

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
      form: {},
      equipment_types: [],
      value: null,
      inputs: [{
        serial_number: '',
        description: ''
      }]
    }
  },

  methods: {
    createEquipment(){
      this.axios.post('/api/equipment', {equipments: this.inputs, type_id: this.value}).then(res => {
        if (res.data.success === true) {
          this.$swal.fire(
              'Добавлено!',
              'Оборудование успешно добавлено',
              'success'
          )
        } else {
          let msg = '';
          res.data.data.forEach(elem => {
            msg += `Серийный номер: ${elem.equipment.serial_number}, ошибка ${elem.error} | `;
          })
          this.$swal.fire(
              'Ошибка!',
              `${msg}`,
              'error'
          )
        }

      })
    },
    getEquipmentTypes(){
      this.axios.get('/api/equipment-type?limit=1000').then(res => {
        this.equipment_types = res.data.data
      })
    },
    add () {
      this.inputs.push({
        serial_number: '',
        description: ''
      })
    },
    remove (index) {
      this.inputs.splice(index, 1)
    },
  },

  mounted() {
    this.getEquipmentTypes()
  }
}
</script>

<style scoped>

</style>