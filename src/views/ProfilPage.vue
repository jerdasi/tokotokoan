<template>
  <div class="profil--page p-4 w-full flex gap-4">
    <div class="container--profil basis-1/4 bg-white">
      <img :src="profile" alt="" class="w-full h-96 object-cover">
    </div>
    <div class="container--profil basis-3/4">
      <div class="container--profile__description flex justify-between">
        <h1 class="text-3xl font-medium">Profil</h1>
        <button @click="showSubmitButton = !showSubmitButton"><font-awesome-icon icon="pen-to-square" size="xl"/> </button>
      </div>
      <div class="container--profile__wrapper mt-2 rounded-lg border h-fit">
        <form class="w-3/4 flex flex-col gap-4 p-4 rounded-lg">
          <div class="form--field">
            <label for="nama_lengkap">Nama Lengkap</label>
            <input type="text" id="nama_lengkap" class="w-full border p-2 rounded-lg" v-model="namaLengkap">
          </div>

          <div class="form--field">
            <label for="username">Email</label>
            <input type="text" id="username" class="w-full border p-2 rounded-lg" v-model="email">
          </div>

          <div class="form--field">
            <label for="password">Jenis Kelamin</label>
            <div class="form--field__input">
              <input type="radio" name="jenis-kelamin" id="" class="mr-1" v-model="jenisKelamin" value="L">Laki-Laki
            </div>
            <div class="form--field__input">
              <input type="radio" name="jenis-kelamin" id="" class="mr-1" v-model="jenisKelamin" value="P">Perempuan
            </div>
          </div>
          
          <div class="form--field">
            <label for="deskripsi">Bio Singkat</label>
            <textarea name="" id="" cols="30" rows="10" class="border rounded-lg w-full p-2" v-model="bio"></textarea>
          </div>

          <div class="form--action flex flex-col gap-2 mt-2" v-if="showSubmitButton">
            <button type="submit" class="p-2 w-full border rounded-lg bg-[#03AC0E] text-white hover:border">Edit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profil.webp"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import AuthenticateApi from "@/api/AuthenticateApi.js";
export default {
  name: "ProfilPage",
  components: {FontAwesomeIcon},
  data() {
    return {
      profile: profile,
      email: "",
      namaLengkap: "",
      jenisKelamin: 0,
      showSubmitButton: false,
      bio: ""
    }
  },
  async mounted() {
    await this.getProfile()
  },
  methods: {
    getProfile: async function() {
      try {
        const profile = JSON.parse(localStorage.getItem('profile'));
        const responseProfileData = await AuthenticateApi.getProfil(profile.email);

        const profileData = responseProfileData.data.data.user;
        this.namaLengkap = profileData.profil.full_name || "";
        this.email = profileData.email;
        this.jenisKelamin = profileData.profil.gender;
        this.bio = profileData.profil.description;
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>