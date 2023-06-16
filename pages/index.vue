<template>
  <div class="about-section">
    <v-container fluid>
      <v-row align="center" :row-reverse="$vuetify.breakpoint.mdAndUp">
        <v-col cols="12" md="6" class="text-center" order="2" order-md="1">
          <h2 class="landing-heading animate__animated animate__backInDown">Jual Hasil Tanimu Bersama Kami</h2>
          <p class="landing-description">
            Membantu petani meningkatkan pendapatan mereka dengan memperluas
            jangkauan pasar.
          </p>
          <button class="btn__">
            <nuxt-link to="/jualin">Jual Sekarang</nuxt-link>
          </button>
        </v-col>
        <v-col cols="12" md="6" class="order-1 order-md-2">
          <v-img
            :src="require('../assets/landing-page-1-min.png')"
            class="landing-image"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="heading-all heading-section">
      <div class="divider-visi"></div>
      <h3 class="about-heading text-center animate__animated animate__backInLeft">Layanan Kami</h3>
      <p class="about-subdescription text-center">
        Berikut adalah daftar layanan yang kami sediakan:
      </p>
      <v-row class="text-center" justify="center">
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <v-img
              :src="require('../assets/layanan1-min.png')"
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
              :src="require('../assets/layanan2-min.png')"
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
              :src="require('../assets/layanan3-min.png')"
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
      <h3 class="about-heading text-center animate__animated animate__backInRight">Mengapa PaneninJualin</h3>
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

    <v-container class="heading-all heading-section">
      <div class="divider-visi"></div>
      <h3 class="about-heading text-center animate__animated animate__backInLeft">Article</h3>
      <p class="about-subdescription text-center">
        Berikut merupakan Beberapa artikel penting terkait Bertani
      </p>
      <v-expansion-panels>
        <v-expansion-panel v-for="(article, index) in articles" :key="index" aria-label="farm articles">
          <v-expansion-panel-header class="article-title">{{
            article.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="article-content">{{ article.content }}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

    <v-container fluid style="margin-top: 7rem">
      <v-row align="center" :row-reverse="$vuetify.breakpoint.mdAndUp">
        <v-col cols="12" md="6" class="text-center" order="2" order-md="1">
          <h2 class="landing-heading animate__animated animate__backInUp">
            Ayo Buat Para Petani Sejahtera Bersama PaneninJualin
          </h2>
          <p class="landing-description">
            Ciptakan kesejahteraan petani untuk hidup yang lebih baik
          </p>
          <button class="btn__">
            <nuxt-link to="/belanjain">Belanja Disini</nuxt-link>
          </button>
        </v-col>
        <v-col cols="12" md="6" class="order-1 order-md-2">
          <v-img
            :src="require('../assets/landing2-min.png')"
            class="landing-image"
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
    return {
      articles: [
        {
          title: '5 Tips Ampuh Meningkatkan Hasil Panen Sayuran',
          content:
            'Berikut merupakan 5 tips ampuh untuk meningkatkan hasil panen sayuran Anda. Pertama, pilih varietas yang sesuai dengan kondisi lingkungan dan kebutuhan Anda. Kedua, berikan perawatan yang baik, termasuk pemupukan yang tepat, pengairan yang cukup, dan pemangkasan yang teratur. Ketiga, lindungi tanaman dari hama dan penyakit dengan menggunakan metode organik, seperti penggunaan insektisida alami atau penanaman kompanion. Keempat, terapkan rotasi tanaman untuk menjaga keseimbangan nutrisi tanah. Terakhir, pantau tanaman secara rutin dan tanggap terhadap perubahan yang terjadi. Dengan menerapkan tips ini, Anda akan meningkatkan hasil panen sayuran dan mencapai keberhasilan dalam bercocok tanam.',
        },
        {
          title: 'Pentingnya Peran Serangga dalam Pertanian Organik',
          content:
            'Serangga memiliki peran yang krusial sebagai polinator, predator alami, dan pengurai dalam menjaga keseimbangan ekosistem pertanian. Sebagai polinator, serangga seperti lebah dan kupu-kupu membantu menyebarkan serbuk sari dari bunga ke bunga, memastikan terjadinya penyerbukan dan pembuahan yang diperlukan bagi tanaman berbuah. Sebagai predator alami, serangga seperti kumbang pemakan hama dan laba-laba memangsa hama yang dapat merusak tanaman, membantu mengendalikan populasi hama secara alami tanpa perlu menggunakan pestisida kimia. Selain itu, serangga juga berperan sebagai pengurai dengan membantu dalam proses penguraian bahan organik, memperkaya kualitas tanah, dan meningkatkan kesuburan. Dalam pertanian organik, menjaga keberadaan serangga yang bermanfaat dan menghindari penggunaan pestisida kimia berlebihan sangat penting untuk menjaga kesehatan lingkungan dan keberlanjutan pertanian.',
        },
        {
          title: 'Rahasia Sukses Budidaya Tanaman Hias dalam Ruangan',
          content:
            'Berikut merupakan rahasia sukses dalam budidaya tanaman hias dalam ruangan. Pertama, pilih tanaman yang sesuai dengan kondisi cahaya, suhu, dan kelembapan di dalam ruangan Anda. Kedua, pastikan tanaman mendapatkan nutrisi yang cukup dengan memberikan pupuk secara teratur. Ketiga, perhatikan penyiraman yang tepat, jangan terlalu banyak atau terlalu sedikit air. Keempat, jaga kebersihan daun dan tanah, hindari penumpukan debu yang dapat menghambat pertumbuhan tanaman. Kelima, berikan ventilasi yang cukup untuk sirkulasi udara yang baik. Terakhir, berikan perhatian dan cinta kepada tanaman, seperti memberikan pemangkasan, memperhatikan tanda-tanda penyakit, dan memberikan perawatan ekstra sesuai kebutuhan. Dengan menerapkan rahasia ini, Anda akan berhasil dalam budidaya tanaman hias dalam ruangan dan menciptakan suasana indah yang menyejukkan di lingkungan Anda.',
        },
        {
          title: 'Manfaat Menerapkan Pola Tanam Rotasi',
          content:
            'Berikut merupakan manfaat apabila menerapkan pola tanam rotasi dalam budidaya tanaman. Pola tanam rotasi melibatkan penanaman tanaman secara bergantian di bedengan atau lahan yang berbeda setiap musim tanam. Manfaat utama dari pola tanam rotasi adalah mengurangi risiko penyebaran penyakit dan hama tanaman yang spesifik pada satu jenis tanaman saja. Dengan mengubah tanaman yang ditanam setiap musim, tanah juga akan mendapatkan waktu untuk pulih dan mengurangi penumpukan nutrisi yang berlebihan atau kekurangan nutrisi tertentu. Selain itu, pola tanam rotasi juga membantu meningkatkan kesuburan tanah dengan memperkenalkan varietas tanaman yang berbeda, memecah siklus hama, dan mengurangi kebutuhan akan pupuk kimia. Dengan menerapkan pola tanam rotasi, petani dapat mencapai hasil panen yang lebih sehat, meningkatkan produktivitas tanah, dan mengurangi ketergantungan pada pestisida kimia, sehingga mendukung pertanian yang lebih berkelanjutan dan ramah lingkungan.',
        },
        {
          title: 'Tips Memilih Produk Pertanian Organik Berkualitas',
          content:
            'Berikut merupakan beberapa tips untuk memilih produk pertanian organik berkualitas. Pertama, perhatikan label sertifikasi organik resmi yang menunjukkan bahwa produk tersebut memenuhi standar pertanian organik. Kedua, periksa bahan-bahan yang digunakan dalam proses produksi, pastikan tidak ada penggunaan pestisida, herbisida, atau pupuk kimia sintetis yang berbahaya. Ketiga, cari tahu tentang metode budidaya yang digunakan, seperti metode tanam ramah lingkungan, penggunaan kompos atau pupuk organik alami, dan praktik pengendalian hama secara alami. Keempat, perhatikan tampilan produk, pastikan segar, bebas dari kerusakan, dan memiliki kualitas visual yang baik. Terakhir, jangan ragu untuk bertanya kepada produsen atau petani tentang praktik mereka dalam menghasilkan produk pertanian organik. Dengan mengikuti tips ini, Anda dapat memilih produk pertanian organik berkualitas tinggi yang tidak hanya mendukung kesehatan Anda, tetapi juga mendukung keberlanjutan lingkungan dan praktik pertanian yang bertanggung jawab.',
        },
        {
          title: 'Mengoptimalkan Penggunaan Air dalam Pertanian',
          content:
            'Pentingnya mengoptimalkan penggunaan air dalam pertanian. Dalam era perubahan iklim dan ketersediaan air yang semakin terbatas, penting bagi petani untuk mengelola air dengan efisien. Beberapa tips untuk mengoptimalkan penggunaan air adalah dengan menerapkan irigasi tetes atau irigasi berbasis teknologi yang dapat mengirimkan air langsung ke akar tanaman, mengatur jadwal penyiraman berdasarkan kebutuhan tanaman, memperbaiki sistem irigasi yang bocor atau tidak efisien, menggunakan mulsa atau tutup tanah untuk mengurangi penguapan air, dan memilih varietas tanaman yang tahan kekeringan. Selain itu, penting juga untuk memantau dan memperhatikan perkembangan tanaman serta mengatur penggunaan air sesuai dengan fase pertumbuhan tanaman. Dengan mengoptimalkan penggunaan air dalam pertanian, petani dapat mengurangi limbah air, meningkatkan efisiensi penggunaan sumber daya, dan berkontribusi pada keberlanjutan pertanian dalam menghadapi tantangan ketersediaan air yang semakin kompleks.',
        },
      ],
    }
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
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1b5e20;
  line-height: 1.2;
}

.landing-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
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
}

.about-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}

.card {
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
}

.about-image {
  max-width: 100%;
  border-radius: 50%;
  margin-bottom: 1rem;
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
}

.landing-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.btn__ {
  background-color: #4caf50;
  padding: 7px;
  border-radius: 5px;

  transition: background-color 0.5s ease;
}
.btn__:hover {
  background-color: #1b5e20;
}
.btn__ > a {
  text-decoration: none;
  color: white;
}
.article-title {
  font-size: 14px;
  margin-bottom: 10px;
}

.article-content {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .landing-heading {
    font-size: 32px;
  }

  .landing-description {
    font-size: 14px;
  }

  .about-heading {
    font-size: 24px;
  }

  .about-subdescription {
    font-size: 14px;
  }

  .landing-image {
    height: auto;
  }
  .card {
    padding: 1rem;
  }
  .about-image {
    max-width: 100%;
    height: auto;
  }

  .heading-card {
    font-size: 16px;
    margin-bottom: 0.5rem;
  }

  .text-card {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .landing-heading {
    font-size: 24px;
  }

  .landing-description {
    font-size: 12px;
    margin-bottom: 20px;
  }

  .about-heading {
    font-size: 20px;
  }

  .about-subdescription {
    font-size: 12px;
  }

  .card {
    padding: 0.5rem;
  }

  .heading-card {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }

  .text-card {
    font-size: 12px;
  }

  .article-title {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .article-content {
    font-size: 12px;
    line-height: 1.4;
    margin-bottom: 10px;
  }
}
</style>
