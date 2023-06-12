<template>
  <div class="container">
    <v-layout align-center justify-center column>
      <span class="animate__animated animate__backInDown text-green darken-2" style="font-size: 3rem; font-weight: 600;">Terima Kasih!</span>
      <span>sudah menggunakan PaneninJualin sebagai platform jual beli hasil tani!. Sampai bertemu di pemesanan berikutnya!</span>
      <span>
        <a href="/" style="text-decoration: none; color: rgb(47, 47, 231)">Kembali ke Home</a>
      </span>
    </v-layout>
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

  methods: {
    randomOrderId() {
      const num = '0123456789'
      let result = ''
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * num.length)
        result += num[randomIndex]
      } 

      return result
    }
  },

  created() {
    const orderId = this.randomOrderId()
    const itemsCart = JSON.parse(localStorage.getItem('keranjang'))

    if (itemsCart && itemsCart.length > 0) {
      const tableRows = []

      itemsCart.forEach((item) => {
        const row = [item.namaBarang, item.harga, item.jenis, item.namaPenjual]
        tableRows.push(row)
      })

      const documentDefinition = {
        watermark: { text: '© PaneninJualin ©', color: 'green', opacity: 0.3, bold: false, italics: true },
        content: [
          { text: 'Keranjang Belanja', style: 'header' },
          { text: 'Berikut adalah hasil cetak checkout dari keranjang belanja anda.', margin: [0, 40, 0, 0] },
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
          { text: 'Transfer QRIS melalui barcode dibawah.', style: 'textTransfer' },
          { qr: 'PaneninJualin Dummy QRCode', fit: '160', style: 'alignLeft' },
          { text: 'Terima kasih sudah mempercayai platform PaneninJualin, sampai bertemu di pemesanan berikutnya!', alignment: 'center', margin: [0, 40] }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            alignment: 'center',
            margin: [0, 0, 0, 10],
          },
          textTransfer: {
            fontSize: 12,
            alignment: 'left',
            margin: [0, 20, 0, 10],
          },
          alignLeft: {
            alignment: 'left',
          }
        },
      }

      const pdfDocGen = pdfMake.createPdf(documentDefinition)
      pdfDocGen.download(`Keranjang_Belanja_${orderId}.pdf`)
    } else {
      console.log('cek disini kalau localstorage ga kebawa')
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
