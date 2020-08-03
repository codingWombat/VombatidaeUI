<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col>
          <HomeMenu :guid="guid"></HomeMenu>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-container>
          <br />
          <br />
          <v-col>
            <v-text-field
              v-model="guid"
              label="Show stored message for id:"
              class="shrink"
              style="width:350px"
            ></v-text-field>
            <v-select :items="methods" label="Request type" solo v-model="method"></v-select>
            <JsonView v-if="json != ''" :data="json"></JsonView>
            <br />
            <v-btn depressed @click="sendRequest()">Load prepared message</v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import JsonView from "./JsonView";
import HomeMenu from "./HomeMenu";
export default {
  components: { JsonView, HomeMenu },
  data() {
    return {
      guid:
        this.$route.params.guid == ":guid"
          ? "00000000-0000-0000-0000-000000000000"
          : this.$route.params.guid,
      json: "",
      method: "GET",
      methods: ["GET", "POST", "PUT", "DELETE"],
    };
  },
  methods: {
    onError() {
      console.log("error");
    },
    sendRequest() {
      let tmp =
        "https://api.codingwombat.dev:5001/Vombatidae/Feed/" +
        this.guid +
        "/" +
        this.method;
      axios
        .get(tmp)
        .then((response) => (this.json = response.data))
        .then(() =>
          this.$router.replace({
            name: "LoadStoredMessage",
            params: { guid: this.guid },
          })
        );
    },
  },
};
</script>