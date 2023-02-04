<template>
  <div class="base-card h-96 w-full rounded-lg border border-2 relative group">
    <div class="base-card__image bg-white h-2/4 rounded-lg">
      <img :src="imageTest" alt="" class="w-full h-full object-cover hover:object-contain rounded-lg">
    </div>
    <div class="base-card__description p-2 h-2/4 flex flex-col">
      <div class="description__title flex min-h-1/3">
        <h3 class="text-lg font-bold basis-2/3">{{ title }}</h3>
        <h3 class="text-lg font-bold text-right basis-1/3">Rp. {{ price }}</h3>
      </div>

      <div class="h-full overflow-hidden max-h-2/3">
        <p class="text-clip overflow-hidden">{{ description }}</p>
      </div>

    </div>
    <div
        class="hidden absolute w-full h-full top-0 bg-black/50 rounded-lg items-center justify-center group-hover:flex">
      <div class="flex flex-col">
        <button class="rounded-full">
          <font-awesome-icon class="text-white" icon="cart-shopping" size="4x"></font-awesome-icon>
        </button>
        <button class="bg-[#03AC0E] rounded px-4 py-2 text-white absolute bottom-0 right-0" @click="goToProductDetail"><font-awesome-icon icon="eye" class="mr-1" />Detail</button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDummy from "@/assets/product1.jpg"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "BaseCardProduct",
  components: {FontAwesomeIcon},

  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: String,
  },
  data() {
    return {
      imageTest: ProductDummy
    }
  },
  methods: {
    goToProductDetail: function () {
      this.$router.push({
        name: "Detail Product Page",
        params: {
          id: 1
        }
      })
    }
  }
}
</script>

<style scoped>

</style>