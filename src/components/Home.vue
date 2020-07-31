<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <HomeMenu :guid="guid"></HomeMenu>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-img
          alt="codingWombat logo"
          src="../assets/codingWombat.jpg"
          max-height="600"
          max-width="400"
        />
      </v-row>
      <v-row align="center" justify="center">
        <v-text-field
          class="shrink"
          style="width:380px"
          v-model="guid"
          label="Get new burrow id:"
          :append-icon="'mdi-server'"
          @click:append="getBurrow()"
        ></v-text-field>
      </v-row>
      <v-row align="center" justify="center" v-if="this.showLink">
        <v-btn @click="copy()">
          <v-icon left>mdi-content-copy</v-icon>Copy api link.
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import axios from "axios";
import HomeMenu from "./HomeMenu";
export default {
  components: { HomeMenu },
  data() {
    return {
      guid: "00000000-0000-0000-0000-000000000000",
      showLink: false,
      link: "https://api.codingwombat.dev:5001/Vombatidae/",
    };
  },
  methods: {
    getBurrow() {
      axios
        .get("https://api.codingwombat.dev:5001/Vombatidae/Burrow")
        .then((response) => (this.guid = response.data.id))
        .then(() => (this.showLink = true));
    },

    copy() {
      let fullLink = this.link + this.guid;
      navigator.clipboard.writeText(fullLink);
    },
  },
};
</script>