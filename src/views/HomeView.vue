<template>
  <div class="bg-white text-gray-800 font-inter">
    <!-- Navbar -->
    <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div class="text-xl font-bold text-gray-900">Villaku</div>
        <div class="space-x-4">
          <router-link to="/" class="text-gray-700 hover:text-blue-600 transition"
            >Beranda</router-link
          >
          <router-link to="/daftarvilla" class="text-gray-700 hover:text-blue-600 transition"
            >Daftar Villa</router-link
          >
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-blue-100 to-white text-center">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
          Selamat Datang di VillakuApp
        </h1>
        <p class="text-lg text-gray-600 mb-8 animate-fade-in-delayed">
          Temukan villa yang nyaman dan murah sesuai kebutuhan Anda.
        </p>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition shadow-lg animate-bounce"
        >
          <router-link to="/daftarvilla"> Lihat Kamar </router-link>
        </button>
      </div>
    </section>

    <!-- Galeri -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Galeri Villa</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="@/assets/galeri1.jpg"
            alt="Kamar 1"
            class="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src="@/assets/galeri22.jpg"
            alt="Kamar 2"
            class="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src="@/assets/galeri33.jpg"
            alt="Kamar 3"
            class="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>

    <!-- Testimoni -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Testimoni Pengguna</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p class="text-gray-600 mb-4">"Kamarnya bersih dan nyaman, pelayanannya juga ramah."</p>
            <div class="font-semibold text-gray-800">- Budi</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p class="text-gray-600 mb-4">"Saya betah tinggal disini, fasilitas lengkap!"</p>
            <div class="font-semibold text-gray-800">- Siti</div>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <p class="text-gray-600 mb-4">"Lokasi strategis dan harga terjangkau. Recommended!"</p>
            <div class="font-semibold text-gray-800">- Andi</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t py-6 text-center text-gray-600">
      <p>&copy; 2025 KamarApp. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Tidak ada script tambahan
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
.animate-fade-in-delayed {
  animation: fadeIn 1.2s ease-out forwards;
}
</style>
