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
            <v-text-field v-model="path" label="Path (Optional)" prefix="/" class="shrink"></v-text-field>
            <v-select :items="returncodes" label="Return code" solo v-model="returncode"></v-select>
            <v-jsoneditor
              v-model="json"
              :options="{ mode: 'code' }"
              :plus="false"
              height="400px"
              @error="onError"
            ></v-jsoneditor>
            <br />
            <v-container class="pa-0">
              <v-row>
                <v-btn depressed @click="sendRequest()">Prepare message</v-btn>
                <v-spacer />
                <v-alert
                  transition="slide-y-reverse-transition"
                  max-width="450"
                  min-width="210"
                  max-height="75"
                  type="success"
                  v-model="showSuccess"
                  dismissible
                >{{successmessage}}</v-alert>
                <v-alert
                  transition="slide-y-reverse-transition"
                  max-width="450"
                  min-width="210"
                  max-height="75"
                  type="error"
                  v-model="showAlert"
                  dismissible
                >Error: {{errormessage}}</v-alert>
              </v-row>
            </v-container>
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
      path: "",
      guid:
        this.$route.params.guid == ":guid"
          ? "00000000-0000-0000-0000-000000000000"
          : this.$route.params.guid,
      json: "",
      method: "GET",
      methods: ["GET", "POST", "PUT", "DELETE"],
      returncode: 200,
      returncodes: [200, 202, 401, 403, 404, 500],
      showAlert: false,
      showSuccess: false,
      successmessage: "Message prepared successfully!",
      errormessageString: "Message preparation failed with errorcode: ",
      errormessage: "",
    };
  },
  methods: {
    onError() {
      console.log("error");
    },
    sendRequest() {
      let tmp =
        process.env.VUE_APP_BASE_URL +
        "/Vombatidae/Feed/" +
        this.guid +
        "/" +
        this.path;
      axios
        .put(
          tmp,
          {
            StatusCode: this.returncode,
            ResponseMessage: this.json,
          },
          {
            params: {
              method: this.method,
            },
          }
        )
        .then(() => {
          this.$router.replace({
            name: "PrepareNewMessage",
            params: { guid: this.guid },
          });
          this.showSuccess = true;
          this.showAlert = false;
        })
        .catch((error) => {
          if (error.response) {
            this.showSuccess = false;
            this.showAlert = true;
            this.errormessage = this.errormessageString + error.response.status;
          } else {
            this.errormessage = this.errormessageString + error.message;
          }
        });
    },
  },
};
</script>