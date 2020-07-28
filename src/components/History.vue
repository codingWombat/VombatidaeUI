<template>
  <div>
    <p>Load history for:</p>
    <input v-model="guid" style="text" />
    <button @click="getHistory">Load</button>


      <HistoryEntry v-for="value in this.history" :key="value.id"/>

  </div>
</template>

<script>
import axios from "axios";
import HistoryEntry from "./HistoryEntry"
export default {
  components: {
    HistoryEntry
  },
  data() {
    return {
      guid: "",
      history: Object,
    };
  },
  methods: {
    getHistory() {
      if (this.guid !== "") {
        console.log(this.guid);
        let tmp = "https://localhost:5001/Vombatidae/history/" + this.guid;
        axios
          .get(tmp)
          .then((response) => (this.history = response.data));
        console.log(this.history.Id);
        console.log(this.guid);
      }
    },
  },
};
</script>