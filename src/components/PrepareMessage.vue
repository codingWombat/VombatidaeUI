<template>
  <div>
    <img alt="codingWombat logo" src="../assets/codingWombat.jpg" />
    <v-container fluid>
      <v-text-field v-model="guid" label="Prepare message for id:"></v-text-field>
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
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import VJsoneditor from "v-jsoneditor";
export default {
  components: { VJsoneditor },
  data() {
    return {
      guid: "00000000-0000-0000-0000-000000000000",
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