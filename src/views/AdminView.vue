<template>
  <div class="min-h-screen bg-gray-100 py-24 px-4 font-inter">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-10">Manajemen Villa</h1>

      <!-- Form Tambah / Edit -->
      <div class="bg-white rounded-2xl shadow-md p-8 mb-10">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              v-model="form.nama"
              type="text"
              placeholder="Nama Villa"
              class="input"
              required
            />
            <input
              v-model="form.harga"
              type="number"
              placeholder="Harga (Rp)"
              class="input"
              required
            />
          </div>
          <textarea
            v-model="form.deskripsi"
            placeholder="Deskripsi Villa"
            class="input h-28"
            required
          ></textarea>

          <div class="flex justify-end space-x-4">
            <button type="submit" class="btn-primary">
              {{ editing ? "Update" : "Tambah" }}
            </button>
            <button v-if="editing" type="button" @click="resetForm" class="btn-secondary">
              Batal
            </button>
          </div>
        </form>
      </div>

      <!-- Tabel Daftar Villa -->
      <div class="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead class="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th class="px-6 py-4">Nama villa</th>
              <th class="px-6 py-4">Deskripsi villa</th>
              <th class="px-6 py-4">Harga</th>
              <th class="px-6 py-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="villa in kamarList" :key="villa.id" class="border-b hover:bg-gray-50">
              <td class="px-6 py-4 font-medium">{{ villa.nama }}</td>
              <td class="px-6 py-4">{{ villa.deskripsi }}</td>
              <td class="px-6 py-4">Rp {{ parseInt(villa.harga).toLocaleString() }}</td>
              <td class="px-6 py-4 text-center space-x-2">
                <button @click="editKamar(villa)" class="btn-primary">Edit</button>
                <button @click="deleteKamar(villa.id)" class="btn-danger">Hapus</button>
              </td>
            </tr>
            <tr v-if="kamarList.length === 0">
              <td colspan="4" class="text-center text-gray-500 py-6">
                Belum ada villa yang ditambahkan
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

// import api
const endpoint = "https://backend-villaku.anampict.workers.dev/api/villa";

const kamarList = ref([]);
const editing = ref(false);
const editingId = ref(null);

const form = reactive({
  nama: "",
  deskripsi: "",
  harga: "",
});

async function fetchKamar() {
  try {
    const res = await fetch(endpoint);
    kamarList.value = await res.json();
  } catch (err) {
    console.error("Gagal ambil data:", err);
  }
}

async function handleSubmit() {
  try {
    const method = editing.value ? "PUT" : "POST";
    const url = editing.value ? `${endpoint}/${editingId.value}` : endpoint;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    resetForm();
    fetchKamar();
  } catch (err) {
    console.error("Gagal simpan data:", err);
  }
}

function editKamar(villa) {
  form.nama = villa.nama;
  form.deskripsi = villa.deskripsi;
  form.harga = villa.harga;
  editing.value = true;
  editingId.value = villa.id;
}

async function deleteKamar(id) {
  if (confirm("Yakin hapus villa ini?")) {
    try {
      await fetch(`${endpoint}/${id}`, { method: "DELETE" });
      fetchKamar();
    } catch (err) {
      console.error("Gagal hapus:", err);
    }
  }
}

function resetForm() {
  form.nama = "";
  form.deskripsi = "";
  form.harga = "";
  editing.value = false;
  editingId.value = null;
}

onMounted(fetchKamar);
</script>

<style scoped>
.input {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  background-color: #fff;
  transition: box-shadow 0.2s;
}
.input:focus {
  box-shadow: 0 0 0 2px #3b82f6;
  border-color: #3b82f6;
}

.btn-primary {
  background-color: #2563eb;
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background-color 0.2s;
  border: none;
}
.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-secondary {
  background-color: #d1d5db;
  color: #1f2937;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background-color 0.2s;
  border: none;
}
.btn-secondary:hover {
  background-color: #9ca3af;
}

.btn-danger {
  background-color: #dc2626;
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: background-color 0.2s;
  border: none;
}
.btn-danger:hover {
  background-color: #b91c1c;
}
</style>
