<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <router-link :to="{name: 'equipment-create'}">
            <button class="btn btn-success">Создать оборудование</button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div class="dataTables_wrapper dt-bootstrap4 no-footer">
        <v-server-table
            url="/api/equipment"
            :columns="columns"
            :options="options"
            ref="equipment-table"
        >
          <div class="" slot="source">
            Dominican Republic
          </div>
          <div class="" slot="type" slot-scope="props">
                        <span class="label label-lg font-weight-bold label-light-primary label-inline"
                              v-if="props.row.type === '2'">Canceled</span>
            <span class="label label-lg font-weight-bold label-light-danger label-inline"
                  v-if="props.row.type === '1'">Danger</span>
          </div>
          <div class="" slot="type_deposit" slot-scope="props">
                        <span class="dtr-data" v-if="props.row.type_deposit + props.row.type === '12'">
                            <span class="label label-danger label-dot mr-2"></span>
                            <span class="font-weight-bold text-danger">Online</span>
                        </span>
            <span class="dtr-data" v-if="props.row.type_deposit + props.row.type === '11'">
                            <span class="label label-success label-dot mr-2"></span>
                            <span class="font-weight-bold text-success">Direct</span>
                        </span>
          </div>
          <div class="" slot="action" slot-scope="props">
            <div class="dropdown dropdown-inline">
              <a href="javascript:;"
                 class="btn btn-sm btn-clean btn-icon mr-2"
                 data-toggle="dropdown"
                 @click="showDetail(props.row)"
                 :title="'Details'"
              >
                  <span class="svg-icon svg-icon-md">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="24px"
                         height="24px" viewBox="0 0 24 24" version="1.1"><g
                        stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect
                        x="0" y="0" width="24" height="24"></rect><path
                        d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                        fill="#000000"></path></g>
                    </svg>
                  </span>
              </a>

<!--              <a href="javascript:;"-->
<!--                 @click="updateEquipment(props.row.id)"-->
<!--                 class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">-->
<!--                  <span class="svg-icon svg-icon-md">	                                <svg-->
<!--                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"-->
<!--                      width="24px" height="24px" viewBox="0 0 24 24" version="1.1">	                                    <g-->
<!--                      stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">	                                        <rect-->
<!--                      x="0" y="0" width="24" height="24"></rect>	                                        <path-->
<!--                      d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"-->
<!--                      fill="#000000" fill-rule="nonzero"-->
<!--                      transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "></path>	                                        <rect-->
<!--                      fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"></rect>	                                    </g>	                                </svg>	                            </span>-->
<!--              </a>-->


              <router-link :to="{name: 'equipment-edit', params: {id: props.row.id}}" class="btn btn-sm btn-clean btn-icon mr-2">
                <span class="svg-icon svg-icon-md"><svg
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="24px" height="24px" viewBox="0 0 24 24" version="1.1">	                                    <g
                    stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">	                                        <rect
                    x="0" y="0" width="24" height="24"></rect>	                                        <path
                    d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                    fill="#000000" fill-rule="nonzero"
                    transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "></path>	                                        <rect
                    fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"></rect>
                  </g></svg>
                </span>
              </router-link>

              <a href="javascript:;"
                 @click="deleteEquipment(props.row.id)"
                 class="btn btn-sm btn-clean btn-icon" :title="'Delete'"> <span
                  class="svg-icon svg-icon-md">	                                <svg
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px" height="24px" viewBox="0 0 24 24" version="1.1">	                                    <g
                  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">	                                        <rect
                  x="0" y="0" width="24" height="24"></rect>	                                        <path
                  d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                  fill="#000000" fill-rule="nonzero"></path>	                                        <path
                  d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                  fill="#000000" opacity="0.3"></path>	                                    </g>	                                </svg>	                            </span>
              </a>
            </div>
          </div>
        </v-server-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: 'Equipment-All',

  data() {
    return {
      columns: [
        'id',
        'type_id',
        'serial_number',
        'description',
        // 'created_at',
        // 'updated_at',
        'action'
      ],
      options: {
        headings: {
          id: '#ID',
          type_id: 'Тип оборудования',
          serial_number: 'Серийный номер',
          description: 'Описание',
          // created_at: 'Дата создания',
          // updated_at: 'Дата обновления',
          action: 'Действия',
        },
        texts: {
          count: "Показано {from}-{to} из {count} записей|{count} записи|Одна запись",
          first: 'First',
          last: 'Last',
          filter: "Поиск:",
          filterPlaceholder: "Введите запрос",
          limit: "Записей:",
          page: "Страница:",
          noResults: "Нет данных для отображения",
          filterBy: "Фильтр по {column}",
          loading: 'Загружка. Пожалуйста ждите...',
          defaultOption: 'Выбрать {column}',
          columns: 'Колонки'
        },
        filterable: false,
        skin: 'table table-bordered table-checkable dataTable no-footer dtr-inline collapsed',
        sortIcon: {
          base: 'la',
          up: 'la-long-arrow-up text-success pt-1',
          down: 'la-long-arrow-down text-success pt-1',
          is: 'la-arrows-v text-muted pt-1'
        }
      },
    }
  },

  methods: {
    showDetail(){
      console.log('Show')
    },
    updateEquipment(id){
      console.log('update by id=' + id)
    },
    deleteEquipment(id){
      console.log('delete by id=' + id)
      this.$swal.fire({
        title: 'Удалить оборудование?',
        text: "Выбранное оборудование будет удалено!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Да, удалить',
        cancelButtonText: 'Отмена',
      }).then((result) => {
        if (result.isConfirmed) {
          // this.axios.delete('/api/equipment/' + id).then((res) => {
          //   console.log(res)
            // this.$notify({
            //   group: 'foo',
            //   type: 'success',
            //   title: 'Удаление сервера',
            //   text: 'Сервер успешно удален'
            // });
            this.$swal.fire(
                'Удалено!',
                'Оборудование удалено',
                'success'
            )
            this.$refs['equipment-table'].refresh();
          // });
        }
      })
    },
  }

}

</script>

<style scoped>

</style>