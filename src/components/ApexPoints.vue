<template>
  <div>
   <apexchart 
    width="500" type="bar"
    :options="options" :series="series">
   </apexchart>  
   
  </div>
</template>

<script>
export default {
  name: 'ApexPoints',
  props: {
    point: Object,
  },
  methods: {
    //Método para popular a chave series com os dados que vão ser plotados no gráfico
    populateSeries() {
      this.series.push({
        name: this.point.title,
        data: [
          this.point.statistic.total_comments_count,
          this.point.statistic.people_count,
          this.point.statistic.reply_comments_count
        ]
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
        "Pessoas",
        "Respostas",
        ]
      } 
    },
    series: []
  }),

}
</script>

<style>

</style>