<template>
  <div class="container">
    <v-snackbar
      v-model="snackbarAttr.value"
      :color="snackbarAttr.color"
      timeout="3000"
    >
      {{ snackbarAttr.message }}
    </v-snackbar>
  </div>
</template>
<script>
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs

export default {
  name: 'GeneratePdfPage',
  layout: 'LandingLayout',
  data() {
    return {
      snackbarAttr: { value: false, message: '', color: '' },
    }
  },

  created() {
    const itemsCart = JSON.parse(localStorage.getItem('keranjang'))

    if (itemsCart && itemsCart.length > 0) {
      const tableRows = []

      itemsCart.forEach((item) => {
        const row = [item.namaBarang, item.harga, item.jenis, item.namaPenjual]
        tableRows.push(row)
      })

      const documentDefinition = {
        content: [
          { text: 'Keranjang Belanja', style: 'header' },
          { text: ' ', margin: [0, 10] },
          {
            table: {
              headerRows: 1,
              widths: ['*', 'auto', 'auto', 'auto'],
              body: [
                ['Nama Barang', 'Harga', 'Jenis', 'Penjual'],
                ...tableRows,
              ],
            },
          },
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            alignment: 'center',
            margin: [0, 0, 0, 10],
          },
        },
      }

      const pdfDocGen = pdfMake.createPdf(documentDefinition)
      pdfDocGen.download('keranjang_belanja.pdf')
    } else {
      console.log('cek disini data localstorage ga kebawa')
    }

    localStorage.clear()
  },
}
</script>

<style scoped>
.container {
  padding: 100px;
}
</style>
