<template>
  <div>
   <apexchart 
    width="450" type="bar"
    :options="options" :series="series">
   </apexchart>  
   
  </div>
</template>

<script>
export default {
  name: 'ApexReplies',
  props: {
    replies: Array,
  },
  methods: {
    //Método para popular a chave series com os dados que vão ser plotados no gráfico
    populateSeries() {
      let missions = this.replies
      missions.map(mission => {
        this.series.push({
          name: mission.title, 
          data: [
            mission.statistics.replied_parent_comments_count,
            mission.statistics.reply_comments_count
          ]
        })
      })
    },
  },
  beforeMount() {
    this.populateSeries()
  },
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example',
      },
      xaxis: {
        categories: [
        "Réplicas em comentários pais",
        "Total de Réplicas",
        ]
      } 
    },
    series: []
  }),

}
</script>

<style>

</style>