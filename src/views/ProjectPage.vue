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
          {{ "coisas abaixo" }}
          <ApexComponent :receivedData=projectData.missions></ApexComponent>
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
            <h2>
              <span style="color: yellow; font-size: 50px"
                >ESTATÍSTICAS GERAIS:
              </span>
              {{ mission.statistics }}
            </h2>

            <div
              class="content-container"
              v-for="point in mission.points"
              :key="point.id"
            >
              <p>{{ point }}</p>
              <div class="row">
                <div class="col s12 m12">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">{{ point.title }}</span>
                      <p>
                        {{ point.description }}
                      </p>
                      <p>{{ point.point_type }}</p>
                      <div class="row container">
                        <div class="col">
                          <div class="row">
                            <h5><i class="tiny material-icons">comment</i>{{point.statistic ? point.statistic.total_comments_count : 0}}</h5>
                          </div>
                        </div>
                        <div class="col">
                          <div class="row">
                            <h5><i class="tiny material-icons">people</i>{{point.statistic ? point.statistic.people_count : 0}}</h5>
                          </div>
                        </div>
                        <div class="col">
                          <div class="row">
                            <h5><i class="tiny material-icons">chat_bubble_outline</i>1</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApexComponent from '../components/ApexComponent'
export default {
  name: "ProjectPage",
  components:{
    ApexComponent
  },
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
  }
};
</script>

<style>
</style>