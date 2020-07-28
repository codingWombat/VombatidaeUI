<template>
  <v-navigation-drawer permanent app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Vombatidae</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" router :to="item.route">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import "@fortawesome/fontawesome-free/css/all.css";
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "fas fa-home", route: "/" },
        { title: "History", icon: "fas fa-history", route: "/history" },
        {
          title: "Prepare Messages",
          icon: "fas fa-envelope-open-text",
          route: "/preparemessage",
        },
      ],
    };
  },
};
</script>