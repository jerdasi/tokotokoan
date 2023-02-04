<template>
  <div class="login--page h-[100vh] w-[100vw] flex">
    <div class="image--wrapper h-full w-1/2">
      <img :src="bannerLogin" alt="" class="w-full h-full object-cover">
    </div>
    <div class="form--wrapper h-full w-1/2 p-4 flex justify-center items-center">

      <form class="w-3/4 flex flex-col gap-4 border p-4 rounded-lg" @submit.prevent="onSubmit">
        <h1 class="text-2xl font-medium text-center">Login Page</h1>
        <div class="form--field">
          <label for="username">Email</label>
          <input type="text" id="username" class="w-full border p-2 rounded-lg" v-model="email">
        </div>

        <div class="form--field">
          <label for="password">Password</label>
          <input type="password" id="password" class="w-full border p-2 rounded-lg" v-model="password">
        </div>

        <div class="form--action flex flex-col gap-2 mt-2">
          <button type="submit" class="p-2 w-full border rounded-lg bg-[#03AC0E] text-white hover:border">Login</button>
          <button type="button" class="p-2 w-full border rounded-lg text-[#03AC0E] border border-[#03AC0E]">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>````

<script>
import bannerLogin from '@/assets/banner-login.webp';
import AuthenticateApi from '@/api/AuthenticateApi.js';

export default {
  name: "LoginPage",
  data() {
    return {
      bannerLogin: bannerLogin,
      email: "",
      password: ""
    }
  },
  methods: {
    onSubmit: async function() {
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        const responseData = await AuthenticateApi.login(formData);
        if(responseData.status === 201) {
          localStorage.setItem('token', responseData.data.token)
          try {
            const responseDataProfile = await AuthenticateApi.getProfil(formData.email);
            // console.log(responseDataProfile.data.data.user)
            localStorage.setItem('profile', JSON.stringify(responseDataProfile.data.data.user))
            this.$router.push({
              name: "Beranda Page"
            })
          } catch (err) {
            alert("Gagal Mengambil User Profile, harap login ulang!");
          }


        } else {
          this.email = "";
          this.password = "";
          alert("Gagal Login");
        }
      } catch (err) {
        alert("Gagal Login")
        console.log(err)
      }

    }
  }
}
</script>

<style scoped>

</style>