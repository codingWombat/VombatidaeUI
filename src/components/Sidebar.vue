<template>
  <sidebar-menu :menu="menu" />
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  components: {
    SidebarMenu,
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Vombatidae",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Home",
          icon: "fas fa-home",
        },
        {
          href: "/history",
          title: "History",
          icon: "fas fa-history",
        },
        {
          href: "/config",
          title: "Configuration",
          icon: "fas fa-tools",
        },
        {
          href: "/preparemessages",
          title: "Prepare Messages",
          icon: "fas fa-envelope-open-text",
        },
      ],
    };
  },
};
</script>