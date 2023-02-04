<template>
  <div class="cart--page p-4 flex gap-4">
    <div class="container--product basis-2/3">
      <h1 class="text-3xl font-bold mb-2">Keranjang Anda</h1>
      <div class="container--cart__wrapper flex flex-col gap-2">
        <div class="card-list border rounded-lg p-4">
          <h1 class="text-lg font-semibold">Ini Nama Barang</h1>
          <h3 class="text-sm">Rp. Harga</h3>
          <div class="flex justify-end gap-2">
            <input type="number" name="" id="" class="border p-2 rounded-lg">
            <button class="rounded-lg p-2 bg-[#03AC0E] text-white hover:border">Checkout</button>
          </div>
        </div>
        <div class="card-list border rounded-lg p-4">
          <h1 class="text-lg font-semibold">Ini Nama Barang</h1>
          <h3 class="text-sm">Rp. Harga</h3>
          <div class="flex justify-end gap-2">
            <input type="number" name="" id="" class="border p-2 rounded-lg">
            <button class="rounded-lg p-2 bg-[#03AC0E] text-white hover:border">Checkout</button>
          </div>
        </div>
        <div class="card-list border rounded-lg p-4">
          <h1 class="text-lg font-semibold">Ini Nama Barang</h1>
          <h3 class="text-sm">Rp. Harga</h3>
          <div class="flex justify-end gap-2">
            <input type="number" name="" id="" class="border p-2 rounded-lg">
            <button class="rounded-lg p-2 bg-[#03AC0E] text-white hover:border">Checkout</button>
          </div>
        </div>
        <div class="card-list border rounded-lg p-4">
          <h1 class="text-lg font-semibold">Ini Nama Barang</h1>
          <h3 class="text-sm">Rp. Harga</h3>
          <div class="flex justify-end gap-2">
            <input type="number" name="" id="" class="border p-2 rounded-lg">
            <button class="rounded-lg p-2 bg-[#03AC0E] text-white hover:border">Checkout</button>
          </div>
        </div>
        <div class="card-list border rounded-lg p-4">
          <h1 class="text-lg font-semibold">Ini Nama Barang</h1>
          <h3 class="text-sm">Rp. Harga</h3>
          <div class="flex justify-end gap-2">
            <input type="number" name="" id="" class="border p-2 rounded-lg">
            <button class="rounded-lg p-2 bg-[#03AC0E] text-white hover:border">Checkout</button>
          </div>
        </div>
        <div class="card-list border rounded-lg p-4">
          <h1 class="text-lg font-semibold">Ini Nama Barang</h1>
          <h3 class="text-sm">Rp. Harga</h3>
          <div class="flex justify-end gap-2">
            <input type="number" name="" id="" class="border p-2 rounded-lg">
            <button class="rounded-lg p-2 bg-[#03AC0E] text-white hover:border">Checkout</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container--product basis-1/3">
      <h2 class="text-xl font-semibold">Checkout</h2>
      <div class="container--checkout__wrapper flex flex-col gap-2">
        <div class="card-list border rounded-lg p-2 relative">
          <h1 class="text-lg font-semibold">Ini Nama Barang x Jumlah Barang</h1>
          <h3 class="text-sm">Rp. Total</h3>
          <div class="flex justify-end gap-2 absolute top-0 right-0">
            <button class="rounded-b-lg p-2 bg-red-600 text-white hover:border"><font-awesome-icon icon="trash" /></button>
          </div>
        </div>
        <div class="card-list border rounded-lg p-2 relative">
          <h1 class="text-lg font-semibold">Ini Nama Barang x Jumlah Barang</h1>
          <h3 class="text-sm">Rp. Total</h3>
          <div class="flex justify-end gap-2 absolute top-0 right-0">
            <button class="rounded-b-lg p-2 bg-red-600 text-white hover:border"><font-awesome-icon icon="trash" /></button>
          </div>
        </div>
        <div class="card-list border rounded-lg p-2 relative">
          <h1 class="text-lg font-semibold">Ini Nama Barang x Jumlah Barang</h1>
          <h3 class="text-sm">Rp. Total</h3>
          <div class="flex justify-end gap-2 absolute top-0 right-0">
            <button class="rounded-b-lg p-2 bg-red-600 text-white hover:border"><font-awesome-icon icon="trash" /></button>
          </div>
        </div>


      </div>
      <div class="contaner--checkout__detail grid grid-cols-2 my-2 border-t pt-2">
        <p>Total</p>
        <p class="font-bold">Total</p>
      </div>
      <button type="button" class="p-2 w-full border rounded-lg bg-[#03AC0E] text-white hover:border">Bayar</button>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  name: "CartPage",
  components: {FontAwesomeIcon}
}
</script>

<style scoped>

</style>