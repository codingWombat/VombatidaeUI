<template>
  <div>
    <img alt="codingWombat logo" src="../assets/codingWombat.jpg" />
    <v-container fluid>
      <v-row>
        <v-text-field
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
export default {
  data() {
    return {
      guid: "00000000-0000-0000-0000-000000000000"
    };
  },
  methods: {
    getBurrow() {
      axios
        .get("https://localhost:5001/Vombatidae/Burrow")
        .then(response => (this.guid = response.data.id))
        .then(() => navigator.clipboard.writeText(this.guid));
    }
  }
};
</script>