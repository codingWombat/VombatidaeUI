<template>
  <div>
    <vue-json-pretty :path="'res'" :data="data" @click="handleClick"></vue-json-pretty>
  </div>
</template>
<script>
import VueJsonPretty from "vue-json-pretty";
export default {
  components: {
    VueJsonPretty,
  },
  props: {
    data: Object,
  },
};
</script>