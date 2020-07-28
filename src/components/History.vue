<template>
  <div>
    <img alt="codingWombat logo" src="../assets/codingWombat.jpg" />
    <v-container>
      <v-row justify="start">
        <v-text-field
          v-model="guid"
          label="Load history for id:"
          :append-outer-icon="'mdi-radioactive'"
          @click:append-outer="getHistory()"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-col v-for="(item, i) in history" :key="i" cols="12">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{item.id}}</div>
                <v-list-item-title class="headline mb-1">{{item.httpMethod}}</v-list-item-title>
                <v-list-item-subtitle>{{item.timestamp}}</v-list-item-subtitle>
                <div class="overline mb-1">Request:</div>
                <JsonView :data="item.requestBody"></JsonView>
                <div class="overline mb-1">Response:</div>
                <JsonView :data="item.responseBody"></JsonView>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import JsonView from "./JsonView";

export default {
  components: { JsonView },
  data() {
    return {
      guid: "00000000-0000-0000-0000-000000000000",
      history: Object,
    };
  },
  methods: {
    getHistory() {
      if (this.guid !== "") {
        console.log(this.guid);
        let tmp = "https://localhost:5001/Vombatidae/history/" + this.guid;
        axios.get(tmp).then((response) => (this.history = response.data));
        console.log(this.history.Id);
        console.log(this.guid);
      }
    },
  },
};
</script>