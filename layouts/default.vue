<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      height="180"
      color="rgb(167,91,59)"
      hide-on-scroll
      flat
      app
      class="appbar--top custom__rounded-bl"
    >
      <v-row>
        <v-btn color="rgb(255,255,255)" icon @click.stop="drawer = !drawer">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn color="rgb(255,255,255)" icon>
          <v-img
            class="nav__icon--small"
            src="/img/nav__icon--cafe.png"
          ></v-img>
        </v-btn>
        <v-spacer />
        <v-btn
          color="rgb(255,255,255)"
          icon
          @click.stop="$store.dispatch('toggleRightDrawer')"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-img
          src="/img/nav__logo.png"
          height="100px"
          contain
          aspect-ratio="1.5"
          class="nav__logoimg"
        ></v-img>
      </v-row>
      <v-row>
        <div class="appbar__searchfield">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            rounded
            elevation="2"
            dense
            label="Tìm kiếm trên menu cửa hàng"
            solo
            color="white"
            hide-details
            class="nav__search"
          ></v-text-field>
        </div>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container fluid class="extended-pos__container">
        <nuxt />
      </v-container>
    </v-main>

    <menuItemDrawer />

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<style>
.appbar--top .v-toolbar__content {
  display: block !important ;
  padding: 12px 16px 16px 16px;
}
.v-app-bar--hide-shadow {
  transform: translateY(-200px) !important;
}
.nav__logoimg .v-image__image {
  /* top: 16px !important; */
  /* left: 12px !important; */
  width: 100% !important;
  /* height: 65% !important; */
}
.custom__rounded-bl {
  border-bottom-left-radius: 50px !important;
}
.extended-pos__container {
  margin-top: 16px;
}
</style>
<style scoped>
.nav__icon--small {
  width: 48px;
  height: 48px;
}
.text--logo {
  color: white;
  margin-top: 28px;
  margin-bottom: 32px;
  font-size: 28px;
  margin-left: 20px;
}
.appbar__searchfield {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}
.nav__search {
  font-family: 'Charm', cursive !important;
}
</style>
<script>
import menuItemDrawer from '@/components/layout/menuItemDrawer'
export default {
  components: { menuItemDrawer },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,

      title: 'Vuetify.js',
    }
  },
}
</script>
