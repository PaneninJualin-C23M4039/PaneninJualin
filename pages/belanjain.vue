<template>
  <v-container fluid class="container container__item-list">
    <h3 class="text-center text-title">
      <span class="text-highlight">Belanjain</span>
       di PaneninJualin
    </h3>
    <v-row class="text-center mt-1 mb-5 pb-5">
      <v-col cols="12" md="12">
        <span>Temukan hasil tani terbaik hanya di menu 
          <span class="text-highlight">Belanjain</span> 
          oleh PaneninJualin!
        </span>
      </v-col>
      <div class="divider mt-2"></div>
    </v-row> 
    <v-row>
      <v-col cols="12" lg="3" md="4" sm="6" v-for="item in items" :key="item.id">
        <v-card class="mx-auto" max-width="344" elevation="3">
          <v-img :src="item.gambar" height="200px"></v-img>
          <v-card-title class="font-weight-medium">{{ item.namaBarang }}</v-card-title>
          <v-card-subtitle class="py-2">
            <v-chip color="green" style="color: white;">
              <v-icon color="white">mdi-currency-usd</v-icon>
              {{ item.harga }}
            </v-chip>
            <v-chip color="orange darken-2" style="color: white;">
              <v-icon color="white">mdi-shape</v-icon>
              ‎ {{ item.jenis }}
            </v-chip>
          </v-card-subtitle>
          <v-card-subtitle class="py-2">
            <v-chip elevation="3" color="green darken-2" style="color: white;" :href="`https://wa.me/${item.whatsapp}`" target="_blank" rel="noopener noreferrer">
              <v-icon color="white">mdi-whatsapp</v-icon>
              ‎ {{ item.whatsapp }}
            </v-chip>
          </v-card-subtitle>
          <v-card-subtitle class="py-2">
            <v-chip color="info" style="color: white;">
              <v-icon color="white">mdi-account</v-icon>
              ‎ {{ item.namaPenjual }}
            </v-chip>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn color="green darken-4" text @click="toggleExpanded(item)">Lebih Lanjut</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="toggleExpanded(item)">
              <v-icon>{{ item.expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="item.expanded">
              <v-divider></v-divider>
              <v-card-text>
                {{ item.deskripsi }}
              </v-card-text>
              <v-card-actions>
                <v-btn block color="green darken-2" class="white--text" @click="inputToCart(item)">Masukkan Keranjang</v-btn>
              </v-card-actions>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>

    <v-btn class="btn-cart" v-show="btnCart" fab elevation="3" color="green darken-2" @click="dialogCart = true">
      <v-icon color="white">mdi-cart</v-icon>
    </v-btn>

    <v-dialog v-model="dialogCart" max-width="600">
      <v-card>
        <v-card-title class="font-weight-bold">Keranjang Anda</v-card-title>
        <v-card-subtitle>Halaman ini akan menampilkan barang yang anda masukkan kedalam keranjang.</v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="12" v-for="item in itemsCart" :key="item.id">
              <v-card outlined color="green darken-2 text--white">
                <v-img :src="item.gambar" height="150px"></v-img>
                <v-card-title>
                  <span style="color: white;">{{ item.namaBarang }}</span>
                </v-card-title>
                <v-card-subtitle class="py-2">
                  <v-chip color="green" style="color: white;">
                    <v-icon color="white">mdi-currency-usd</v-icon>
                    {{ item.harga }}
                  </v-chip>
                  <v-chip color="orange" style="color: white;">
                    <v-icon color="white">mdi-shape</v-icon>
                    {{ item.jenis }}
                  </v-chip>
                </v-card-subtitle>
                <v-card-subtitle class="py-2">
                  <v-chip color="info" style="color: white;">
                    <v-icon color="white">mdi-account</v-icon>
                    {{ item.namaPenjual }}
                  </v-chip>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="green darken-2" class="white--text">Checkout</v-btn>
        </v-card-actions>
        <v-card-actions class="mt-0 pt-0">
          <v-btn block color="red darken-2" class="white--text" @click="dialogCart = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import { ref as dbRef, onValue } from 'firebase/database'
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
    }
  },

  methods: {
    toggleExpanded(item) {
      item.expanded = !item.expanded
    },

    inputToCart(item) {
      this.btnCart = true
      this.itemsCart.push(item)
    }
  },  

  created() {
    onValue(dbRef(db, 'barang'), (snapshot) => {
      this.items = [],
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
  },

  head() {
    const title = 'Belanjain'
    return { title }
  }
}
</script>

<style scoped>
.btn-cart {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.container {
  padding: 100px;
}

.text-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1B5E20;
}

.text-highlight {
  color: #FFFFFF;
  padding: 5px;
  background-color: #1B5E20;
}

.divider {
  height: 2px;
  width: 12rem;
  margin: 0 auto 0;
  background-color: #1B5E20;
}

@media (max-width: 1000px) {
  .container {
    padding: 100px 10px;
  }
}
</style>