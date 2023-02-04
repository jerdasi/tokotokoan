<template>
  <div class="detail-product__page p-4 flex gap-4">
    <div class="container--product basis-1/2">
      <img :src="profile" alt="" class="w-full h-96 object-cover">
    </div>
    <div class="container--product basis-1/2">
      <div class="container--product__description">
        <h1 class="text-3xl font-medium text-center">Ini Judul</h1>
        <h3 class="text-xl font-thin text-center mt-4">Ini Tipe</h3>
        <p class="text-md font-semibold font-sans text-center mt-4">Rp. <span class="text-[#03AC0E]">Ini Harga</span></p>
      </div>
      <div class="container--product__wrapper mt-2 pt-2 text-justify border-t h-fit">
        <p class="container--product__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate debitis deserunt dignissimos ea facere laudantium, molestiae nihil omnis quidem. Deserunt impedit ipsa maiores reiciendis similique temporibus? Aperiam in, officia?. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate debitis deserunt dignissimos ea facere laudantium, molestiae nihil omnis quidem. Deserunt impedit ipsa maiores reiciendis similique temporibus? Aperiam in, officia?. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate debitis deserunt dignissimos ea facere laudantium, molestiae nihil omnis quidem. Deserunt impedit ipsa maiores reiciendis similique temporibus? Aperiam in, officia?
        </p>

        <input type="number" name="total-product" id="total-product" min="1" class="p-2 px-4 rounded-lg border w-full my-2" v-model="total">
        <button type="submit" class="p-2 w-full border rounded-lg bg-[#03AC0E] text-white hover:border">
          <font-awesome-icon icon="plus" />
          Tambahkan Ke Keranjang
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  name: "DetailProductPage",
  components: {FontAwesomeIcon},
  data() {
    return {
      productId : this.$route.params.id,
      total: 1
    }
  }
}
</script>

<style scoped>

</style>