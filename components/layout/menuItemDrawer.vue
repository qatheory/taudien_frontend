<template>
  <v-navigation-drawer
    class="right-drawer"
    stateless
    v-model="drawer"
    right
    temporary
    fixed
  >
    <v-card
      class="inverted-border-radius--brown"
      flat
      height="35vh"
      color="rgb(167,91,59)"
    >
      <v-btn
        class="menu__item__icon menu__item__icon--back"
        outlined
        icon
        dark
        medium
        color="white"
      >
        <v-icon @click="$store.dispatch('toggleRightDrawer')"
          >mdi-arrow-left</v-icon
        >
      </v-btn>
      <v-btn
        v-for="(itemTag, index) in $store.getters.getItemTags"
        :key="index"
        class="menu__item__icon"
        fab
        dark
        small
        color="white"
        :style="`top:${calculateIconPos(index)}vh;left:2vh`"
      >
        <v-icon :color="itemTag.color">{{ itemTag.icon }}</v-icon>
      </v-btn>
      <v-img
        class="menu__item__image"
        width="85vw"
        height="40vh"
        contain
        src="/img/menu__item__card--capuchino.png"
      >
      </v-img>
    </v-card>
    <v-card
      class="inverted-border-radius--white"
      flat
      height="50vh"
      color="white"
    >
      <v-card color="white" elevation="5" width="auto" class="item-num">
        <v-card-actions class="pa-0">
          <v-btn
            small
            class="pa-0 item-num-button"
            height="40px"
            color="white"
            width="40px"
            text
            @click="decreaseItemNum()"
            ><v-icon color="rgb(167,91,59)">mdi-minus</v-icon></v-btn
          >
          <div class="item-num-value">{{ itemNum }}</div>
          <v-btn
            class="pa-0 item-num-button"
            color="white"
            small
            height="40px"
            width="40px"
            text
            @click="increaseItemNum()"
            ><v-icon color="rgb(167,91,59)">mdi-plus</v-icon></v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card flat class="item-options" light>
        <v-card-title class="item-name font-Sanita">
          Sinh tố lúa mạch
        </v-card-title>
        <div class="d-flex item-options__select">
          <div class="option" @click="changeIce">
            <v-img
              width="20vh"
              height="20vh"
              contain
              :src="`/img/menu__item--ice--${itemIce}.png`"
            >
            </v-img>

            <div v-if="itemIce == 0" class="item_options--text font-Sanita">
              Không đá
            </div>
            <div
              v-else-if="itemIce == 1"
              class="item_options--text font-Sanita"
            >
              Ít đá
            </div>
            <div
              v-else-if="itemIce == 2"
              class="item_options--text font-Sanita"
            >
              Vừa đá
            </div>
            <div
              v-else-if="itemIce == 3"
              class="item_options--text font-Sanita"
            >
              Nhiều đá
            </div>
          </div>
          <div @click="changeSweet">
            <v-img
              width="20vh"
              height="20vh"
              contain
              :src="`/img/menu__item--sweet--${itemSweet}.png`"
            >
            </v-img>
            <div v-if="itemSweet == 0" class="item_options--text font-Sanita">
              Không đường
            </div>
            <div
              v-else-if="itemSweet == 1"
              class="item_options--text font-Sanita"
            >
              Ít đường
            </div>
            <div
              v-else-if="itemSweet == 2"
              class="item_options--text font-Sanita"
            >
              Vừa đường
            </div>
            <div
              v-else-if="itemSweet == 3"
              class="item_options--text font-Sanita"
            >
              Nhiều đường
            </div>
          </div>
        </div>
      </v-card>
    </v-card>
    <v-card
      class="d-flex menu-item-order inverted-border-radius--brown"
      flat
      height="15vh"
      color="rgb(167,91,59)"
      align="center"
      justify="space-between"
    >
      <v-btn
        height=" 12vh"
        class="font-Belotta item-order"
        text
        color="white"
        @click="$store.dispatch('toggleRightDrawer')"
      >
        <v-icon medium left> mdi-arrow-left </v-icon>
        Quay <br />
        lại
      </v-btn>
      <div class="font-Sanita item-price item-name">
        {{ itemPrice }}
      </div>
      <v-btn
        height=" 12vh"
        class="font-Belotta item-order"
        text
        style="color: white"
        >Đặt<br />
        đồ <v-icon medium right> mdi-arrow-right </v-icon></v-btn
      >
    </v-card>
  </v-navigation-drawer>
</template>
<style>
.right-drawer {
  width: 100% !important;
  max-width: 420px !important;
}
/* .menu__item__icon .v-btn--icon {
  height: 20px;
  font-size: 20px;
  width: 20px;
} */
.item-num-button {
  min-width: 30px !important;
}
</style>
<style scoped>
.menu__item__icon {
  position: absolute;
}
.menu__item__icon--back {
  left: 2vh;
  top: 2vh;
}

.menu__item__image {
  position: absolute;
  right: -10vw;
  top: 5vh;
  z-index: 1;
}
.inverted-border-radius--brown::before {
  content: '';
  position: absolute;

  background-color: transparent;
  top: -15vh;
  left: 0;
  height: 15vh;
  width: 7.5vh;
  border-bottom-left-radius: 7.5vh;
  box-shadow: 0 7.5vh 0 0 rgb(167, 91, 59); /* This is where the magic happens! */
}
.inverted-border-radius--white::before {
  content: '';
  position: absolute;

  background-color: transparent;
  top: -15vh;
  height: 15vh;
  width: 7.5vh;
  border-bottom-left-radius: 7.5vh;
  box-shadow: 0 7.5vh 0 0 rgb(255, 255, 255); /* This is where the magic happens! */
}
.item-num {
  z-index: 2;
  border-radius: 10px !important;
  position: absolute;
  left: 2vw;
  top: 2.5vh;
}
.item-price {
  color: rgba(255, 255, 255, 0.87) !important;
}
.item-num-value {
  font-size: 24px;
  color: rgb(167, 91, 59);
  padding: 0 10px;
}
.item-order {
  font-size: 24px;
}
.item-name {
  font-size: 36px;
}
.item-options {
  top: calc(3.5vh + 40px);
}
.font-Sanita {
  font-family: 'Sansita Swashed', cursive;
}
.font-Belotta {
  font-family: 'Bellota', cursive;
}
.menu-item-order {
  justify-content: center;
  align-items: center;
}
.item_options--text {
  text-align: center;
  font-size: 20px;
}
.item-options__select {
  justify-content: center;
  padding: 2vh 2vw;
}
.option {
  padding: 0 12px;
}
</style>
<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import store from '~/store/index.js'
export default {
  name: 'menuItemDrawer',
  data() {
    return {
      itemNum: 1,
      itemIce: 2,
      itemSweet: 2,
    }
  },
  computed: {
    itemPrice() {
      return this.itemNum * 50000
    },
    drawer: {
      get() {
        return this.$store.state.rightDrawer
      },
      set(val) {
        this.$store.commit('setRightDrawer', val)
      },
    },
  },
  methods: {
    calculateIconPos(num) {
      return 2 + 7 * (num + 1)
    },
    increaseItemNum() {
      this.itemNum += 1
    },
    decreaseItemNum() {
      this.itemNum -= 1
      if (this.itemNum < 1) {
        this.itemNum = 1
      }
    },
    changeIce() {
      this.itemIce++
      if (this.itemIce > 3) {
        this.itemIce = 0
      }
    },
    changeSweet() {
      this.itemSweet++
      if (this.itemSweet > 3) {
        this.itemSweet = 0
      }
    },
  },
}
</script>
