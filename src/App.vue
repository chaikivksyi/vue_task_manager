<template>
  <MainHeader v-if="$store.state.isAuthenticated" />
  <div class="container">
    <router-view />
  </div>
</template>

<script>


import MainHeader from "@/components/Header.vue";

export default {
  name: 'App',
  components: {
    MainHeader

  }
}
</script>

