<template>
  <div>
    <v-app-bar absolute color="purple accent-4" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Vombatidae</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn @click="goHome()" icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn @click="goHistory()" icon>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn @click="goPrepare()" icon>
        <v-icon>mdi-message-draw</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="purple--text text--accent-4">
          <v-list-item @click="goHome()">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goHistory()">
            <v-list-item-icon>
              <v-icon>mdi-history</v-icon>
            </v-list-item-icon>
            <v-list-item-title>History</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goPrepare()">
            <v-list-item-icon>
              <v-icon>mdi-message-draw</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Prepare Messages</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  props: {
    guid: String,
  },

  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    goHistory() {
      this.$router.push({
        name: "History",
        params: { guid: this.guid },
      });
    },
    goPrepare() {
      this.$router.push({
        name: "PrepareMessage",
        params: { guid: this.guid },
      });
    },
    goHome() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>