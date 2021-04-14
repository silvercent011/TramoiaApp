<template>
  <div class="grey darken-4">
    <div class="row">
      <div class="col s12 m4 offset-m4">
        <div class="card row">
          <div class="card-content col">
            <!-- card usuário -->
            <div class="row">
              <div class="col s12">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">{{ user.name }}</span>
                    <p>{{ user.email }}</p>
                    <p v-if="user.bio != null">{{ user.bio }}</p>
                    <p>Plano: {{ user.plan_type }}</p>
                  </div>
                </div>
              </div>
            </div>
            <span class="card-title center-align">Projetos</span>

            <h6 class="col s12 center-align">
              Estes são os projetos encontrados em seu perfil do
              strateegia.digital
            </h6>
            <div class="col s12">
              <ul class="collection">
                <li
                  v-for="lab in user.projects"
                  :key="lab.lab.id"
                  class="collection-item"
                >
                  <div>
                    <h5>Lab de {{ lab.lab.owner_name }}</h5>
                    <div v-for="project in lab.projects" :key="project.id">
                      <router-link :to="`/projects/${project.id}`">
                        <h6>{{ project.title }}</h6>
                      </router-link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// props: []
export default {
  name: "ProjectSelector",
  data() {
    return { user: null };
  },
  created() {
    this.user = this.$store.state.user;
  },
};
</script>

<style>
</style>