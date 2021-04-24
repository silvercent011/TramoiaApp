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
          <h4>PESSOAS</h4>
          <ul class="collection">
            <li
              class="collection-item avatar"
              v-for="user in projectData.users"
              :key="user.id"
            >
              <img
                v-if="user.avatar_url != null"
                :src="user.avatar_url"
                alt=""
                class="circle"
              />
              <i v-else class="material-icons circle purple">people</i>
              <span class="title">{{ user.name }}</span>
              <p>
                {{ user.project_roles[0] }}<br />
                {{ user.email }} <br />
                {{ user.bio }}
              </p>
              <a href="#!" class="secondary-content"
                ><i class="material-icons">more</i></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="card" v-show="activeTab == 1">
        <div class="card-content">
          <h1>LAB</h1>
          {{ projectData.engagement[0] }}
        </div>
      </div>
      <div
        class="card"
        v-for="mission in projectData.missions"
        :key="mission.id"
      >
        <div class="card" v-show="activeTab == mission.id">
          <div class="card-content">
            <h1>{{ mission.title }}</h1>
            <h2><span style="color: yellow; font-size: 50px">ESTATÍSTICAS GERAIS: </span> {{ mission.statistics }}</h2>
            
            <div class="content-container"
              v-for="point  in mission.points"
              :key="point.id"
            >
              <div class="content" v-if="point.statistic">
                <h1><span style="color: red; font-size: 50px">TITULO: </span> {{ point.title }}</h1>
                <h2><span style="color: blue; font-size: 50px">TIPO DO MAPA: </span>{{ point.type }}</h2>
                <h3><span style="color: green; font-size: 50px">TIPO DO PONTO: </span>{{ point.point_type }}</h3> 
                <h1>Pessoas: {{point.statistic.people_count}}</h1>
                <h1>Questões: {{point.statistic.question_count}}</h1>
                <h1>Total de comentarios: {{point.statistic.total_comments_count}}</h1>
                <h1>Total de comentarios pais: {{point.statistic.parent_comments_count}}</h1>
                <h1>Total de respostas: {{point.statistic.reply_comments_count}}</h1>
                <hr>
              </div>
            </div>
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