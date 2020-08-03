<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <HomeMenu :guid="guid"></HomeMenu>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-img
          alt="codingWombat logo"
          src="../assets/codingWombat.jpg"
          max-height="600"
          max-width="400"
        />
      </v-row>
      <v-row align="center" justify="center">
        <v-text-field
          class="shrink"
          style="width:380px"
          v-model="guid"
          label="Get new burrow id:"
          :append-icon="'mdi-server'"
          @click:append="getBurrow()"
        ></v-text-field>
      </v-row>
      <v-row align="center" justify="center">
        <v-fade-transition>
          <v-btn @click="copy()" v-if="this.showLink">
            <v-icon left>mdi-content-copy</v-icon>Copy api link.
          </v-btn>
        </v-fade-transition>
      </v-row>
      <v-row>
        <v-spacer />
        <br />
        <br />
        <br />
        <br />
        <br />
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
  </div>
</template>


<script>
import axios from "axios";
import HomeMenu from "./HomeMenu";
export default {
  components: { HomeMenu },
  data() {
    return {
      guid: "00000000-0000-0000-0000-000000000000",
      showLink: false,
      link: "https://api.codingwombat.dev:5001/Vombatidae/",
      showAlert: false,
      showSuccess: false,
      successmessage: "Burrow created successfully!",
      errormessageString: "Burrow created failed with errorcode: ",
      errormessage: "",
    };
  },
  methods: {
    getBurrow() {
      axios
        .get("https://api.codingwombat.dev:5001/Vombatidae/Burrow")
        .then((response) => {
          this.guid = response.data.id;
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

    copy() {
      let fullLink = this.link + this.guid;
      navigator.clipboard.writeText(fullLink);
    },
  },
};
</script>