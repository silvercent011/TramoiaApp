<template>
  <div class="">
    <nav class="nav-extended blue">
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo">{{ projectData.title }}</a>
      </div>

      <div class="nav-content container">
        <ul class="tabs tabs-transparent">
          <li class="tab" :key="0">
            <a v-on:click="activeTab = 0">Pessoas</a>
          </li>
          <li class="tab" :key="1"><a v-on:click="activeTab = 1">Lab</a></li>
          <li
            class="tab"
            v-for="mission in projectData.missions"
            :key="mission.id"
          >
            <a v-on:click="activeTab = mission.id">{{ mission.title }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="card" v-show="activeTab == 0">
        <div class="card-content">
          <h1>PEOPLE</h1>
        </div>
      </div>
      <div class="card" v-show="activeTab == 1">
        <div class="card-content">
          <h1>LAB</h1>
        </div>
      </div>
      <div
        class="card"
        v-for="mission in projectData.missions"
        :key="mission.id"
      >
        <div class="card" v-show="activeTab == mission.id">
          <div class="card-content">
            <h1>{{mission.title}}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectPage",
  data() {
    return {
      activeTab: 0,
    };
  },
  created() {
    const { access_token } = this.$store.state.user;
    this.$store.dispatch("getProject", {
      id: this.$route.params.id,
      access_token: access_token,
    });
    console.log(this.$store.state.actualProject);
  },
  computed: {
    projectData() {
      return this.$store.state.actualProject;
    },
  },
};
</script>

<style>
</style>