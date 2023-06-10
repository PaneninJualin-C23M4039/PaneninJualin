<template>
  <v-container fluid class="container container__item-list">
    <h3 class="text-center text-title">
      <span class="text-highlight">Belanjain</span>
      di PaneninJualin
    </h3>
    <v-row class="text-center mt-1 mb-5 pb-5">
      <v-col cols="12" md="12">
        <span
          >Temukan hasil tani terbaik hanya di menu
          <span class="text-highlight">Belanjain</span>
          oleh PaneninJualin!
        </span>
      </v-col>
      <div class="divider mt-2"></div>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field v-model="searchQuery" label="Search" placeholder="Jeruk 5kg" outlined dense></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-layout align-center justify-center v-if="paginatedItems.length === 0">
        <span>Tidak ada barang dengan nama <strong>" {{ searchQuery }} "</strong></span>
      </v-layout>
      <v-col
        cols="12"
        lg="3"
        md="4"
        sm="6"
        v-for="item in paginatedItems"
        :key="item.id"
      >
        <v-card class="mx-auto" max-width="344" elevation="3">
          <v-img :src="item.gambar" height="200px"></v-img>
          <v-card-title class="font-weight-medium">{{
            item.namaBarang
          }}</v-card-title>
          <v-card-subtitle class="py-2">
            <v-chip color="green" style="color: white">
              <v-icon color="white">mdi-currency-usd</v-icon>
              {{ item.harga }}
            </v-chip>
            <v-chip color="orange darken-2" style="color: white">
              <v-icon color="white">mdi-shape</v-icon>
              ‎ {{ item.jenis }}
            </v-chip>
          </v-card-subtitle>
          <v-card-subtitle class="py-2">
            <v-chip
              elevation="3"
              color="green darken-2"
              style="color: white"
              :href="`https://wa.me/${item.whatsapp}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon color="white">mdi-whatsapp</v-icon>
              ‎ {{ item.whatsapp }}
            </v-chip>
          </v-card-subtitle>
          <v-card-subtitle class="py-2">
            <v-chip color="info" style="color: white">
              <v-icon color="white">mdi-account</v-icon>
              ‎ {{ item.namaPenjual }}
            </v-chip>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="green darken-4" text @click="toggleExpanded(item)"
              >Lebih Lanjut</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn icon @click="toggleExpanded(item)">
              <v-icon>{{
                item.expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="item.expanded">
              <v-divider></v-divider>
              <v-card-text>
                {{ item.deskripsi }}
              </v-card-text>
              <v-card-actions>
                <v-btn
                  block
                  color="green darken-2"
                  class="white--text"
                  @click="inputToCart(item)"
                  >Masukkan Keranjang</v-btn
                >
              </v-card-actions>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12" class="text-center">
        <v-pagination
          v-model="currentPage"
          :length="pageCount"
          @input="changePage"
          color="green darken-2"
          class="mx-1"
          circle
        >
        </v-pagination>
      </v-col>
    </v-row>

    <!-- Dialog dan Button dengan Model -->

    <v-btn
      class="btn-cart"
      v-show="btnCart"
      fab
      elevation="3"
      color="green darken-2"
      @click="dialogCart = true"
    >
      <v-icon color="white">mdi-cart</v-icon>
    </v-btn>

    <v-dialog v-model="dialogCart" max-width="600">
      <v-card>
        <v-card-title class="font-weight-bold">Keranjang Anda</v-card-title>
        <v-card-subtitle
          >Halaman ini akan menampilkan barang yang anda masukkan kedalam
          keranjang.</v-card-subtitle
        >
        <v-card-text>
          <v-row>
            <v-col cols="12" v-for="(item, index) in itemsCart" :key="index">
              <v-card outlined shaped color="green darken-2">
                <v-img :src="item.gambar" height="150px"></v-img>
                <v-card-title>
                  <span style="color: white">{{ item.namaBarang }}</span>
                </v-card-title>
                <v-card-subtitle class="py-2">
                  <v-chip color="green" style="color: white">
                    <v-icon color="white">mdi-currency-usd</v-icon>
                    {{ item.harga }}
                  </v-chip>
                  <v-chip color="orange" style="color: white">
                    <v-icon color="white">mdi-shape</v-icon>
                    {{ item.jenis }}
                  </v-chip>
                </v-card-subtitle>
                <v-card-subtitle class="py-2">
                  <v-chip color="info" style="color: white">
                    <v-icon color="white">mdi-account</v-icon>
                    {{ item.namaPenjual }}
                  </v-chip>
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn
                    block
                    color="red"
                    class="white--text"
                    @click="removeFromCart(index)"
                    >Hapus</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            color="green darken-2"
            class="white--text"
            @click="checkoutHandler"
          >
            Checkout
            <span class="circled">({{ itemsCart.length }})</span>
          </v-btn>
        </v-card-actions>
        <v-card-actions class="mt-0 pt-0">
          <v-btn
            block
            color="red darken-2"
            class="white--text"
            @click="dialogCart = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="snackbarAttr.value"
      :color="snackbarAttr.color"
      timeout="3000"
    >
      {{ snackbarAttr.message }}
    </v-snackbar>
  </v-container>
</template>

<script>
import { ref as dbRef, onValue, remove } from 'firebase/database'
import { db } from '~/plugins/firebase'

export default {
  name: 'BelanjainPage',
  layout: 'LandingLayout',
  data() {
    return {
      show: false,
      btnCart: false,
      items: [],
      itemsCart: [],
      dialogCart: false,
      snackbarAttr: { value: false, message: '', color: '' },
      searchQuery: '',

      currentPage: 1,
      itemsPerPage: 4,
    }
  },

  computed: {
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage

      const foundItems = this.items.filter((item) => 
        item.namaBarang.toLowerCase().includes(this.searchQuery.toLowerCase())
      )

      return foundItems.slice(startIndex, endIndex)
    },

    pageCount() {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
  },

  methods: {
    changePage(page) {
      this.currentPage = page
    },

    toggleExpanded(item) {
      item.expanded = !item.expanded
    },

    inputToCart(item) {
      this.btnCart = true

      const existingItem = this.itemsCart.find(
        (cartItem) => cartItem.id === item.id
      )

      if (existingItem) {
        this.setSnackbar(true, 'Barang Sudah Ada di Keranjang', 'red')
      } else {
        try {
          this.itemsCart.push(item)
          this.setSnackbar(true, 'Berhasil Menambahkan ke Keranjang', 'green')
        } catch (error) {
          this.setSnackbar(
            true,
            `Gagal Menambahkan ke Keranjang: ${error}`,
            'green'
          )
        }
      }
    },

    removeFromCart(index) {
      this.itemsCart.splice(index, 1)
      this.setSnackbar(true, 'Berhasil Menghapus dari Keranjang', 'green')
    },

    removeFromDatabase(item) {
      // Database ref to firebase.js
      const itemRef = dbRef(db, `barang/${item.id}`)
      remove(itemRef)
        .then(() => {
          // Hapus item dari variabel items
          const index = this.items.findIndex((i) => i.id === item.id)
          if (index !== -1) {
            this.items.splice(index, 1)
          }

          // Hapus item dari variabel itemsCart
          const cartIndex = this.itemsCart.findIndex(
            (iCart) => iCart.id === item.id
          )
          if (cartIndex !== -1) {
            this.itemsCart.splice(cartIndex, 1)
          }
        })
        .catch((error) => {
          this.setSnackbar(
            true,
            `Gagal Menghapus dari Keranjang dan RTDB: ${error}`,
            'red'
          )
        })
    },

    checkoutHandler() {
      if (this.itemsCart.length === 0) {
        this.setSnackbar(true, 'Keranjang Tidak Boleh Kosong', 'red')
        return
      }
      // Set item di localStorage untuk dicetak pdf
      localStorage.setItem('keranjang', JSON.stringify(this.itemsCart))

      // Hapus database dari setiap data yang ada dari itemsCart
      this.itemsCart.forEach((item) => {
        this.removeFromDatabase(item)
      })

      this.setSnackbar(true, 'Memindahkan Halaman...', 'orange darken-2')

      setTimeout(() => {
        this.$router.push({
          path: '/generatePdf',
        })
      }, 5000)
    },

    setSnackbar(val, msg, color) {
      this.snackbarAttr.value = val
      this.snackbarAttr.message = msg
      this.snackbarAttr.color = color
    },
  },

  created() {
    onValue(dbRef(db, 'barang'), (snapshot) => {
      ;(this.items = []),
        snapshot.forEach((item) => {
          this.items.push({
            id: item.key,
            namaBarang: item.val().namaBarang,
            namaPenjual: item.val().namaPenjual,
            jenis: item.val().jenis,
            harga: item.val().harga,
            gambar: item.val().gambar,
            whatsapp: item.val().whatsapp,
            deskripsi: item.val().deskripsi,
            expanded: false,
          })
        })
    })

    if (this.items.length) {
      this.setSnackbar(true, 'Berhasil Mendapatkan Data', 'green')
    } else {
      this.setSnackbar(true, 'Gagal Mendapatkan Data', 'red')
    }
  },

  head() {
    const title = 'Belanjain'
    return { title }
  },
}
</script>

<style scoped>
.circled {
  font-weight: 800;
}
.btn-cart {
  position: fixed;
  bottom: 70px;
  right: 40px;
}
.container {
  padding: 100px;
}

.text-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1b5e20;
}

.text-highlight {
  color: #ffffff;
  padding: 5px;
  background-color: #1b5e20;
}

.divider {
  height: 2px;
  width: 12rem;
  margin: 0 auto 0;
  background-color: #1b5e20;
}

@media (max-width: 1000px) {
  .container {
    padding: 100px 10px;
  }
}
</style>
