<template>
  <div>
    <p>Time: {{entry.Timestamp}} Mehtod: {{entry.HttpMethod}} </p>
  </div>
</template>

<script>
export default {
  name: "HistoryEntry",
  props: {
    entry: Object,
  },
};
</script>
<style>
</style>