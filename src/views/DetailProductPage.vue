<template>
  <div class="detail-product__page p-4">
    {{ productId }}
  </div>
</template>

<script>
export default {
  name: "DetailProductPage",
  data() {
    return {
      productId : this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>