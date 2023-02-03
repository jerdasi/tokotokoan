<template>
  <div class="beranda__page p-8">
    <div class="jumbotron rounded-lg w-full h-[50vh] bg-black">
      <img :src="banner1" alt="" class="h-full w-full object-cover hover:object-contain">
    </div>

    <div class="container-product grid grid-cols-4 mt-4 gap-4">
      <div class="base-card h-96 w-full rounded-lg border">
        <div class="base-card__image bg-white h-3/4 rounded-lg">
        </div>
        <div class="base-card__description p-2 h-1/4">
          <h3 class="text-md">Ini Nama Barang</h3>
          <div class="h-full overflow-hidden">
            <p class="text-clip overflow-hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cumque eum itaque provident quia quisquam reiciendis similique suscipit vero voluptates. A eius, fugiat id minima nobis porro quidem sapiente velit.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner1 from "@/assets/banner1.webp";
export default {
  name: "BerandaPage.vue",
  data() {
    return {
      banner1: banner1
    }
  }
}
</script>

<style scoped>

</style>