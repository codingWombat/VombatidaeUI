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
          style="width:350px"
          v-model="guid"
          label="Get new burrow id:"
          :append-outer-icon="'mdi-radioactive'"
          @click:append-outer="getBurrow()"
        ></v-text-field>
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
    };
  },
  methods: {
    getBurrow() {
      axios
        .get("https://api.codingwombat.dev:5001/Vombatidae/Burrow")
        .then((response) => (this.guid = response.data.id));
    },
  },
};
</script>