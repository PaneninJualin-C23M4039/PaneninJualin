<template>
  <div class="about-section">
    <v-container fluid class="about-we">
      <v-row align="center">
        <v-col cols="12" md="8" class="text-xs-center">
          <h2 class="about-heading">
            <span class="highlight-text">Jualin</span>
            di PaneninJualin
          </h2>
          <p class="about-description">
            Merupakan fitur unggulan dari 
            <span class="highlight-text">PaneninJualin.</span>
             Jual hasil panen anda secara langsung tanpa harus login maupun mendaftar, cukup masukkan data barang yang anda ingin jual maka secara langsung barang akan terjual melalui Jualin!
          </p>
          <v-chip to="#readme">
            <v-icon>mdi-magnify</v-icon>
            Pelajari Caranya!
          </v-chip>
        </v-col>
        <v-col cols="12" md="4">
          <v-img :src="require('../assets/farmer.svg')" class="about-image">
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-section id="readme">
      <v-container class="heading-all bg-gray-padding">
        <div class="divider-visi"></div>
        <h3 class="about-heading text-center">Tata & Cara</h3>
        <v-row class="text-center">
          <v-col cols="12" md="12">
            <p>Berikut merupakan tahapan untuk menggunakan fitur 
              <span class="highlight-text">Jualin</span>.
            </p>
          </v-col>
        </v-row> 
        <v-row class="text-center">
          <v-col cols="12" md="12">
            <v-timeline side="end">
              <v-timeline-item
                v-for="item in timelineList"
                :key="item.number"
                color="#1B5E20"
                :icon="item.icon"
                size="small"
                fill-dot
              >
                <v-card
                  color="#1B5E20"
                  dark
                >
                  <v-card-title class="text-h6">{{ item.contentTitle }}</v-card-title>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </v-section>

    <v-container class="heading-all">
      <div class="divider-about"></div>
      <h3 class="about-heading text-center">Apa Saja Yang Perlu Disiapkan?</h3>
      <v-row class="text-center">
        <v-col cols="12" md="12">
          <p class="about-subdescription">
            Penasaran apa saja yang perlu disiapkan untuk menjual di PaneninJualin?
            Mudah kok, cukup siapkan beberapa kriteria dibawah ini dan barang sudah bisa dipasarkan!
          </p>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" md="3">
          <div class="card">
            <h4 class="heading-card">1. Hasil Tani</h4>
            <p class="text-card">Tentu saja yang pertama kali harus disiapkan adalah barangnya.</p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="card">
            <h4 class="heading-card">2. Jenis Tani</h4>
            <p class="text-card">Tentukan jenis tani yang anda ingin jual sesuai dengan pilihan yang sudah kami sediakan.</p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="card">
            <h4 class="heading-card">3. Harga Tani</h4>
            <p class="text-card">Keputusan akhir harga ditangan anda! Tanpa ada campur tangan pihak manapun.</p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="card">
            <h4 class="heading-card">4. Kualitas Produk</h4>
            <p class="text-card">Pastikan produk yang akan anda jual berkualitas sehingga pembeli tidak akan kecewa.</p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="heading-all">
      <div class="divider-team"></div>
      <h3 class="about-heading text-center">Jualin Sekarang!</h3>
      <v-row align="center">
        <v-col cols="12" md="3">
          <div class="card">
            <v-img :src="require('../assets/avatar1.png')" class="about-image">
            </v-img>
            <h4 class="heading-card">Syaloommuel Sirait</h4>
            <p class="text-card">Universitas Medan Area | F043XB061</p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="card">
            <v-img :src="require('../assets/avatar2.png')" class="about-image">
            </v-img>
            <h4 class="heading-card">Satyo Gusti Anugrah</h4>
            <p class="text-card">Universitas Atma Jaya Yogyakarta | F040XB344</p>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="card">
            <v-img :src="require('../assets/avatar3.png')" class="about-image">
            </v-img>
            <h4 class="heading-card">Azzam Ghufron Nasution</h4>
            <p class="text-card">Universitas Malikussaleh | F016XB056</p>

          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="card">
            <v-img :src="require('../assets/avatar2.png')" class="about-image">
            </v-img>
            <h4 class="heading-card">Mohammad Hoki Rezky</h4>
            <p class="text-card">Universitas Bhayangkara Jakarta Raya | F019XB476</p>
          </div>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  name: 'JualinPage',
  layout: 'LandingLayout',
  data() {
    return {
      timelineList: [
        {
          number: '1',
          icon: 'mdi-numeric-1',
          contentTitle: 'Buka PaneninJualin',
        },
        {
          number: '2',
          icon: 'mdi-numeric-2',
          contentTitle: 'Masuk ke Halaman Jualin'
        },
        {
          number: '3',
          icon: 'mdi-check',
          contentTitle: 'Jual hasil tani anda!'
        }
      ]
    }
  },

  methods: {

  },

  mounted() {

  },

  head() {
    const title = 'Jualin'
    return { title }
  }
}
</script>

<style scoped>
.long-text{
  overflow-wrap: break-word;
  word-wrap: break-word;
}
.bg-gray-padding {
  background-color: rgb(245, 245, 245);
  padding: 3rem 6rem;
}
.item-list{
  display: flex;
  align-items: center;
  gap: 24px;
  flex-flow: row wrap;
}
.highlight-text {
  color: white; 
  padding: 5px; 
  border-radius: 3px; 
  background-color: #1B5E20;
}
.heading-all {
  margin-top: 7rem;
}

.divider-visi {
  height: 2px;
  width: 8rem;
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
  padding: 0 6rem;
}

.about-heading {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #1B5E20;
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  overflow: hidden;
  max-width: 355px;
}

.heading-card {
  padding: 14px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1B5E20;
  line-height: 1.334;
  letter-spacing: 0em;
}

.text-card {
  padding: 0 14px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
}

.v-image__image--preload {
  filter: none !important;
  transform: none !important;
}</style>