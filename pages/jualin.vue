<template>
  <div class="about-section">
    <v-container fluid class="about-we">
      <v-row align="center">
        <v-col cols="12" md="8" class="text-xs-center">
          <h2 class="about-heading animate__animated animate__backInDown">
            <span class="highlight-text">Jualin</span>
            di PaneninJualin
          </h2>
          <p class="about-description">
            Merupakan fitur unggulan dari
            <span class="highlight-text">PaneninJualin.</span>
            Jual hasil panen anda secara langsung tanpa harus login maupun
            mendaftar, cukup masukkan data barang yang anda ingin jual maka
            secara langsung barang akan terjual melalui Jualin!
          </p>
          <v-chip to="#readme">
            <v-icon>mdi-magnify</v-icon>
            Pelajari Caranya!
          </v-chip>
        </v-col>
        <v-col cols="12" md="4">
          <v-img
            :src="require('../assets/farmer.svg')"
            class="about-image lazyload"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-container>

    <section id="readme">
      <v-container class="heading-all bg-gray-padding">
        <div class="divider-visi"></div>
        <h3
          class="about-heading text-center animate__animated animate__backInLeft"
        >
          Tata & Cara
        </h3>
        <v-row class="text-center">
          <v-col cols="12" md="12">
            <p>
              Berikut merupakan tahapan untuk menggunakan fitur
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
                <v-card color="#1B5E20" dark>
                  <v-card-title class="text-h6">{{
                    item.contentTitle
                  }}</v-card-title>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-container class="heading-all">
      <div class="divider-about"></div>
      <h3
        class="about-heading text-center animate__animated animate__backInRight"
      >
        Apa Saja Yang Perlu Disiapkan?
      </h3>
      <v-row class="text-center">
        <v-col cols="12" md="12">
          <p class="about-subdescription">
            Penasaran apa saja yang perlu disiapkan untuk menjual di
            PaneninJualin? Mudah kok, cukup siapkan beberapa kriteria dibawah
            ini dan barang sudah bisa dipasarkan!
          </p>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <h4 class="heading-card">1. Hasil Tani</h4>
            <p class="text-card">
              Tentu saja yang pertama kali harus disiapkan adalah barangnya.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <h4 class="heading-card">2. Jenis Tani</h4>
            <p class="text-card">
              Tentukan jenis tani yang anda ingin jual sesuai dengan pilihan
              yang sudah kami sediakan.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <h4 class="heading-card">3. Harga Tani</h4>
            <p class="text-card">
              Keputusan akhir harga ditangan anda! Tanpa ada campur tangan pihak
              manapun.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="" md="3">
          <div class="card">
            <h4 class="heading-card">4. Kualitas Produk</h4>
            <p class="text-card">
              Pastikan produk yang akan anda jual berkualitas sehingga pembeli
              tidak akan kecewa.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="heading-all bg-gray-padding">
      <div class="divider-team"></div>
      <h3 class="about-heading text-center animate__animated animate__backInUp">
        Jualin Sekarang!
      </h3>
      <v-row class="text-center">
        <v-col cols="12" md="12">
          <p class="subtitle-">
            Jual hasil tani anda sekarang melalui form dibawah!
          </p>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-form>
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  filled
                  label="Nama Penjual"
                  v-model="formBarang.namaPenjual"
                  placeholder="Djoko Sumarto"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  filled
                  label="Nomor Penjual"
                  v-model="formBarang.whatsapp"
                  placeholder="6289512036461"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  filled
                  label="Jenis"
                  v-model="formBarang.jenis"
                  :items="jenisList"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  filled
                  label="Nama Barang"
                  v-model="formBarang.namaBarang"
                  placeholder="Jeruk 1kg"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  append-icon="mdi-currency-usd"
                  filled
                  label="Harga Barang"
                  v-model="formBarang.harga"
                  placeholder="10000"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-file-input
                  append-icon="mdi-camera"
                  filled
                  label="Gambar Barang"
                  v-model="formBarang.gambar"
                  placeholder="Select Image"
                  accept="image/*"
                  prepend-icon=""
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  filled
                  label="Deskripsi Barang"
                  v-model="formBarang.deskripsi"
                  placeholder="Jeruk sebanyak 1kg hasil impor dari korea. memiliki kualitas yang bagus dan tahan lama"
                  required
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  v-model="checkboxChecked"
                  required
                  label="Apakah anda sudah yakin dengan data anda?"
                ></v-checkbox>
                <p class="mt-0 pt-0">
                  Pastikan anda sudah mengisi seluruh bagian form sebelum
                  mencentang tombol konfirmasi.
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn
                  large
                  color="primary"
                  @click="submitForm"
                  :disabled="!checkboxChecked"
                  >Submit</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-row>
    </v-container>

    <v-snackbar
      v-model="snackbarAttr.value"
      :color="snackbarAttr.color"
      timeout="5000"
    >
      {{ snackbarAttr.message }}
    </v-snackbar>
  </div>
</template>

<script>
import { ref as dbref, push } from 'firebase/database'
import { db, storage } from '~/plugins/firebase'
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage'

export default {
  name: 'JualinPage',
  layout: 'LandingLayout',
  data() {
    return {
      checkboxChecked: false,
      jenisList: [
        'Padi',
        'Gandum',
        'Jagung',
        'Kedelai',
        'Sayuran',
        'Buah-Buahan',
        'Kacang-Kacangan',
        'Karet',
        'Kopi',
        'Teh',
        'Lain-Lainnya',
      ],
      timelineList: [
        {
          number: '1',
          icon: 'mdi-numeric-1',
          contentTitle: 'Buka PaneninJualin',
        },
        {
          number: '2',
          icon: 'mdi-numeric-2',
          contentTitle: 'Masuk ke Halaman Jualin',
        },
        {
          number: '3',
          icon: 'mdi-check',
          contentTitle: 'Jual hasil tani anda!',
        },
      ],
      formBarang: {
        namaPenjual: '',
        whatsapp: '',
        namaBarang: '',
        jenis: '',
        harga: '',
        deskripsi: '',
        gambar: [],
      },
      snackbarAttr: { value: false, message: '', color: '' },
    }
  },

  methods: {
    // Submit form data ke db firebase
    async submitForm() {
      if (this.validateForm()) {
        try {
          const file = this.formBarang.gambar

          const fileRef = storageRef(storage, file.name)
          await uploadBytes(fileRef, file)

          const imageUrl = await getDownloadURL(fileRef)

          this.formBarang.gambar = imageUrl

          const formDataRef = dbref(db, 'barang')
          await push(formDataRef, this.formBarang)

          this.clearForm()

          this.setSnackbar(
            true,
            'Berhasil Input Data, Memindahkan Halaman...',
            'orange darken-2'
          )

          setTimeout(() => {
            this.$router.push({
              path: '/belanjain',
            })
          }, 3000)
        } catch (error) {
          this.clearForm()
          this.setSnackbar(true, `Gagal Input Data: ${error}`, 'red')
        }
      }
    },

    // Validate form data
    validateForm() {
      const errors = []

      if (!this.formBarang.namaPenjual) {
        errors.push('Nama Penjual belum diisi.')
      }

      // Validate Nomor Penjual (whatsapp)
      const whatsappRegex = /^[0-9]{10,15}$/
      if (!this.formBarang.whatsapp) {
        errors.push('Nomor Penjual belum diisi')
      } else if (!whatsappRegex.test(this.formBarang.whatsapp)) {
        errors.push('Nomor Penjual tidak sesuai, isi dengan 10-15 angka.')
      }

      if (!this.formBarang.jenis) {
        errors.push('Jenis belum diisi.')
      }

      if (!this.formBarang.namaBarang) {
        errors.push('Nama Barang belum diisi.')
      }

      // Validate Nama Barang (string with at least 3 characters)
      const namaBarangRegex = /^.{3,}$/
      if (!namaBarangRegex.test(this.formBarang.namaBarang)) {
        errors.push('Nama Barang tidak sesuai, isi dengan minimal 3 huruf.')
      }

      if (!this.formBarang.harga) {
        errors.push('Harga Barang belum diisi.')
      }

      // Validate Harga Barang (numeric value greater than 0)
      const hargaBarangRegex = /^[1-9][0-9]*$/
      if (!hargaBarangRegex.test(this.formBarang.harga)) {
        errors.push('Harga Barang tidak sesuai, isi dengan angka diatas 0.')
      }

      if (!this.formBarang.gambar) {
        errors.push('Gambar Barang belum diisi.')
      }

      if (!this.formBarang.deskripsi) {
        errors.push('Deskripsi Barang belum diisi.')
      }

      // Validate Deskripsi Barang (string with at least 10 characters)
      const deskripsiRegex = /^.{10,}$/
      if (!deskripsiRegex.test(this.formBarang.deskripsi)) {
        errors.push(
          'Deskripsi Barang tidak sesuai, isi dengan minimal 10 karakter'
        )
      }

      if (!this.checkboxChecked) {
        errors.push('Mohon centang tombol konfirmasi.')
      }

      if (errors.length) {
        this.setSnackbar(true, errors.join(' '), 'red')
        return false
      }

      return true
    },

    // Clear form data setelah submit
    clearForm() {
      this.formBarang = ''
    },

    // Set message dan color snackbar
    setSnackbar(val, msg, color) {
      this.snackbarAttr.value = val
      this.snackbarAttr.message = msg
      this.snackbarAttr.color = color
    },
  },

  mounted() {},

  computed: {
    isSubmitDisabled() {
      return !this.checkboxChecked
    },
  },

  setup() {},

  head() {
    const title = 'Jualin'
    return { title }
  },
}
</script>

<style scoped>
.long-text {
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.bg-gray-padding {
  background-color: rgb(245, 245, 245);
  padding: 3rem 6rem;
}

.item-list {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-flow: row wrap;
}

.highlight-text {
  color: white;
  padding: 5px;
  border-radius: 3px;
  background-color: #1b5e20;
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
  width: 9rem;
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
  font-weight: 700;
  font-size: 16px;
  color: #1b5e20;
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
}
</style>
