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
        <v-slide-item v-for="n in 15" :key="n" v-slot:default="{}">
          <v-scale-transition>
            <v-card
              :elevation="5"
              class="mx-8 my-9 rounded-xl menu__card"
              height="180"
              width="220"
              :ripple="false"
              active-class="false"
            >
              <v-btn
                class="menu__card__icon--add"
                elevation="7"
                fab
                dark
                medium
                color="rgb(167,91,59)"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-img
                class="menu__card__image"
                src="/img/menu__item__card--capuchino.png"
                width="110px"
                height="110px"
                contain
                elevation="4"
              ></v-img>
              <v-card-title class="pt-3 pb-3">
                <v-icon color="rgb(214,173,154)">mdi-heart</v-icon>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-card-title class="pb-2 pt-0 headline font-weight-bold">
                    50.000 Đ
                  </v-card-title>
                </v-row>
                <div class="my-0 pb-1 pl-1 subtitle-1 font-weight-bold">
                  Bạc sỉu
                </div>
                <div
                  class="my-0 pl-1 menu__text-description menu__card__textfield"
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

      <v-card-text class="px-8">
        <p class="subtitle-1 font-weight-bold">Phổ biến</p>
        <v-row>
          <v-col cols="12" sm="6" md="6" lg="4" v-for="i in 12" :key="i">
            <v-card class="rounded-xl" elevation="5">
              <v-btn
                class="menu__list__icon--add"
                elevation="7"
                fab
                dark
                small
                color="rgb(167,91,59)"
              >
                <v-icon class="menu__card__icon--size">mdi-plus</v-icon>
              </v-btn>
              <v-img
                class="menu__list_image"
                src="/img/menu__item--cafe_phin.png"
                width="85px"
                max-height="100px"
              >
              </v-img
              ><v-card-title
                class="subtitle-1 pl-14 menu-list--padding menu__list__itemname pb-1 pt-4 font-weight-bold"
              >
                Cà phê phin
              </v-card-title>

              <v-card-text class="pl-14">
                <div class="menu__text-description menu-text--width70">
                  hương vị đậm đà trọn vị, một ly cà phê thơm ngon đúng điệu
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>
<style>
.menu__nav--small {
  min-width: 90px;
}
.menu__card:focus:before {
  opacity: 0 !important;
}
.menu-list--padding {
  padding-left: 28px !important ;
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
.menu__text-description {
  font-size: 12px;
  font-weight: normal;
  line-height: 1rem;
}
.menu__card__textfield {
  height: 48px;
}
.menu__card__icon--add {
  position: absolute;
  left: 188px;
  top: 140px;
  /* background-color: rgb(214, 173, 154); */
  border-radius: 15px;
}
.menu__list__icon--add {
  position: absolute;
  right: -10px;
  top: 58px;
  /* background-color: rgb(214, 173, 154); */
  border-radius: 8px;
}
.menu__card__image {
  position: absolute;
  left: 135px;
  top: -25px;
}
.menu__list_image {
  position: absolute;
  left: -34px;
  top: -16px;
}
.menu__list__itemname {
  line-height: 1.25rem;
  color: rgba(0, 0, 0, 0.6);
}
.menu-text--width70 {
  width: 70%;
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
