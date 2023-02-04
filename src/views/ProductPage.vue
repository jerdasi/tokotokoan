<template>
  <div class="product--page p-4">
    <div class="product--page__filter">
      <h3>Cari Sesuatu</h3>
      <div class="filter--container w-1/3 grid grid-cols-1 gap-2">
        <select name="tipe-produk" id="tipe-produk" class="p-2 border rounded-lg">
          <option value="">Semua Tipe</option>
          <option value="">Elektonik</option>
        </select>
        <button class="bg-[#03AC0E] text-white hover:border p-2 rounded-lg">Filter</button>
      </div>
    </div>
    <div class="info-container flex justify-end mt-4 border-t pt-4">
      Menampilkan <span class="text-[#03AC0E] mx-1">10</span>dari <span class="text-[#03AC0E] mx-1">100</span> produk
    </div>
    <div class="container-product grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-4 gap-4">
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"
      />
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"
      />
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"
      />
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"
      />
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"
      />
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"
      />
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"
      />
      <base-card-product
          description="Barang mahal ini harus disimpan dengan baik agar tidak hilang dan merugikan siapapun"
          price="200000"
          title="Tempat Penyimpanan Emas dan Kalung"
      />

    </div>
  </div>
</template>

<script>
import BaseCardProduct from "@/components/BaseCardProduct.vue";
export default {
  name: "ProductPage",
  components: {
    BaseCardProduct
  },

}
</script>

<style scoped>

</style>