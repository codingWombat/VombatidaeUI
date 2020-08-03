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

      <v-btn @click="goLoadMessage()" icon>
        <v-icon>mdi-message-text</v-icon>
      </v-btn>

      <ReadMe :dialog="showDialog"></ReadMe>
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
            <v-list-item-title>Prepare messages</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goLoadMessage()">
            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Load stored messages</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
import ReadMe from "./ReadMe";
export default {
  components: { ReadMe },

  props: {
    guid: String,
  },

  data() {
    return {
      drawer: false,
      showDialog: false,
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
        name: "PrepareNewMessage",
        params: { guid: this.guid },
      });
    },
    goHome() {
      this.$router.push({
        name: "Home",
      });
    },
    goLoadMessage() {
      this.$router.push({
        name: "LoadStoredMessage",
        params: { guid: this.guid },
      });
    },
  },
};
</script>