<template>
  <div class="about-section">
    <v-container fluid class="about-we">
      <v-row align="center">
        <v-col cols="12" md="8" class="text-xs-center">
          <h2 class="about-heading animate__animated animate__backInDown">Informasi Seputar Hasil Tani</h2>
          <p class="about-description">
            Hasil tani, sumber kehidupan kita. Biarkan informasi memperkaya
            pengetahuanmu tentang keajaiban alam yang melimpah di ladang dan
            kebun.
          </p>
        </v-col>
        <v-col cols="12" md="4">
          <v-img :src="require('../assets/info1-min.png')" class="about-image">
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="heading-all">
      <div class="divider-visi mb-1"></div>
      <h3 class="about-heading text-center animate__animated animate__backInLeft">Manfaat & Tujuan</h3>
      <v-row class="text-center">
        <v-col cols="12" md="6">
          <h3 class="about-subheading">Manfaat</h3>
          <p class="about-subdescription">
            Pertanian memberikan sumber penghasilan bagi petani dan masyarakat
            pedesaan. Sebagai sektor ekonomi yang penting, pertanian menciptakan
            lapangan kerja bagi jutaan orang di seluruh dunia.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="about-subheading">Tujuan</h3>
          <p class="about-subdescription">
            Hasil tani juga bertujuan untuk menyediakan makanan yang aman dan
            bebas dari kontaminasi.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="heading-all heading-section">
      <div class="divider-visi mb-1"></div>
      <h3 class="about-heading text-center animate__animated animate__backInRight">Hasil Tani</h3>
      <p class="about-subdescription text-center">
        Kenali manfaat dan khasiat dari hasil tani yang sering dipasarkan di PaneninJualin :
      </p>
      <swiper-container class="mySwiper" pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
      slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
      coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true">
        <swiper-slide v-for="(item, index) in informasiList" :key="index">
          <div class="card">
            <v-img :src="item.image" class="about-image"></v-img>
            <h4 class="heading-card">{{ item.nama }}</h4>
            <p class="text-card">{{ item.desc }}</p>
          </div>
        </swiper-slide>
      <div class="swiper-pagination"></div>
      </swiper-container>
    </v-container>

    <v-container class="heading-all heading-section" style="background-color: rgb(245, 245, 245); padding: 2rem;">
      <div class="divider-visi mb-1"></div>
      <h3 class="about-heading text-center animate__animated animate__backInUp">Tertarik?</h3>
      <p class="about-subdescription text-center">
        Temukan produk pilihan anda di fitur 
        <span class="text-highlight">Belanjain</span>. 
        Temukan produk menarik, checkout secara langsung tanpa harus register maupun login!
      </p>
      <button class="btn__">
        <nuxt-link to="/belanjain">Belanja Disini</nuxt-link>
      </button>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'InformasiPage',
  layout: 'LandingLayout',
  data() {
    return {
      informasiList: [
        {
          nama: 'Beras',
          image: require('../assets/beras.png'),
          desc: 'Beras adalah salah satu hasil tani yang paling penting dan banyak dikonsumsi di dunia.',
        },
        {
          nama: 'Kopi',
          image: require('../assets/kopi-min.png'),
          desc: 'Biji kopi adalah hasil utama yang dihasilkan dari perkebunan kopi. Biji kopi yang matang dipanen dari pohon kopi dan kemudian diolah melalui proses pengupasan kulit buah, fermentasi,dan pemanggangan.',
        },
        {
          nama: 'Jagung',
          image: require('../assets/jagung-min.png'),
          desc: 'Jagung adalah tanaman biji-bijian yang penting dan serbaguna dengan banyak kegunaan dalam makanan, pakan ternak, biofuel, dan industri lainnya.',
        },
        {
          nama: 'Kedelai',
          image: require('../assets/kedelai-min.png'),
          desc: 'Kedelai adalah salah satu tanaman jenis polong-polongan yang menjadi bahan dasar banyak sebuah makanan seperti susu, kecap, dan tempe.',
        },
        {
          nama: 'Ubi Kayu',
          image: require('../assets/ubi kayu-min.png'),
          desc: 'Ubi kayu merupakan makanan pokok penduduk indonesia, selain itu digunakan sebagai bahan baku industri dan pakan ternak.',
        },
        {
          nama: 'Kentang',
          image: require('../assets/kentang-min.png'),
          desc: 'Kentang adalah makanan yang banyak sekali zat-zat yang berguna untuk meningkatkan pH di dalam tubuh manusia, Vitamin C, Karbohidrat, dan gentian sebagai pengawal tenaga darah.',
        },
        {
          nama: 'Jahe',
          image: require('../assets/jahe-min.png'),
          desc: 'Jahe adalah tumbuhan yang rimpangnya sering digunakan sebagai rempah-rempah dan bahan baku pengobatan tradisional. Rasa dominan pedas dari jahe disebabkan oleh senyawa keton bernama Zingeron.',
        },
        {
          nama: 'Kelapa',
          image: require('../assets/kelapa-min.png'),
          desc: 'Kelapa diyakini dapat mengurangi peradangan, serta menjaga sistem kekebalan tubuh. Selain itu kelapa berperan sebagai anti jamur, antivirus, anti tumor.',
        },
        {
          nama: 'Sagu',
          image: require('../assets/sagu-min.png'),
          desc: 'Sagu berfungsi menyehatkan sel-sel pada usus dan paru-paru. Selain itu, melancarkan peredaran dan pembuluh darah di sekitar usus dan paru-paru.',
        },
        {
          nama: 'Coklat',
          image: require('../assets/coklat.png'),
          desc: 'Coklat bermanfaat untuk mencegah penumpukan kolestrol di dalam pembuluh darah, sehingga menurunkan resiko terjadinya penyakit jantung dan stroke.',
        },
        {
          nama: 'Tebu',
          image: require('../assets/tebu-min.png'),
          desc: 'Tebu mengandung berbagai macam nutrisi seperti Karbohidrat, protein, mineral, vitamin, dan antioksdan. Oksidan yang terkandung dalam tebu dapat membantu merawat kulit.',
        },
        {
          nama: 'Bawang',
          image: require('../assets/bawang.png'),
          desc: 'Bawang merah mengandung senyawa alil sulfida yang membantu mencegah penyakit jantung. Sedangkan flavonoid quercetin pada bumbu masak ini, membantu menurunkan tekanan darah dan peradangan.',
        },
      ]
    }
  },
  head() {
    const title = 'Informasi'
    return { title }
  },
}
</script>
<style scoped>
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
  color: black;
}

.about-image {
  max-width: 100%;
}

.card {
  background-color: #f2f2f2;
  max-width: 300px;
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

@media (max-width: 768px) {

  /* Override text-center on medium and larger devices */
  .text-xs-center {
    text-align: center !important;
  }

  .about-we {
    padding: 0 12px;
  }
}

.card {
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  /* margin-bottom: 2rem; */
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
}

.mySwiper {
  width: 100%;
}

swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

swiper-slide > img {
  display: block;
  width: 100%;
}

.text-highlight {
  color: #ffffff;
  padding: 5px;
  border-radius: 5px;
  background-color: #1b5e20;
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

.v-image__image--preload {
  filter: none !important;
  transform: none !important;
}
</style>
