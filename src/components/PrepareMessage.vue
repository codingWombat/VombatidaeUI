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
              label="Prepare message for id:"
              class="shrink"
              style="width:350px"
            ></v-text-field>
            <v-select :items="methods" label="Request type" solo v-model="method"></v-select>
            <v-select :items="returncodes" label="Return code" solo v-model="returncode"></v-select>
            <v-jsoneditor
              v-model="json"
              :options="{ mode: 'code' }"
              :plus="false"
              height="400px"
              @error="onError"
            ></v-jsoneditor>
            <br />
            <v-btn depressed @click="sendRequest()">Prepare message</v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import VJsoneditor from "v-jsoneditor";
import HomeMenu from "./HomeMenu";
export default {
  components: { VJsoneditor, HomeMenu },
  data() {
    return {
      guid:
        this.$route.params.guid == ":guid"
          ? "00000000-0000-0000-0000-000000000000"
          : this.$route.params.guid,
      json: "",
      method: "GET",
      methods: ["GET", "POST", "PUT", "DELETE"],
      returncode: 200,
      returncodes: [200, 202, 401, 403, 404, 500],
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
      axios.put(tmp, {
        StatusCode: this.returncode,
        ResponseMessage: this.json,
      });
    },
  },
};
</script>