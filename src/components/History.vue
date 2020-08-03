<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <HomeMenu :guid="guid"></HomeMenu>
        </v-col>
      </v-row>
      <v-container>
        <br />
        <br />
        <v-row justify="start">
          <v-text-field
            class="shrink"
            style="width:350px"
            v-model="guid"
            label="Load history for id:"
            :append-outer-icon="'mdi-history'"
            @click:append-outer="getHistory()"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-card class="overflow-hidden" width="100%">
            <v-sheet
              id="scrolling-techniques-3"
              class="overflow-y-auto"
              max-height="700"
              width="100%"
            >
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
            </v-sheet>
          </v-card>
        </v-row>
        <v-row>
          <v-alert
            transition="slide-y-reverse-transition"
            max-width="450"
            min-width="210"
            height="60"
            type="error"
            v-model="showAlert"
            dismissible
          >Error: {{errormessage}}</v-alert>
        </v-row>
      </v-container>
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
      history: Object,
      errormessageString: "Loading history failed with errorcode: ",
      errormessage: "",
      showAlert: false,
    };
  },
  methods: {
    getHistory() {
      if (this.guid !== "") {
        let tmp =
          "https://api.codingwombat.dev:5001/Vombatidae/history/" + this.guid;
        axios
          .get(tmp)
          .then((response) => (this.history = response.data))
          .then(() =>
            this.$router.replace({
              name: "History",
              params: { guid: this.guid },
            })
          )
          .catch((error) => {
            if (error.response) {
              this.showSuccess = false;
              this.showAlert = true;
              this.errormessage =
                this.errormessageString + error.response.status;
            } else {
              this.errormessage = this.errormessageString + error.message;
            }
          });
      }
    },
  },
};
</script>