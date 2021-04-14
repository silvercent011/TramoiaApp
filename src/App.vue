<template>
  <div id="app" class="grey darken-4">
    <router-view />
  </div>
</template>
<script>
import M from "materialize-css";

export default {
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
