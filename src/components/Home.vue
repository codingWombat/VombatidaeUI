<template>
  <div>
    <img alt="codingWombat logo" src="../assets/codingWombat.jpg" />
    <p>Burrow Guid: {{ guid }}</p>
    <button @click="getBurrow">Get Burrow</button>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      guid: "00000000-0000-0000-0000-000000000000",
    };
  },
  methods: {
    getBurrow() {
      axios
        .get("https://localhost:5001/Vombatidae/Burrow")
        .then((response) => (this.guid = response.data.id));
    },
  },
};
</script>