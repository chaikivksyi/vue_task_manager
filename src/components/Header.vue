<template>
  <header>
    <nav>
      <router-link class="logo" :to="{name: 'Dashboard'}">Task manager</router-link>
    </nav>
    <div class="header-actions">
<!--      <button v-if="$store.state.isAuthenticated" @click.prevent="$store.commit('logout')">Logout</button>-->
      <router-link :to="{name: 'Sprint'}">
        <img :src="iconSprint" alt="">
      </router-link>
<!--      <router-link :to="{name: 'Message'}">-->
<!--        <img :src="IconMessage" alt="">-->
<!--      </router-link>-->
      <router-link :to="{name: 'Projects'}">
        <img :src="iconProjects" alt="">
      </router-link>
      <router-link :to="{name: 'Team'}">
        <img :src="IconTeam" alt="">
      </router-link>
<!--      <router-link :to="{name: 'Anatitic'}">-->
<!--        <img :src="IconStatistic" alt="">-->
<!--      </router-link>-->
<!--      <router-link :to="{name: 'Order'}">-->
<!--        <img :src="iconOrders" alt="">-->
<!--      </router-link>-->

      <div class="profile">
        <div class="profile-logo"></div>
      </div>
    </div>
  </header>
</template>

<script>
import IconMessage from '../assets/img/iconMessage.svg'
import IconTeam from '../assets/img/iconTeam.svg';
import IconStatistic from '../assets/img/iconStatistic.svg';
import iconOrders from '../assets/img/iconOrders.svg';
import iconProjects from '../assets/img/iconProjects.svg';
import iconSprint from '../assets/img/iconSprint.svg';

export default {
  name: "main-header",
  data() {
    return {
      IconMessage,
      IconTeam,
      IconStatistic,
      iconOrders,
      iconProjects,
      iconSprint,
    }
  }
}
</script>

<style scoped>

</style>