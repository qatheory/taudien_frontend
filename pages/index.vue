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
          <v-scale-transition>
            <v-card
              :elevation="3"
              class="mx-8 my-9 rounded-xl menu__card"
              height="180"
              width="220"
              @click="toggle"
              :ripple="false"
              active-class="false"
            >
              <v-btn
                class="menu__card__icon--add"
                elevation="5"
                fab
                dark
                medium
                color="rgb(214,173,154)"
              >
                <v-icon class="menu__card__icon--size">mdi-plus</v-icon>
              </v-btn>
              <v-card-title class="pt-3 pb-3">
                <v-icon color="rgb(214,173,154)">mdi-heart</v-icon>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-card-title class="pb-0 pt-2 headline font-weight-bold">
                    50.000 Đ
                  </v-card-title>
                </v-row>
                <div class="my-0 pl-1 subtitle-1 font-weight-bold">Bạc sỉu</div>
                <div
                  class="my-0 pl-1 menu__card__text-description"
                  style="width: 90%"
                >
                  Sự hòa quyện của vị ngậy béo từ sữa kết hợp với hương thơm và
                  vị đắng nhẹ từ cafe
                </div>
              </v-card-text>
              <!-- <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row> -->
            </v-card>
          </v-scale-transition>
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
/* .menu__card__icon--size {
  font-size: 52px !important;
} */
.menu__card:focus:before {
  opacity: 0 !important;
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
.menu__card__text-description {
  font-size: 12px;
  font-weight: normal;
  line-height: 1rem;
}
.menu__card__icon--add {
  position: absolute;
  left: 192px;
  top: 146px;
  /* background-color: rgb(214, 173, 154); */
  border-radius: 15px;
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
