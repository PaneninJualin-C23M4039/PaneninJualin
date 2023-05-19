<template>
  <v-main>
    <v-container fluid>
      <v-layout justify-center align-center class="my-5">
        <v-btn style="background-color: #CFFF8D;" class="green--text">Test</v-btn>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'LandingPage',
  layout: 'LandingLayout',
  data() {
    return {

    }
  },
  head() {
    const title = 'Home Page'
    return { title }
  }
}
</script>

<style scoped>


</style>
