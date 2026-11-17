# 🌐 ArchGTPS Host Server Data (Pengganti `host.fyrefly.my.id`)

Source code ini berfungsi sebagai penyedia data `server_data.php` untuk APK Growtopia Firefly (seperti sistem `host.fyrefly.my.id`).

---

## ⚠️ Aturan Penting Domain APK:
Slot hostname di dalam `libgrowtopia.so` dibatasi **maksimal 18 karakter**.
* ❌ `felix-gtlogin.vercel.app` (24 karakter) -> **Terlalu panjang**, tidak bisa dimasukkan langsung ke slot hostname APK.
* ✅ Gunakan domain Vercel pendek (<= 18 karakter):
  * `nusaps.vercel.app` (17 karakter)
  * `nusa-ps.vercel.app` (18 karakter)
  * `nusapk.vercel.app` (17 karakter)
* ✅ Atau domain sendiri dengan Cloudflare:
  * `nusaps.my.id` (12 karakter)
  * `nusa.my.id` (10 karakter)
  * `nusa.cloud` (10 karakter)

---

## 🚀 Cara Deploy ke Vercel (Gratis & Otomatis HTTPS):

1. Masuk ke [https://vercel.com](https://vercel.com).
2. Buat project baru dari folder `SERVER_DATA_HOST/`.
3. Beri nama project Vercel kamu yang <= 18 karakter (contoh: `nusaps` sehingga menjadi `nusaps.vercel.app`).
4. Klik **Deploy**!
5. Domain `https://nusaps.vercel.app/growtopia/server_data.php` langsung aktif seketika dan mengarahkan player ke:
   * **Server IP**: `134.209.100.230`
   * **Port**: `55000`
   * **Login URL**: `felix-gtlogin.vercel.app`

---

## 🖥️ Atau Jalankan di VPS / Windows Sendiri:
```bash
node server.js
```
Server akan listen di port 80 dan langsung menyajikan response ke client Growtopia.

---
© ArchGTPS - All Rights Reserved.
