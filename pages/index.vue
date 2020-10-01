<template>
  <v-row justify="center" align="center">
    <v-card elevation="0">
      <!-- <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title> -->
      <v-tabs
        v-model="currentTab"
        background-color="transparent"
        hide-slider
        centered
        color="rgb(167,91,59)"
      >
        <v-tab class="menu__nav--small" v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-slide-group
        v-model="model"
        show-arrows="desktop"
        mobile-breakpoint="550"
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'white'"
            :elevation="3"
            class="mx-8 my-4 rounded-xl"
            height="180"
            width="220"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <v-card-text>
        <p>
          Vuetify is a progressive Material Design component framework for
          Vue.js. It was designed to empower developers to create amazing
          applications.
        </p>
        <p>
          For more information on Vuetify, check out the
          <a
            href="https://vuetifyjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation </a
          >.
        </p>
        <p>
          If you have questions, please join the official
          <a
            href="https://chat.vuetifyjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="chat"
          >
            discord </a
          >.
        </p>
        <p>
          Find a bug? Report it on the github
          <a
            href="https://github.com/vuetifyjs/vuetify/issues"
            target="_blank"
            rel="noopener noreferrer"
            title="contribute"
          >
            issue board </a
          >.
        </p>
        <p>
          Thank you for developing with Vuetify and I look forward to bringing
          more exciting features in the future.
        </p>
        <div class="text-xs-right">
          <em><small>&mdash; John Leider</small></em>
        </div>
        <hr class="my-3" />
        <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">
          Nuxt Documentation
        </a>
        <br />
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuxt GitHub
        </a>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>
<style >
.menu__nav--small {
  min-width: 90px;
}
</style>
<style scoped>
.nowrap {
  flex-wrap: nowrap !important;
}
.menu_card_horizontal {
  overflow-x: auto;
}
.menu_card_horizontal::-webkit-scrollbar {
  display: none;
}
</style>
<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  data() {
    return {
      currentTab: null,
      items: ['Cafe', 'Trà', 'Rượu', 'Đồ ăn'],
      model: null,
    }
  },
}
</script>
