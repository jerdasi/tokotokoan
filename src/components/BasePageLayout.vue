<template>
  <div>
    <BaseNavbar />
    <router-view></router-view>
  </div>

</template>

<script>
import BaseNavbar from "@/App.vue";
export default {
  name: "BasePageLayout",
  components: {BaseNavbar}
}
</script>

<style scoped>

</style>