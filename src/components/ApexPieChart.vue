<template>
  <div>
   <h5>Kits de divergencia por tipo de kit</h5>
   <apexchart 
    width="450" type="pie"
    :options="options" :series="series">
   </apexchart>  
  </div>
</template>

<script>
export default {
  name: 'ApexPieChart',
  props: {
    contents: Array,
  },
  methods: {
    //Método para popular a chave series com os dados que vão ser plotados no gráfico
    populateSeries() {
      let missions = this.contents
      missions.map(mission => {
        mission.points.map(point =>{
          if(point.type && point.type === 'INDICATOR') this.series[0]++;
          if(point.type && point.type === 'LEARNING') this.series[1]++;
          if(point.type && point.type === 'METHOD') this.series[2]++;
          if(point.type && point.type === 'MODEL') this.series[3]++;
          if(point.type && point.type === 'SYSTEM') this.series[4]++;
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
      labels: [ 'INDICATOR', 'LEARNING', 'METHOD', 'MODEL', 'SYSTEM' ],
    },
    series:  [0, 0, 0, 0, 0],
  }),

}
</script>

<style>

</style>