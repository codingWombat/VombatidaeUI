<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <SidebarVuetify />
    <v-main>
      <v-container>
        <v-row justify="center">
          <router-view />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarVuetify from "./components/SidebarVuetify";
export default {
  name: "App",

  components: {
    SidebarVuetify,
  },

  data: () => ({
    //
  }),
};
</script>
