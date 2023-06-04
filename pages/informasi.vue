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

    <v-container class="heading-all heading-section">
      <div class="divider-info"></div>
      <h3 class="about-heading text-centerr">Hasil Tani</h3>
      <p class="about-subdescription text-center">
        Berikut beberapa hasil tani yang sudah dipanen :
      </p>
      <v-row class="text-center" justify="center">
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-img
              :src="require('../assets/beras.png')"
              class="about-image"
            ></v-img>
            <h4 class="heading-card">Beras</h4>
            <p class="text-card">
              Beras adalah salah satu hasil tani yang paling penting dan banyak dikonsumsi di dunia.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-img
              :src="require('../assets/jagung.png')"
              class="about-image"
            ></v-img>
            <h4 class="heading-card">Jagung</h4>
            <p class="text-card">
               jagung adalah tanaman biji-bijian yang penting dan serbaguna dengan banyak kegunaan dalam makanan, pakan ternak, biofuel, dan industri lainnya.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-img
              :src="require('../assets/kopi.png')"
              class="about-image"
            ></v-img>
            <h4 class="heading-card">Kopi</h4>
            <p class="text-card">
              Biji kopi adalah hasil utama yang dihasilkan dari perkebunan kopi. Biji kopi yang matang dipanen dari pohon kopi dan kemudian diolah melalui proses pengupasan kulit buah, fermentasi, pengeringan, penggilingan, dan pemanggangan.
            </p>
          </div>
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

.about-heading {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #1b5e20;
  line-height: 1.2;
}
.heading-section {
  text-align: center;
  margin-top: 7rem;
  padding: 0 1rem;
}

.about-subdescription {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 1.6;
  color: #1b5e20;
}

.about-image {
  max-width: 100%;
}

.card {
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
}

.about-image {
  max-width: 100%;
  border-radius: 50%;
  margin-bottom: 1rem;
}
.inform-image {
  border-radius: 5%;
}

.heading-card {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1b5e20;
}

.text-card {
  font-size: 16px;
  margin-bottom: 0;
  color: #1b5e20;
}

@media (max-width: 768px) {
  /* Override text-center on medium and larger devices */
  .text-xs-center {
    text-align: center !important;
  }
  .about-we{
    padding: 0 12px;
  }
}

.card {
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  transition: box-shadow 0.3s ease;
}

.heading-card {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1b5e20;
}
.text-card {
  font-size: 16px;
  margin-bottom: 0;
  color: #1b5e20;
}
.v-image__image--preload {
  filter: none !important;
  transform: none !important;
}

</style>
