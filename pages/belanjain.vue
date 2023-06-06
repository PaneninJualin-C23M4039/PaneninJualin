<template>
  <v-container fluid class="container">
    <v-row>
      <v-col cols="12" md="3" sm="6" v-for="item in items" :key="item.id">
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
            <v-chip color="green darken-2" style="color: white;" :href="`https://wa.me/${item.whatsapp}`" target="_blank" rel="noopener noreferrer">
              <v-icon color="white">mdi-whatsapp</v-icon>
              ‎ {{ item.whatsapp }}
            </v-chip>
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
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
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
      items: [],
    }
  },

  methods: {
    toggleExpanded(item) {
      item.expanded = !item.expanded
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
.container {
  padding: 100px;
  background-color: rgb(245, 245, 245);
}
</style>