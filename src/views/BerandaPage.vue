<template>
  <div class="beranda__page p-4">
    <div class="jumbotron rounded-lg w-full h-[25vh] md:h-[50vh] bg-black">
      <img :src="banner1" alt="" class="h-full w-full object-cover hover:object-contain rounded-lg">
    </div>

    <div class="info-container flex justify-end mt-4">
      <button class="text-xl hover:text-[#03AC0E]" @click="goToProductPage">Lihat Semua
        <font-awesome-icon class="text-[#03AC0E]" icon="arrow-circle-right"/>
      </button>
    </div>
    <div class="container-product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-4 gap-4">
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"/>
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"/>
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"/>
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"/>
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"/>
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"/>
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"/>
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"/>

    </div>
  </div>
</template>

<script>
import banner1 from "@/assets/banner1.webp";
import BaseCardProduct from "@/components/BaseCardProduct.vue";
import ProductApi from "@/api/ProductApi.js";

export default {
  name: "BerandaPage.vue",
  components: {
    BaseCardProduct
  },
  async mounted() {
    await this.getAllProducts()
  },
  data() {
    return {
      banner1: banner1,
      products: []
    }
  },
  methods: {
    goToProductPage: function () {
      this.$router.push({
        path: '/product'
      })
    },
    getAllProducts: async function () {
      const responseData = await ProductApi.getAllProduct();
      console.log(responseData)
    }
  }
}
</script>

<style scoped>

</style>