<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <main class="form-signin">
            <form @submit.prevent="login">
              <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

              <div class="form-floating">
                <input type="email" v-model="form.email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" v-model="form.password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
          </main>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",

  data(){
    return {
      form: {
        email: 'admin@mail.ru', // admin@mail.ru
        password: '123123123', // 123123123
      },
    }
  },

  methods: {
    login(){
      this.axios.post('/api/login', this.form).then(res => {
        if (res.data.success) {
          localStorage.setItem('token', res.data.data.access_token)
          localStorage.setItem('auth', true)
          this.$router.push({path: "/equipment"});
        }
      })
    },
  },
}
</script>

<style scoped>

</style>