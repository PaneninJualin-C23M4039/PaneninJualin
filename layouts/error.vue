<template>
  <div class="container">
    <v-layout align-center justify-center>
      <span class="title__" v-if="error.statusCode === 404">404 not found</span>
      <span class="title__" v-else>An Error Occurred</span>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'LandingLayout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.title__ {
  font-size: 5rem;
  font-weight: 700;
  padding: 4px;
  color: white;
  background-color: red;
  border-radius: 5px;
}

.container {
  padding: 100px;
}
</style>
