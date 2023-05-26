<template>
  <div class="heading">
    <v-container class="mt-8 heading__content pa-8">
      <div class="heading__text">
        <span class="heading__text__title mb-1">Jualin di PaneninJualin</span>
        <span class="heading__text__subtitle mb-5">Solusi menjual hasil tani bagi anda secara aman cepat dan terpercaya.</span>
        <v-chip color="grey lighten-2">PaneninJualin: Maksimalkan potensi pertanianmu dengan akses pasar yang luas dan mudah.</v-chip>
      </div>
      <div class="heading__image pl-8">
        <v-img 
          :lazy-src="require('../assets/petani.jpg')"
          max-width="250" 
          max-height="250"
          alt="Petani PaneninJualin">
        </v-img>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'JualinPage',
    layout: 'LandingLayout',
    data() {
      return {

      }
    },
    head() {
      const title = 'Jualin'
      return { title }
    }
  }
</script>

<style scoped>
  
  .heading__content {
    display: flex;
    gap: 60px;
    min-height: 400px;
  }

  .heading__text {
    display: flex;
    flex-direction: column;
  }
  .heading__text__title {
    font-size: 2em;
    font-weight: 800;
    color: #1B5E20;
  }

  .heading__text__subtitle {
    font-size: 1em;
    font-weight: 500;
  }

  .heading__image {
    display: flex;
    justify-content: flex-end;
  }

</style>