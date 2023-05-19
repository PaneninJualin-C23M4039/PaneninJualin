<template>
  <v-app>

    <v-dialog v-model="dialogLogin" max-width="600px"> 
      <v-card color="green" class="px-3 py-3">
        <v-card-title>
          <v-layout align-center justify-center> 
            <span class="green white--text px-5" style="font-weight: 700; border-radius: 3px;">Masuk ke Dashboard</span>
          </v-layout>
        </v-card-title>
        <v-divider color="white"></v-divider>
        <v-card-text class="mt-6">
          <v-row>
            <v-col cols="12">
              <v-text-field outlined single-line filled background-color="white" color="white" prepend-icon="mdi-email" v-model="email" label="example@dicoding.org" required></v-text-field>
              <v-text-field outlined single-line filled background-color="white" color="white" prepend-icon="mdi-key" type="password" v-model="email" label="example@dicoding.org" required></v-text-field>
              <span class="white--text">Belum memiliki akun?</span>
              <a href="/register"><span class="white--text" background-color="green darken-2" style="text-decoration: none; font-weight: 700;">Daftar disini!</span></a>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" class="white--text" @click="dialogLogin = false">Close</v-btn>
          <v-btn color="primary darken-1" class="white--text">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-toolbar max-height="64" class="green darken-1">
      <v-toolbar-title style="padding: 5px; color: white; font-weight: 600;">PaneninJualin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <template v-for="(item, index) in toolbarList">
          <v-btn color="green darken-1" elevation="0" style="color: white; font-weight: 600;" :to="item.to">{{ item.name }}</v-btn>
        </template>
        <v-btn color="green darken-1" elevation="0" style="color: white; font-weight: 600;" @click="dialogLogin = true">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <Nuxt></Nuxt>

    <v-footer light padless fixed bottom>
      <v-card flat tile class="green darken-2 white--text text-center">
        <v-card-text>
          <v-btn class="white--text" icon href="https://www.github.com" target="_blank">
            <v-icon size="30px">
              mdi-github
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut
          risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
          Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,
          cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider color="white"></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>PaneninJualin</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'LandingLayout',
  data() {
    return {
      toolbarList: [
        { name: 'Home', to: '/' },
        { name: 'About Us', to: '/about' },
        { name: 'Contact', to: '/contact' },
      ],
      dialogLogin: false,
    }
  },
  methods() {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  scroll-behavior: smooth;
  font-family: 'Montserrat', sans-serif !important;
}

</style>