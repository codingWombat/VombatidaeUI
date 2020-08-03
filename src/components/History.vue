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
        <v-row v-if="this.showList">
          <v-card v-if="history.length != 0">
            <v-container>
              <v-timeline>
                <v-timeline-item v-for="(item, i) in history" :key="i" color="purple accent-4">
                  <template v-slot:opposite>
                    <div class="headline mb-1">{{item.httpMethod}}</div>
                    <span class="overline mb-4" v-text="item.timestamp"></span>
                  </template>
                  <v-card class="mx-auto" outlined>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <div class="overline mb-4">{{item.id}}</div>
                        <div v-if="Object.keys(item.requestBody).length > 0">
                          <div class="overline mb-1">Request:</div>
                          <JsonView :data="item.requestBody"></JsonView>
                        </div>
                        <div v-if="item.queryParams.length > 0">
                          <div class="overline mb-1">Query params</div>
                          <JsonView :data="item.queryParams"></JsonView>
                        </div>
                        <div class="overline mb-1">Response:</div>
                        <JsonView :data="item.responseBody"></JsonView>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-container>
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
      <GoTop bg-color="#aa00ff" />
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import JsonView from "./JsonView";
import HomeMenu from "./HomeMenu";
import GoTop from "@inotom/vue-go-top";

export default {
  components: { JsonView, HomeMenu, GoTop },
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
      showList: false,
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
          .then(() => (this.showList = true))
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