<template>
  <div class="about-section">
    <v-container fluid>
      <v-row align="center" :row-reverse="$vuetify.breakpoint.mdAndUp">
        <v-col cols="12" md="6" class="text-center" order="2" order-md="1">
          <h2 class="landing-heading">Jual Hasil Tanimu Bersama Kami</h2>
          <p class="landing-description">
            Membantu petani meningkatkan pendapatan mereka dengan memperluas
            jangkauan pasar.
          </p>
          <v-btn color="#76FF03" to="/jualin" class="custom-button"
            >Jual Sekarang!</v-btn
          >
        </v-col>
        <v-col cols="12" md="6" class="order-1 order-md-2">
          <v-img
            :src="require('../assets/landing-page-1.png')"
            class="landing-image"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="heading-all heading-section">
      <div class="divider-visi"></div>
      <h3 class="about-heading text-centerr">Layanan Kami</h3>
      <p class="about-subdescription text-center">
        Berikut adalah daftar layanan yang kami sediakan:
      </p>
      <v-row class="text-center" justify="center">
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-img
              :src="require('../assets/layanan1.png')"
              class="about-image"
            ></v-img>
            <h4 class="heading-card">Katalog Produk</h4>
            <p class="text-card">
              Di PaneninJualin kamu bisa melihat produk produk apa saja yang
              tersedia
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-img
              :src="require('../assets/layanan2.png')"
              class="about-image"
            ></v-img>
            <h4 class="heading-card">Informasi Nutrisi</h4>
            <p class="text-card">
              Kamu juga bisa melihat nutrisi apa saja yang terkandung pada
              produk tersebut
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-img
              :src="require('../assets/layanan3.png')"
              class="about-image"
            ></v-img>
            <h4 class="heading-card">Transfer</h4>
            <p class="text-card">
              Metode Pembayaran transfer dapat memberikan kemudahan bagimu
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="heading-all heading-section">
      <div class="divider-team"></div>
      <h3 class="about-heading text-center">Mengapa PaneninJualin</h3>
      <p class="about-subdescription">
        Kami menyediakan layanan yang memudahkan petani untuk menjual hasil tani
        mereka secara online. Berikut adalah beberapa alasan mengapa harus
        menggunakan layanan kami:
      </p>
      <v-row class="text-center" justify="center">
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-icon size="48" color="green">mdi-check-circle-outline</v-icon>
            <h4 class="heading-card">Meningkatkan Pendapatan</h4>
            <p class="text-card">
              Dengan memperluas jangkauan pasar, petani dapat meningkatkan
              pendapatan mereka.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-icon size="48" color="green">mdi-check-circle-outline</v-icon>
            <h4 class="heading-card">Kualitas Terjamin</h4>
            <p class="text-card">
              Kami hanya menjual hasil tani segar dan berkualitas tinggi.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-icon size="48" color="green">mdi-check-circle-outline</v-icon>
            <h4 class="heading-card">Mudah dan Aman</h4>
            <p class="text-card">
              Proses jual beli dilakukan secara online dengan sistem pembayaran
              yang aman dan terpercaya.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid style="margin-top: 7rem">
      <v-row align="center" :row-reverse="$vuetify.breakpoint.mdAndUp">
        <v-col cols="12" md="6" class="text-center" order="2" order-md="1">
          <h2 class="landing-heading">
            Ayo Buat Para Petani Sejahtera Bersama PaneninJualin
          </h2>
          <p class="landing-description">
            Ciptakan kesejahteraan petani untuk hidup yang lebih baik
          </p>
          <v-btn color="#76FF03" to="/informasi" class="custom-button"
            >Beli Sekarang!</v-btn
          >
        </v-col>
        <v-col cols="12" md="6" class="order-1 order-md-2">
          <v-img
            :src="require('../assets/landing2.png')"
            class="inform-image"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  layout: 'LandingLayout',
  data() {
    return {}
  },
  methods: {},
  created() {},
  head() {
    const title = 'Home'
    return { title }
  },
}
</script>

<style scoped>
.heading-all {
  margin-top: 7rem;
}

.landing-heading {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1b5e20;
  line-height: 1.2;
}

.landing-description {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #1b5e20;
}

.divider-visi {
  height: 2px;
  width: 8rem;
  background-color: #36be3f;
  margin: 0 auto 0px;
}

.divider-team {
  height: 2px;
  width: 9rem;
  background-color: #36be3f;
  margin: 0 auto 0px;
}
.about-section {
  padding: 100px 0;
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
.custom-button {
  color: #1b5e20;
  margin-top: 20px;
  margin-bottom: 20px;
}
.landing-image {
  max-width: 100%;
  border-radius: 20%;
}

.custom-button:hover {
  background-color: #1b5e20;
  color: white;
}

@media (max-width: 768px) {
  .landing-heading {
    font-size: 36px;
  }

  .landing-description {
    font-size: 16px;
  }

  .heading-card {
    font-size: 16px;
  }

  .text-card {
    font-size: 14px;
  }
}
</style>
