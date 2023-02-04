<template>
  <nav class="h-auto md:h-16 block md:flex md:items-center md:justify-between border-0 md:border-b p-0 md:p-8">
    <div class="p-2 flex items-center justify-between md:w-5/6 navbar__pointer border-b md:border-none">
      <router-link to="/">
        <img :src="logo" class="navbar-logo">
      </router-link>
      <div class="navbar__pointer--tools flex gap-4 md:hidden">
        <font-awesome-icon icon="cart-shopping" size="lg" />
        <font-awesome-icon icon="bars" size="lg" @click="toggleNavbar"/>
      </div>

    </div>
    <ul class="navbar__container--mobile md:hidden" v-if="showNavbar">
      <li>
        <router-link to="/product">Product</router-link>
      </li>
      <li>
        <router-link to="/profil">Profil</router-link>
      </li>
    </ul>

    <ul class="navbar__container hidden md:flex justify-end gap-4 md:w-1/6">
      <li class="p-2 hover:text-[#03AC0E] rounded text-xl cursor-pointer">
        <router-link to="/product">Product</router-link>
      </li>
      <li class="p-2 hover:text-[#03AC0E] rounded text-xl cursor-pointer">
        <router-link to="/cart"><font-awesome-icon icon="cart-shopping" size="lg" /></router-link>
      </li>
      <li class="p-2 hover:text-[#03AC0E] rounded text-xl cursor-pointer">
        <router-link to="/profil">Profil</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import Logo from "@/assets/tokopedia-logo.png"
export default {
  name: "BaseNavbar.vue",
  data() {
    return {
      logo: Logo,
      showNavbar: false
    }
  },
  methods: {
    toggleNavbar: function() {
      this.showNavbar = !this.showNavbar
    }
  }
}
</script>

<style scoped>
.navbar-logo {
  width: auto;
  height: 48px;
}
</style>