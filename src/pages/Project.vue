<template>
  <div>
    <h1>Tasks</h1>
    <div class="table projects">
      <div class="table-head">
        <div class="row">
          <div class="col project-logo"></div>
          <div class="col name">Name</div>
          <div class="col item">Backlog</div>
          <div class="col item">Todo</div>
          <div class="col item">Progress</div>
          <div class="col item">Test</div>
          <div class="col item">Done</div>
        </div>
      </div>
      <div class="table-body">
        <div class="row" v-for="project in 5" :key="project">
          <div class="col project-logo">
            <div></div>
          </div>
          <div class="col name">
            <router-link :to="{name: 'Project', params: {id: project}}">Name Project {{project}}</router-link>
          </div>
          <div class="col item">12</div>
          <div class="col item">12</div>
          <div class="col item">12</div>
          <div class="col item">12</div>
          <div class="col item">12</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-page"
}
</script>

<style scoped>

</style>