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
  name: 'ApexComments',
  props: {
    comments: Array,
  },
  methods: {
    //Método para popular a chave series com os dados que vão ser plotados no gráfico
    populateSeries() {
      let missions = this.comments
      missions.map(mission => {
        this.series.push({
          name: mission.title, 
          data: [
            mission.statistics.parent_comments_count,
            mission.statistics.total_comments_count, 
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
        "Comentarios pais",
        "Total de Comentários",
        ]
      }
    },
    series: []
  }),

}
</script>

<style>

</style>