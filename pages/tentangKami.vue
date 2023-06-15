<template>
  <div class="about-section">
    <v-container fluid class="about-we">
      <v-row align="center">
        <v-col cols="12" md="8" class="text-xs-center">
          <h2 class="about-heading animate__animated animate__backInDown">Tentang Kami</h2>
          <p class="about-description">
            PaneninJualin adalah sebuah aplikasi yang didesain khusus untuk
            membantu petani dalam mendistribusikan hasil panen mereka dengan
            lebih efisien. Aplikasi ini memungkinkan petani untuk menjual produk
            pertanian mereka secara langsung kepada konsumen atau pembeli
            potensial melalui platform online. Dengan fitur-fitur seperti
            'Jualin' dan 'Informasi', PaneninJualin memberikan kemudahan bagi
            petani untuk meningkatkan akses pasar dan pendapatan mereka.
            Aplikasi ini bertujuan untuk memperkuat rantai pasok pertanian dan
            mendukung pertumbuhan ekonomi petani.
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <v-img :src="require('../assets/logo-min.png')" class="about-image">
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="heading-all">
      <div class="divider-visi"></div>
      <h3 class="about-heading text-center animate__animated animate__backInLeft">Visi & Misi</h3>
      <v-row class="text-center">
        <v-col cols="12" md="6">
          <h3 class="about-subheading">Visi</h3>
          <p class="about-subdescription">
            Membantu petani untuk menjual hasil taninya tanpa melibatkan pihak
            manapun, sehingga keuntungan dapat sepenuhnya diterima oleh petani.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="about-subheading">Misi</h3>
          <p class="about-subdescription">
            Menyediakan platform bagi petani untuk menjual hasil taninya secara
            mudah dan cepat.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="heading-all">
      <div class="divider-about"></div>
      <h3 class="about-heading text-center animate__animated animate__backInRight">Tentang Aplikasi</h3>
      <v-row class="text-center">
        <v-col cols="12" md="12">
          <p class="about-subdescription">
            Aplikasi ini hadir dengan tujuan utama untuk membantu petani dalam
            mendistribusikan hasil panen mereka dengan lebih efisien dan
            efektif. Dengan fitur-fitur yang inovatif, kami berkomitmen untuk
            memperkuat rantai pasok pertanian dan mendukung pertumbuhan ekonomi
            petani.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="heading-all">
      <div class="divider-team"></div>
      <h3 class="about-heading text-center animate__animated animate__backInLeft">Fitur Kami</h3>
      <v-row class="text-center mt-2" gutter="4">
        <v-col cols="12" lg="3" md="6" sm="6" class="oval">
          <v-icon color="green darken-2">mdi-cash-multiple</v-icon>
          Jual Hasil Tani
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="6" class="oval">
          <v-icon color="green darken-2">mdi-cart</v-icon>
          Beli Hasil Tani
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="6" class="oval">
          <v-icon color="green darken-2">mdi-information</v-icon>
          Informasi Pertanian
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="6" class="oval">
          <v-icon color="green darken-2">mdi-phone</v-icon>
          Kontak Langsung
        </v-col>
      </v-row>
    </v-container>
    <v-container class="heading-all">
      <div class="divider-team"></div>
      <h3 class="about-heading text-center animate__animated animate__backInUp">Team Kami</h3>
      <v-row align="center">
        <v-col cols="12" md="3">
          <div class="card">
            <v-img :src="require('../assets/avatar1-min.png')" class="about-image">
            </v-img>
            <h4 class="heading-card">Syaloommuel Sirait</h4>
            <p class="text-card">Universitas Medan Area | F043XB061</p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="card">
            <v-img :src="require('../assets/avatar2-min.png')" class="about-image">
            </v-img>
            <h4 class="heading-card">Satyo Gusti Anugrah</h4>
            <p class="text-card">
              Universitas Atma Jaya Yogyakarta | F040XB344
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="card">
            <v-img :src="require('../assets/avatar3-min.png')" class="about-image">
            </v-img>
            <h4 class="heading-card">Azzam Ghufron Nasution</h4>
            <p class="text-card">Universitas Malikussaleh | F016XB056</p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="card">
            <v-img :src="require('../assets/avatar2-min.png')" class="about-image">
            </v-img>
            <h4 class="heading-card">Mohammad Hoki Rezky</h4>
            <p class="text-card">
              Universitas Bhayangkara Jakarta Raya | F019XB476
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TentangKamiPage',
  layout: 'LandingLayout',
  data() {
    return {}
  },
  head() {
    const title = 'Tentang Kami'
    return { title }
  },
}
</script>
<style scoped>
.oval {
  border-radius: 100px;
  border: 2px solid #1b5e20;
  font-weight: 600;
}
.heading-all {
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

.about-we {
  background-color: rgb(245, 245, 245);
  padding: 0 6rem;
}

.about-heading {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1b5e20;
}

.about-subheading {
  color: #36833b;
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

  .about-we {
    padding: 0 12px;
  }

  .card {
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 300px;
  }
}

.card {
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  overflow: hidden;
  max-width: 355px;
}

.heading-card {
  padding: 14px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.334;
  letter-spacing: 0em;
}

.text-card {
  padding: 0 14px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 12px;
}
.v-image__image--preload {
  filter: none !important;
  transform: none !important;
}
</style>
