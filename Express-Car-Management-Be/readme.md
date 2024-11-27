# Car Management API

Ini adalah API manajemen mobil yang dibangun menggunakan **Express.js**, **PostgreSQL**, dan **Sequelize** sebagai ORM. API ini menyediakan operasi CRUD untuk mengelola pengguna dan mobil, serta kemampuan unggah gambar. Proyek ini mencakup sistem autentikasi dan otorisasi menggunakan **JWT**, dan hash password menggunakan **bcrypt**. Dokumentasi API tersedia melalui **Swagger**.

## Fitur

- **Manajemen Pengguna**: Registrasi, login, dan operasi CRUD untuk pengguna.
- **Manajemen Mobil**: Operasi CRUD untuk mobil, termasuk unggah gambar.
- **Unggah Gambar**: Menggunakan **Multer** untuk menangani unggahan file dan **ImageKit** untuk menyimpan gambar.
- **Autentikasi**: Login dan registrasi yang aman menggunakan **JWT** untuk peran superadmin, admin, dan member.
- **Otorisasi**: Kontrol akses berbasis peran untuk melindungi endpoint (superadmin, admin, member).
- **Hashing Password**: Menggunakan **bcrypt** untuk melakukan hash pada password saat registrasi.
- **Dokumentasi API**: API didokumentasikan menggunakan **Swagger** untuk referensi yang mudah.

## Teknologi yang Digunakan

- **Node.js**: Runtime JavaScript untuk membangun backend.
- **Express.js**: Framework web untuk membangun API.
- **PostgreSQL**: Database untuk menyimpan data.
- **Sequelize**: ORM untuk berinteraksi dengan database PostgreSQL.
- **Multer**: Middleware untuk menangani multipart/form-data, digunakan untuk unggah file.
- **ImageKit**: Layanan penyimpanan gambar.
- **JWT (JSON Web Token)**: Digunakan untuk autentikasi dan otorisasi pengguna secara aman.
- **bcrypt**: Library untuk melakukan hash pada password pengguna.
- **Swagger**: Digunakan untuk mendokumentasikan API.

## Instalasi

1. Clone repository:
   ```bash
   git clone https://github.com/NeoBitose/24001183-km7-aar-CarManagementApi-ch5.git

   cd car-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Atur variabel lingkungan dengan membuat file `.env`. Berikut contoh isinya:

   ```bash
   DB_USERNAME=
   DB_PASSWORD=
   DB_NAME=
   DB_HOST=
   DB_PORT=
   PORT=3000

   IMAGEKIT_PUBLIC_KEY=
   IMAGEKIT_PRIVATE_KEY=
   IMAGEKIT_URL=

   JWT_SECRET=
   JWT_EXPIRES_IN=1h
   ```

4. Jalankan migrasi database:
   ```bash
   npx sequelize db:create
   npx sequelize db:migrate
   npx sequelize db:seed:all
   ```

5. Jalankan server:
   ```bash
   npm run dev
   ```

6. Akses dokumentasi Swagger di:
   ```
   http://localhost:3000/api-docs
   ```
## Autentikasi & Otorisasi

- **JWT** digunakan untuk mengamankan rute. Token harus diberikan di header `Authorization` sebagai `Bearer <token>`.
- Peran pengguna meliputi:
  - **Superadmin**: Akses penuh ke semua sumber daya.
  - **Admin**: Mengelola mobil dan pengguna dengan akses terbatas dibandingkan superadmin.
  - **Member**: Pengguna biasa dengan akses terbatas.

## Hashing Password

Password di-hash menggunakan **bcrypt** saat registrasi pengguna untuk memastikan keamanan.

## Dokumentasi

Dokumentasi API yang detail tersedia melalui Swagger. Kunjungi:
```
http://localhost:3000/api-docs
```
