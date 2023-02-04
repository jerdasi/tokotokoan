<template>
  <div class="register--page h-[100vh] w-[100vw] flex">
    <div class="form--wrapper h-full w-1/2 p-4 flex justify-center items-center">
      <form class="w-3/4 flex flex-col gap-4 border p-4 rounded-lg">
        <h1 class="text-2xl font-medium text-center">Register Page</h1>
        <div class="form--field">
          <label for="nama_lengkap">Nama Lengkap</label>
          <input type="text" id="nama_lengkap" class="w-full border p-2 rounded-lg" v-model="namaLengkap">
        </div>

        <div class="form--field">
          <label for="username">Username</label>
          <input type="text" id="username" class="w-full border p-2 rounded-lg" v-model="username">
        </div>

        <div class="form--field">
          <label for="password">Password</label>
          <input type="password" id="password" class="w-full border p-2 rounded-lg" v-model="password">
        </div>

        <div class="form--field">
          <label for="password">Jenis Kelamin</label>
          <div class="form--field__input">
            <input type="radio" name="jenis-kelamin" id="" class="mr-1" v-model="jenisKelamin" :value="0">Laki-Laki
          </div>
          <div class="form--field__input">
            <input type="radio" name="jenis-kelamin" id="" class="mr-1" v-model="jenisKelamin" :value="1">Perempuan
          </div>
        </div>

        <div class="form--field">
          <label for="deskripsi">Bio Singkat</label>
          <textarea name="" id="" cols="30" rows="10" class="border rounded-lg w-full p-2"></textarea>
        </div>

        <div class="form--action flex flex-col gap-2 mt-2">
          <button type="submit" class="p-2 w-full border rounded-lg bg-[#03AC0E] text-white hover:border">Register</button>
          <button type="button" class="p-2 w-full border rounded-lg text-[#03AC0E] border border-[#03AC0E]">Login</button>
        </div>
      </form>
    </div>
    <div class="image--wrapper h-full w-1/2">
      <img :src="bannerLogin" alt="" class="w-full h-full object-cover">
    </div>

  </div>
</template>

<script>
import bannerLogin from "@/assets/banner-login.webp";
export default {
  name: "RegisterPage.vue",
  data() {
    return {
      bannerLogin: bannerLogin,
      namaLengkap: "",
      username: "",
      password: "",
      jenisKelamin: 0
    }
  }
}
</script>

<style scoped>

</style>