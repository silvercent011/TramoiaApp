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
          <div class="row">
            <div class="col s1 m5">
              <ApexContents :contents=projectData.missions /><br>   
            </div>
            <div class="col s1 m5">
              <ApexComments :comments=projectData.missions /><br> 
            </div>  
            <div class="col s1 m5">
              <ApexReplies :replies=projectData.missions /><br>   
            </div>
            <div class="col s1 m5">   
              <ApexPieChart :contents=projectData.missions /><br>  
            </div>
          </div>
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
            <div class="points-comments" style="display: flex; flex-direction:column; align-items: center; justify-content: center; padding-top: 20px;">
              <h5 style="font-weight: bold">Total de comentários por kit</h5>
              <ApexAllPointsComments :points=mission.points />
            </div>
            <div class="points-people" style="display: flex; flex-direction:column; align-items: center; justify-content: center; padding-top: 50px;">
              <h5 style="font-weight: bold">Total de pessoas engajadas por kit</h5>
              <ApexAllPointsPeople :points=mission.points />
            </div>
            <div class="points-replies" style="display: flex; flex-direction:column; align-items: center; justify-content: center; padding-top: 50px;">
              <h5 style="font-weight: bold">Total de respostas por kit</h5>
              <ApexAllPointsReplies :points=mission.points />
            </div>
              <div class="row">
                <div class="col s1 m12">
                  <div class="card blue-grey darken-1">
                    <div class="card-content white-text"> 
                      <span class="card-title">Estatísticas gerais</span>
                      <div class="row container">
                        <div class="col">
                          <div class="col">
                            <h5 title="Total de comentários"><i class="tiny material-icons">comment</i> {{mission.statistics.total_comments_count}}</h5>
                          </div>
                        </div>
                        <div class="col">
                          <div class="col">
                            <h5 title="Total de ferramentas"><i class="tiny material-icons">attach_file</i> {{mission.statistics.contents_count}}</h5>
                          </div>
                        </div>
                        <div class="col">
                          <div class="col">
                            <h5 title="Total de respostas"><i class="tiny material-icons">chat_bubble_outline</i> {{mission.statistics.reply_comments_count}}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div
              class="content-container"
              v-for="point in mission.points"
              :key="point.id"
            >
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
                          <div class="col">
                            <h5 title="Total de comentários"><i class="tiny material-icons">comment</i> {{point.statistics ? point.statistics.total_comments_count : 0}}</h5>
                          </div>
                        </div>
                        <div class="col">
                          <div class="col">
                            <h5 title="Total de pessoas engajadas"><i class="tiny material-icons">people</i> {{point.statistics ? point.statistics.people_count : 0}}</h5>
                          </div>
                        </div>
                        <div class="col">
                          <div class="col">
                            <h5 title="Total de respostas em comentários"><i class="tiny material-icons">chat_bubble_outline</i> {{point.statistics ? point.statistics.reply_comments_count : 0}}</h5>
                          </div>
                        </div>
                        
                      </div>
                        <div>
                          <h5>Média de comentários por pessoa: {{point.statistics ? (point.statistics.total_comments_count/point.statistics.people_count).toFixed(2) : "inexistente"}}</h5>
                        </div>
                        <ApexPoints :point=point />
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
import ApexReplies from '../components/ApexReplies'
import ApexComments from '../components/ApexComments'
import ApexContents from '../components/ApexContents'
import ApexPoints from '../components/ApexPoints'
import ApexAllPointsComments from '../components/ApexAllPointsComments'
import ApexAllPointsPeople from '../components/ApexAllPointsPeople'
import ApexAllPointsReplies from '../components/ApexAllPointsReplies'
import ApexPieChart from '../components/ApexPieChart'

export default {
  name: "ProjectPage",
  components:{
    ApexReplies,
    ApexContents,
    ApexComments,
    ApexPoints,
    ApexAllPointsComments,
    ApexAllPointsPeople,
    ApexAllPointsReplies,
    ApexPieChart,
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