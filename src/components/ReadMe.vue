<template>

    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-help</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">How to Use vomabtidae</span>
        </v-card-title>
        <v-card-text>Foo:Bar</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
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