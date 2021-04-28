<template>
  <div>
   <h5>Contúdos por kit</h5>
   <apexchart 
    width="450" type="bar"
    :options="options" :series="series">
   </apexchart>  
  </div>
</template>

<script>
export default {
  name: 'ApexContents',
  props: {
    contents: Array,
  },
  methods: {
    //Método para popular a chave series com os dados que vão ser plotados no gráfico
    populateSeries() {
      let missions = this.contents
      missions.map(mission => {
        this.series.push({
          name: mission.title, 
          data: [
            mission.statistics.contents_count, 
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
        "Conteúdos",
        ]
      }
    },
    series: []
  }),

}
</script>

<style>

</style>