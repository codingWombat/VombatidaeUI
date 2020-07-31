<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-help</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">How to use Vomabtidae</span>
      </v-card-title>
      <v-card-text class="text--primary">
        <div>1. Create a new endpoint (burrow) via the home menu, the guid shown identifies you endpoint.</div>
        <div>2. Use the endpoints via https://api.codingwombat.dev:5001/Vomabtidae/yourEndpointGuid You can use the copy endpoint button to get the complete link.</div>
        <div>3. Use the prepare message menu to configure responses for the REST verbs GET, POST, PUT, DELETE.</div>
        <div>4. Use the history function to query all requests / responses. (Messages and endpoints are removed after one day of inactivity)</div>
        <br />
      </v-card-text>
      <v-card-actions>
        <v-btn text href="https://github.com/codingWombat/Vombatidae">Find more info on github.</v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>