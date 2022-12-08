<template>
  <div class="login-page">
    <form @submit.prevent="onLogin">
      <div class="form-field">
        <label for="email">Email: </label>
        <input type="text" id="email" v-model="user.email">
      </div>
      <div class="form-field">
        <label for="password">Password: </label>
        <input type="password" id="password" v-model="user.password">
      </div>
      <span v-if="$store.state.loginFieldError" class="form-error">Error data login</span>
      <button>Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "login-page",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin() {
      // console.log(this.user)
      this.$store.commit('login', this.user)

      // console.log(store)
    }
  }
}
</script>

<style scoped>

</style>