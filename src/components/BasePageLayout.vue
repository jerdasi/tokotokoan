<template>
  <div>
    <BaseNavbar />
    <router-view></router-view>
  </div>

</template>

<script>
import BaseNavbar from "@/components/BaseNavbar.vue";
export default {
  name: "BasePageLayout",
  components: {BaseNavbar}
}
</script>

<style scoped>

</style>