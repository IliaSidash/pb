<template>
  <div id="app">
    <Analytics />
  </div>
</template>

<script>

import Analytics from './components/Analytics'
export default {
  name: 'App',
  components: {
    Analytics
  },
  data() {
    return {

    }
  },
  mounted() {
  //     this.$axios.post('https://api.cldcnt.ru/v1/offer/indexProduct', {
  //       "productUrls":[
  //       "https://www.ozon.ru/product/gazirovannyy-napitok-baltika-pivo-0-bezalkogolnoe-svetloe-pasterizovannoe-0-5-0-47-l-180887123",
  //       "https://www.ozon.ru/context/detail/id/165063472/",
  //       "https://www.ozon.ru/product/gazirovannyy-napitok-baltika-pshenichnoe-0-pivnoy-bezalkogolnyy-nefiltrovannyy-neosvetlennyy-180887125",
  //       "https://www.ozon.ru/product/gazirovannyy-napitok-baltika-pivo-0-svetloe-bezalkogolnoe-pasterizovannoe-0-5-0-45-l-180887124",
  //       "https://www.ozon.ru/product/bezalkogolnoe-pivo-bud-pasterizovannoe-0-45-l-upakovka-24-sht-173627596"
  //   ],
  //       "apiKey":"ajhFHGDkdnerGDDERHdjns43jke",
  // 
  //     })
  //       .then(response => {
  //         this.test = response;
  //         console.log(response)
  //       }) 
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f3f3f3;
  width: 100%;
  height: 100%;
}
</style>
