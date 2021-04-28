<template>
  <div class="row">
    <div class="col s12 m4 offset-m4">
      <div class="card row">
        <div class="card-content col">
          <div class="row center-align">
            <!-- <span style="font-size: 50px">TramoiaApp</span> -->
          </div>
          <!-- <span class="card-title">Card Title</span> -->
          <div class="row">
            <img class="col s6 offset-s3" src="@/assets/images/tmapp.png" />
          </div>
          <div class="row">
            <h6 class="col s12 center-align">
              Insira seus dados do strateegia.digital abaixo para fazer login
            </h6>
          </div>
          <form class="col s12" @submit.prevent @submit="auth">
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" v-model="form.email" required="true"/>
                <label for="email">Email</label>
                <span
                  class="helper-text"
                  data-error="E-mail inválido"
                  data-success=""
                ></span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" v-model="form.senha" required="true" />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <button class="btn-large col s12 deep-purple" type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col l6 offset-l3">
          <img src="../assets/images/trmdetails.png" width="250px">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import M from "materialize-css";

export default {
    name:"CardLogin",
  data() {
    return {
      form: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
      async auth(){
           M.toast({html: 'Solicitando autenticação...', classes: 'rounded'})
           const params = {username:this.form.email, password: this.form.senha}
           await axios.post(`${process.env.VUE_APP_API_LINK}auth/`,null,{headers:params}).then((res) => {
               M.toast({html: 'Usuário autenticado com sucesso', classes: 'rounded'})
               console.log(res)
               this.$store.state.user = res.data
               this.$store.state.isLoggedUser = true
               this.$router.push('/projects')
           }).catch((error) => {
               console.log(error)
               M.toast({html: error, classes: 'rounded'})
           })
      }
  }
};
</script>

<style>
</style>