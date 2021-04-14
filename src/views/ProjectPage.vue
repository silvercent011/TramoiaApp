<template>
<div>
 <nav class="nav-extended blue">
    <div class="nav-wrapper container">
      <a href="#" class="brand-logo">{{ projectData.title }}</a>
      <!-- <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul> -->
    </div>
    <div class="nav-content container">
      <ul class="tabs tabs-transparent">
        <li class="tab"><a href="#test1">Test 1</a></li>
        <li class="tab"><a class="active" href="#test2">Test 2</a></li>
        <li class="tab"><a href="#test3">Test 3</a></li>
        <li class="tab"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
  </nav>
  <p v-if="projectData">{{projectData}}</p>
</div>
</template>

<script>
export default {
    name: "ProjectPage",
  created() {
    const { access_token } = this.$store.state.user;
    this.$store.dispatch("getProject", {id: this.$route.params.id, access_token:access_token});
  },
  computed: {
      projectData(){
          return this.$store.state.actualProject
      }
  }
};
</script>

<style>
</style>