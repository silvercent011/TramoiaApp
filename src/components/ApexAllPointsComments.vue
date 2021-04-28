<template>
  <div>
   <apexchart 
    width="1100" type="bar"
    :options="options" :series="series">
   </apexchart>  
   
  </div>
</template>

<script>
export default {
  name: 'ApexAllPointsComments',
  props: {
    points: Array,
  },
  methods: {
    //Método para popular a chave series com os dados que vão ser plotados no gráfico
    populateSeries() {
      let allPoints = this.points
      allPoints.map(point => {
        if(point.statistics){
          this.series.push({
            name: point.title,
            data: [
              point.statistics.total_comments_count,
            ]
          })
        }
      })
    }
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
        "Comentários",
        ]
      } 
    },
    series: []
  }),

}
</script>

<style>

</style>