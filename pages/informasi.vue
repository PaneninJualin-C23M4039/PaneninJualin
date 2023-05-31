<template>
  <div class="about-section">
    <v-container fluid class="about-we">
      <v-row align="center">
        <v-col cols="12" md="8" class="text-xs-center">
          <h2 class="about-heading">Informasi Seputar Hasil Tani</h2>
          <p class="about-description">
            Hasil tani, sumber kehidupan kita. Biarkan informasi memperkaya pengetahuanmu tentang keajaiban alam yang melimpah di ladang dan kebun.
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <v-img
          :src="require('../assets/info1.png')"
          class="about-image"
          >
        </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="heading-all">
      <div class="divider-visi"></div>
      <h3 class="about-heading text-center">Manfaat & Tujuan</h3>
      <v-row class="text-center">

        <v-col cols="12" md="6">
          <h3 class="about-subheading">Manfaat </h3>
          <p class="about-subdescription">
            Pertanian memberikan sumber penghasilan bagi petani dan masyarakat pedesaan. Sebagai sektor ekonomi yang penting, pertanian menciptakan lapangan kerja bagi jutaan orang di seluruh dunia.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="about-subheading">Tujuan</h3>
          <p class="about-subdescription">
            Hasil tani juga bertujuan untuk menyediakan makanan yang aman dan bebas dari kontaminasi.
          </p>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>


<script>
  export default {
    name: 'InformasiPage',
    layout: 'LandingLayout',
    data() {
      return {

      }
    },
    head() {
      const title = 'Informasi'
      return { title }
    }
  }
</script>
<style scoped>

.heading-all{
  margin-top: 7rem;
}
.divider-visi {
    height: 2px;
    width: 10.5rem;
    background-color: #36be3f;
    margin: 0 auto 0px;
}
.divider-about {
    height: 2px;
    width: 17.5rem;
    background-color: #36be3f;
    margin: 0 auto 0px;
}
.divider-team {
    height: 2px;
    width: 11.5rem;
    background-color: #36be3f;
    margin: 0 auto 0px;
}
.about-section {
  padding: 100px 0;
}
.about-we{
  background-color: rgb(245, 245, 245);
  padding: 0 6rem;
}

.about-heading {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color:  #1B5E20;
}
.about-subheading{
  color:  #36833b;
}

.about-subdescription {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.about-description {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 30px;
}

.about-btn {
  color: #ffffff;
  font-weight: bold;
}
 
.about-image {
  max-width: 100%;
}
@media (max-width: 600px) {
  /* Override text-center on medium and larger devices */
  .text-xs-center {
    text-align: center !important;
  }
  .about-we{
    padding: 0 12px;
  }
  .card {
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 300px;
  }
}

.v-image__image--preload {
  filter: none !important;
  transform: none !important;
}

</style>
